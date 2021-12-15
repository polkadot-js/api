// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable, Subscription } from 'rxjs';
import type { Text } from '@polkadot/types';
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import type { ChainProperties, Hash, RuntimeVersion, RuntimeVersionPartial } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { ApiBase, ApiDecoration, ApiOptions, ApiTypes, DecorateMethod } from '../types';
import type { VersionedRegistry } from './types';

import { firstValueFrom, map, of, switchMap } from 'rxjs';

import { Metadata, TypeRegistry } from '@polkadot/types';
import { getSpecAlias, getSpecExtensions, getSpecHasher, getSpecRpc, getSpecTypes, getUpgradeVersion } from '@polkadot/types-known';
import { assert, BN_ZERO, isUndefined, logger, objectSpread, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import { Decorate } from './Decorate';

const KEEPALIVE_INTERVAL = 10000;

const l = logger('api/init');

function textToString (t: Text): string {
  return t.toString();
}

export abstract class Init<ApiType extends ApiTypes> extends Decorate<ApiType> {
  #healthTimer: NodeJS.Timeout | null = null;

  #registries: VersionedRegistry<ApiType>[] = [];

  #updateSub?: Subscription | null = null;

  #waitingRegistries: Record<string, Promise<VersionedRegistry<ApiType>>> = {};

  constructor (options: ApiOptions, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super(options, type, decorateMethod);

    // all injected types added to the registry for overrides
    this.registry.setKnownTypes(options);

    // We only register the types (global) if this is not a cloned instance.
    // Do right up-front, so we get in the user types before we are actually
    // doing anything on-chain, this ensures we have the overrides in-place
    if (!options.source) {
      this.registerTypes(options.types);
    } else {
      this.#registries = options.source.#registries as VersionedRegistry<ApiType>[];
    }

    this._rpc = this._decorateRpc(this._rpcCore, this._decorateMethod);
    this._rx.rpc = this._decorateRpc(this._rpcCore, this._rxDecorateMethod);

    if (this.supportMulti) {
      this._queryMulti = this._decorateMulti(this._decorateMethod);
      this._rx.queryMulti = this._decorateMulti(this._rxDecorateMethod);
    }

    this._rx.signer = options.signer;

    this._rpcCore.setRegistrySwap((blockHash: Uint8Array) => this.getBlockRegistry(blockHash));

    if (this.hasSubscriptions) {
      this._rpcCore.provider.on('disconnected', this.#onProviderDisconnect);
      this._rpcCore.provider.on('error', this.#onProviderError);
      this._rpcCore.provider.on('connected', this.#onProviderConnect);
    } else {
      l.warn('Api will be available in a limited mode since the provider does not support subscriptions');
    }

    // If the provider was instantiated earlier, and has already emitted a
    // 'connected' event, then the `on('connected')` won't fire anymore. To
    // cater for this case, we call manually `this._onProviderConnect`.
    if (this._rpcCore.provider.isConnected) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.#onProviderConnect();
    }
  }

  /**
   * @description Decorates a registry based on the runtime version
   */
  private _initRegistry (registry: Registry, chain: Text, version: { specName: Text, specVersion: BN }, metadata: Metadata, chainProps?: ChainProperties): void {
    registry.setChainProperties(chainProps || this.registry.getChainProperties());
    registry.setKnownTypes(this._options);
    registry.register(getSpecTypes(registry, chain, version.specName, version.specVersion));
    registry.setHasher(getSpecHasher(registry, chain, version.specName));

    // for bundled types, pull through the aliases defined
    if (registry.knownTypes.typesBundle) {
      registry.knownTypes.typesAlias = getSpecAlias(registry, chain, version.specName);
    }

    registry.setMetadata(metadata, undefined, objectSpread<ExtDef>({}, getSpecExtensions(registry, chain, version.specName), this._options.signedExtensions));
  }

  /**
   * @description Returns the default versioned registry
   */
  private _getDefaultRegistry (): VersionedRegistry<ApiType> {
    // get the default registry version
    const thisRegistry = this.#registries.find(({ isDefault }) => isDefault);

    assert(thisRegistry, 'Initialization error, cannot find the default registry');

    return thisRegistry;
  }

  /**
   * @description Returns a decorated API instance at a specific point in time
   */
  public async at (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion): Promise<ApiDecoration<ApiType>> {
    const u8aHash = u8aToU8a(blockHash);
    const registry = await this.getBlockRegistry(u8aHash, knownVersion);

    // always create a new decoration - since we are pointing to a specific hash, this
    // means that all queries needs to use that hash (not a previous one already existing)
    return this._createDecorated(registry, true, null, u8aHash).decoratedApi;
  }

  private _getBlockRegistryViaVersion (blockHash: Uint8Array, version?: RuntimeVersionPartial): VersionedRegistry<ApiType> | null {
    if (version) {
      // check for pre-existing registries. We also check specName, e.g. it
      // could be changed like in Westmint with upgrade from shell -> westmint
      const existingViaVersion = this.#registries.find(({ specName, specVersion }) =>
        specName.eq(version.specName) &&
        specVersion.eq(version.specVersion)
      );

      if (existingViaVersion) {
        existingViaVersion.lastBlockHash = blockHash;

        return existingViaVersion;
      }
    }

    return null;
  }

  private async _getBlockRegistry (blockHash: Uint8Array): Promise<VersionedRegistry<ApiType>> {
    // ensure we have everything required
    assert(this._genesisHash && this._runtimeVersion, 'Cannot retrieve data on an uninitialized chain');

    // We have to assume that on the RPC layer the calls used here does not call back into
    // the registry swap, so getHeader & getRuntimeVersion should not be historic
    const header = this.registry.createType('HeaderPartial',
      this._genesisHash.eq(blockHash)
        ? { number: BN_ZERO, parentHash: this._genesisHash }
        : await firstValueFrom(this._rpcCore.chain.getHeader.raw(blockHash))
    );

    assert(!header.parentHash.isEmpty, 'Unable to retrieve header and parent from supplied hash');

    // get the runtime version, either on-chain or via an known upgrade history
    const [firstVersion, lastVersion] = getUpgradeVersion(this._genesisHash, header.number);
    const version = this.registry.createType('RuntimeVersionPartial',
      (firstVersion && (lastVersion || firstVersion.specVersion.eq(this._runtimeVersion.specVersion)))
        ? { specName: this._runtimeVersion.specName, specVersion: firstVersion.specVersion }
        : await firstValueFrom(this._rpcCore.state.getRuntimeVersion.raw(header.parentHash))
    );

    const existingViaVersion = this._getBlockRegistryViaVersion(blockHash, version);

    if (existingViaVersion) {
      return existingViaVersion;
    }

    // nothing has been found, construct new
    const registry = new TypeRegistry(blockHash);
    const metadata = new Metadata(registry,
      await firstValueFrom(this._rpcCore.state.getMetadata.raw<HexString>(header.parentHash))
    );

    this._initRegistry(registry, this._runtimeChain as Text, version, metadata);

    // add our new registry
    const result = { lastBlockHash: blockHash, metadata, registry, specName: version.specName, specVersion: version.specVersion };

    this.#registries.push(result);

    return result;
  }

  /**
   * @description Sets up a registry based on the block hash defined
   */
  public async getBlockRegistry (blockHash: Uint8Array, knownVersion?: RuntimeVersion): Promise<VersionedRegistry<ApiType>> {
    const existingViaHash = this.#registries.find(({ lastBlockHash }) =>
      lastBlockHash && u8aEq(lastBlockHash, blockHash)
    );

    if (existingViaHash) {
      return existingViaHash;
    }

    const existingViaVersion = this._getBlockRegistryViaVersion(blockHash, knownVersion);

    if (existingViaVersion) {
      return existingViaVersion;
    }

    const blockHashHex = u8aToHex(blockHash);
    let waiting = this.#waitingRegistries[blockHashHex];

    if (isUndefined(waiting)) {
      waiting = this._getBlockRegistry(blockHash);
      this.#waitingRegistries[blockHashHex] = waiting;

      // when we have resolved, remove this from the waiting list
      waiting
        .then((): void => {
          delete this.#waitingRegistries[blockHashHex];
        })
        .catch(() => undefined);
    }

    return waiting;
  }

  protected async _loadMeta (): Promise<boolean> {
    // on re-connection to the same chain, we don't want to re-do everything from chain again
    if (this._isReady) {
      return true;
    }

    this._unsubscribeUpdates();

    // only load from on-chain if we are not a clone (default path), alternatively
    // just use the values from the source instance provided
    [this._genesisHash, this._runtimeMetadata] = this._options.source?._isReady
      ? await this._metaFromSource(this._options.source)
      : await this._metaFromChain(this._options.metadata);

    return this._initFromMeta(this._runtimeMetadata);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  private async _metaFromSource (source: ApiBase<any>): Promise<[Hash, Metadata]> {
    this._extrinsicType = source.extrinsicVersion;
    this._runtimeChain = source.runtimeChain;
    this._runtimeVersion = source.runtimeVersion;

    // manually build a list of all available methods in this RPC, we are
    // going to filter on it to align the cloned RPC without making a call
    const sections = Object.keys(source.rpc);
    const rpcs: string[] = [];

    for (let s = 0; s < sections.length; s++) {
      const section = sections[s];
      const methods = Object.keys((source.rpc as Record<string, Record<string, unknown>>)[section]);

      for (let m = 0; m < methods.length; m++) {
        rpcs.push(`${section}_${methods[m]}`);
      }
    }

    this._filterRpc(rpcs, getSpecRpc(this.registry, source.runtimeChain, source.runtimeVersion.specName));

    return [source.genesisHash, source.runtimeMetadata];
  }

  // subscribe to metadata updates, inject the types on changes
  private _subscribeUpdates (): void {
    if (this.#updateSub || !this.hasSubscriptions) {
      return;
    }

    this.#updateSub = this._rpcCore.state.subscribeRuntimeVersion().pipe(
      switchMap((version: RuntimeVersion): Observable<boolean> =>
        // only retrieve the metadata when the on-chain version has been changed
        this._runtimeVersion?.specVersion.eq(version.specVersion)
          ? of(false)
          : this._rpcCore.state.getMetadata().pipe(
            map((metadata: Metadata): boolean => {
              l.log(`Runtime version updated to spec=${version.specVersion.toString()}, tx=${version.transactionVersion.toString()}`);

              this._runtimeMetadata = metadata;
              this._runtimeVersion = version;
              this._rx.runtimeVersion = version;

              // update the default registry version
              const thisRegistry = this._getDefaultRegistry();

              // setup the data as per the current versions
              thisRegistry.metadata = metadata;
              thisRegistry.specVersion = version.specVersion;

              // clear the registry types to ensure that we override correctly
              this._initRegistry(thisRegistry.registry.init(), this._runtimeChain as Text, version, metadata);
              this._injectMetadata(thisRegistry, false);

              return true;
            })
          )
      )
    ).subscribe();
  }

  private async _metaFromChain (optMetadata?: Record<string, HexString>): Promise<[Hash, Metadata]> {
    const [genesisHash, runtimeVersion, chain, chainProps, rpcMethods, chainMetadata] = await Promise.all([
      firstValueFrom(this._rpcCore.chain.getBlockHash(0)),
      firstValueFrom(this._rpcCore.state.getRuntimeVersion()),
      firstValueFrom(this._rpcCore.system.chain()),
      firstValueFrom(this._rpcCore.system.properties()),
      firstValueFrom(this._rpcCore.rpc.methods()),
      optMetadata
        ? Promise.resolve(null)
        : firstValueFrom(this._rpcCore.state.getMetadata())
    ]);

    // set our chain version & genesisHash as returned
    this._runtimeChain = chain;
    this._runtimeVersion = runtimeVersion;
    this._rx.runtimeVersion = runtimeVersion;

    // retrieve metadata, either from chain  or as pass-in via options
    const metadataKey = `${genesisHash.toHex() || '0x'}-${runtimeVersion.specVersion.toString()}`;
    const metadata = chainMetadata || (
      optMetadata && optMetadata[metadataKey]
        ? new Metadata(this.registry, optMetadata[metadataKey])
        : await firstValueFrom(this._rpcCore.state.getMetadata())
    );

    // initializes the registry & RPC
    this._initRegistry(this.registry, chain, runtimeVersion, metadata, chainProps);
    this._filterRpc(rpcMethods.methods.map(textToString), getSpecRpc(this.registry, chain, runtimeVersion.specName));
    this._subscribeUpdates();

    // setup the initial registry, when we have none
    if (!this.#registries.length) {
      this.#registries.push({ isDefault: true, metadata, registry: this.registry, specName: runtimeVersion.specName, specVersion: runtimeVersion.specVersion });
    }

    // get unique types & validate
    metadata.getUniqTypes(this._options.throwOnUnknown || false);

    return [genesisHash, metadata];
  }

  private _initFromMeta (metadata: Metadata): boolean {
    this._extrinsicType = metadata.asLatest.extrinsic.version.toNumber();
    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = this._runtimeVersion as RuntimeVersion; // must be set here

    // inject metadata and adjust the types as detected
    this._injectMetadata(this._getDefaultRegistry(), true);

    // derive is last, since it uses the decorated rx
    this._rx.derive = this._decorateDeriveRx(this._rxDecorateMethod);
    this._derive = this._decorateDerive(this._decorateMethod);

    return true;
  }

  private _subscribeHealth (): void {
    // Only enable the health keepalive on WS, not needed on HTTP
    this.#healthTimer = this.hasSubscriptions
      ? setInterval((): void => {
        firstValueFrom(this._rpcCore.system.health()).catch(() => undefined);
      }, KEEPALIVE_INTERVAL)
      : null;
  }

  private _unsubscribeHealth (): void {
    if (this.#healthTimer) {
      clearInterval(this.#healthTimer);
      this.#healthTimer = null;
    }
  }

  private _unsubscribeUpdates (): void {
    if (this.#updateSub) {
      this.#updateSub.unsubscribe();
      this.#updateSub = null;
    }
  }

  protected _unsubscribe (): void {
    this._unsubscribeHealth();
    this._unsubscribeUpdates();
  }

  #onProviderConnect = async (): Promise<void> => {
    this._isConnected.next(true);
    this.emit('connected');

    try {
      const [hasMeta, cryptoReady] = await Promise.all([
        this._loadMeta(),
        this._options.initWasm === false
          ? Promise.resolve(true)
          : cryptoWaitReady()
      ]);

      this._subscribeHealth();

      if (hasMeta && !this._isReady && cryptoReady) {
        this._isReady = true;

        this.emit('ready', this);
      }
    } catch (_error) {
      const error = new Error(`FATAL: Unable to initialize the API: ${(_error as Error).message}`);

      l.error(error);

      this.emit('error', error);
    }
  };

  #onProviderDisconnect = (): void => {
    this._isConnected.next(false);
    this._unsubscribeHealth();
    this.emit('disconnected');
  };

  #onProviderError = (error: Error): void => {
    this.emit('error', error);
  };
}
