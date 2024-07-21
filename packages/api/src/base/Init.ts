// Copyright 2017-2024 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable, Subscription } from 'rxjs';
import type { Bytes, Text, u32, Vec } from '@polkadot/types';
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import type { BlockHash, ChainProperties, Hash, HeaderPartial, RuntimeVersion, RuntimeVersionApi, RuntimeVersionPartial } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { ApiBase, ApiDecoration, ApiOptions, ApiTypes, DecorateMethod } from '../types/index.js';
import type { VersionedRegistry } from './types.js';

import { firstValueFrom, map, of, switchMap } from 'rxjs';

import { Metadata, TypeRegistry } from '@polkadot/types';
import { getSpecAlias, getSpecExtensions, getSpecHasher, getSpecRpc, getSpecTypes, getUpgradeVersion } from '@polkadot/types-known';
import { assertReturn, BN_ZERO, isUndefined, logger, noop, objectSpread, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';
import { blake2AsHex, cryptoWaitReady } from '@polkadot/util-crypto';

import { Decorate } from './Decorate.js';

const KEEPALIVE_INTERVAL = 10000;
const WITH_VERSION_SHORTCUT = false;

const l = logger('api/init');

function textToString (t: Text): string {
  return t.toString();
}

export abstract class Init<ApiType extends ApiTypes> extends Decorate<ApiType> {
  #atLast: [string, ApiDecoration<ApiType>] | null = null;
  #healthTimer: ReturnType<typeof setInterval> | null = null;
  #registries: VersionedRegistry<ApiType>[] = [];
  #updateSub?: Subscription | null = null;
  #waitingRegistries: Record<HexString, Promise<VersionedRegistry<ApiType>>> = {};

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

    this._rpcCore.setResolveBlockHash((blockNumber) => firstValueFrom(this._rpcCore.chain.getBlockHash(blockNumber)));

    if (this.hasSubscriptions) {
      this._rpcCore.provider.on('disconnected', () => this.#onProviderDisconnect());
      this._rpcCore.provider.on('error', (e: Error) => this.#onProviderError(e));
      this._rpcCore.provider.on('connected', () => this.#onProviderConnect());
    } else if (!this._options.noInitWarn) {
      l.warn('Api will be available in a limited mode since the provider does not support subscriptions');
    }

    // If the provider was instantiated earlier, and has already emitted a
    // 'connected' event, then the `on('connected')` won't fire anymore. To
    // cater for this case, we call manually `this._onProviderConnect`.
    if (this._rpcCore.provider.isConnected) {
      this.#onProviderConnect().catch(noop);
    }
  }

  /**
   * @description Decorates a registry based on the runtime version
   */
  private _initRegistry (registry: Registry, chain: Text, version: { specName: Text, specVersion: BN }, metadata: Metadata, chainProps?: ChainProperties): void {
    registry.clearCache();
    registry.setChainProperties(chainProps || this.registry.getChainProperties());
    registry.setKnownTypes(this._options);
    registry.register(getSpecTypes(registry, chain, version.specName, version.specVersion));
    registry.setHasher(getSpecHasher(registry, chain, version.specName));

    // for bundled types, pull through the aliases defined
    if (registry.knownTypes.typesBundle) {
      registry.knownTypes.typesAlias = getSpecAlias(registry, chain, version.specName);
    }

    registry.setMetadata(metadata, undefined, objectSpread<ExtDef>({}, getSpecExtensions(registry, chain, version.specName), this._options.signedExtensions), this._options.noInitWarn);
  }

  /**
   * @description Returns the default versioned registry
   */
  private _getDefaultRegistry (): VersionedRegistry<ApiType> {
    return assertReturn(this.#registries.find(({ isDefault }) => isDefault), 'Initialization error, cannot find the default registry');
  }

  /**
   * @description Returns a decorated API instance at a specific point in time
   */
  public async at (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion): Promise<ApiDecoration<ApiType>> {
    const u8aHash = u8aToU8a(blockHash);
    const u8aHex = u8aToHex(u8aHash);
    const registry = await this.getBlockRegistry(u8aHash, knownVersion);

    if (!this.#atLast || this.#atLast[0] !== u8aHex) {
      // always create a new decoration - since we are pointing to a specific hash, this
      // means that all queries needs to use that hash (not a previous one already existing)
      this.#atLast = [u8aHex, this._createDecorated(registry, true, null, u8aHash).decoratedApi];
    }

    return this.#atLast[1];
  }

  private async _createBlockRegistry (blockHash: Uint8Array, header: HeaderPartial, version: RuntimeVersionPartial): Promise<VersionedRegistry<ApiType>> {
    const registry = new TypeRegistry(blockHash);
    const metadata = await this._retrieveMetadata(version.apis, header.parentHash);
    const runtimeChain = this._runtimeChain;

    if (!runtimeChain) {
      throw new Error('Invalid initializion order, runtimeChain is not available');
    }

    this._initRegistry(registry, runtimeChain, version, metadata);

    // add our new registry
    const result = { counter: 0, lastBlockHash: blockHash, metadata, registry, runtimeVersion: version };

    this.#registries.push(result);

    return result;
  }

  private _cacheBlockRegistryProgress (key: HexString, creator: () => Promise<VersionedRegistry<ApiType>>): Promise<VersionedRegistry<ApiType>> {
    // look for waiting resolves
    let waiting = this.#waitingRegistries[key];

    if (isUndefined(waiting)) {
      // nothing waiting, construct new
      waiting = this.#waitingRegistries[key] = new Promise<VersionedRegistry<ApiType>>((resolve, reject): void => {
        creator()
          .then((registry): void => {
            delete this.#waitingRegistries[key];
            resolve(registry);
          })
          .catch((error): void => {
            delete this.#waitingRegistries[key];
            reject(error);
          });
      });
    }

    return waiting;
  }

  private _getBlockRegistryViaVersion (blockHash: Uint8Array, version?: RuntimeVersionPartial): VersionedRegistry<ApiType> | null {
    if (version) {
      // check for pre-existing registries. We also check specName, e.g. it
      // could be changed like in Westmint with upgrade from shell -> westmint
      const existingViaVersion = this.#registries.find(({ runtimeVersion: { specName, specVersion } }) =>
        specName.eq(version.specName) &&
        specVersion.eq(version.specVersion)
      );

      if (existingViaVersion) {
        existingViaVersion.counter++;
        existingViaVersion.lastBlockHash = blockHash;

        return existingViaVersion;
      }
    }

    return null;
  }

  private async _getBlockRegistryViaHash (blockHash: Uint8Array): Promise<VersionedRegistry<ApiType>> {
    // ensure we have everything required
    if (!this._genesisHash || !this._runtimeVersion) {
      throw new Error('Cannot retrieve data on an uninitialized chain');
    }

    // We have to assume that on the RPC layer the calls used here does not call back into
    // the registry swap, so getHeader & getRuntimeVersion should not be historic
    const header = this.registry.createType('HeaderPartial',
      this._genesisHash.eq(blockHash)
        ? { number: BN_ZERO, parentHash: this._genesisHash }
        : await firstValueFrom(this._rpcCore.chain.getHeader.raw(blockHash))
    );

    if (header.parentHash.isEmpty) {
      throw new Error('Unable to retrieve header and parent from supplied hash');
    }

    // get the runtime version, either on-chain or via an known upgrade history
    const [firstVersion, lastVersion] = getUpgradeVersion(this._genesisHash, header.number);
    const version = this.registry.createType('RuntimeVersionPartial',
      WITH_VERSION_SHORTCUT && (
        firstVersion && (
          lastVersion ||
          firstVersion.specVersion.eq(this._runtimeVersion.specVersion)
        )
      )
        ? { apis: firstVersion.apis, specName: this._runtimeVersion.specName, specVersion: firstVersion.specVersion }
        : await firstValueFrom(this._rpcCore.state.getRuntimeVersion.raw(header.parentHash))
    );

    return (
      // try to find via version
      this._getBlockRegistryViaVersion(blockHash, version) ||
      // return new or in-flight result
      await this._cacheBlockRegistryProgress(version.toHex(), () => this._createBlockRegistry(blockHash, header, version))
    );
  }

  /**
   * @description Sets up a registry based on the block hash defined
   */
  public async getBlockRegistry (blockHash: Uint8Array, knownVersion?: RuntimeVersion): Promise<VersionedRegistry<ApiType>> {
    return (
      // try to find via blockHash
      this.#registries.find(({ lastBlockHash }) =>
        lastBlockHash && u8aEq(lastBlockHash, blockHash)
      ) ||
      // try to find via version
      this._getBlockRegistryViaVersion(blockHash, knownVersion) ||
      // return new or in-flight result
      await this._cacheBlockRegistryProgress(u8aToHex(blockHash), () => this._getBlockRegistryViaHash(blockHash))
    );
  }

  protected async _loadMeta (): Promise<boolean> {
    // on re-connection to the same chain, we don't want to re-do everything from chain again
    if (this._isReady) {
      // on re-connection only re-subscribe to chain updates if we are not a clone
      if (!this._options.source) {
        this._subscribeUpdates();
      }

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

    for (let s = 0, scount = sections.length; s < scount; s++) {
      const section = sections[s];
      const methods = Object.keys((source.rpc as unknown as Record<string, Record<string, unknown>>)[section]);

      for (let m = 0, mcount = methods.length; m < mcount; m++) {
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
              const runtimeChain = this._runtimeChain;

              if (!runtimeChain) {
                throw new Error('Invalid initializion order, runtimeChain is not available');
              }

              // setup the data as per the current versions
              thisRegistry.metadata = metadata;
              thisRegistry.runtimeVersion = version;

              this._initRegistry(this.registry, runtimeChain, version, metadata);
              this._injectMetadata(thisRegistry, true);

              return true;
            })
          )
      )
    ).subscribe();
  }

  private async _metaFromChain (optMetadata?: Record<string, HexString>): Promise<[Hash, Metadata]> {
    const [genesisHash, runtimeVersion, chain, chainProps, rpcMethods] = await Promise.all([
      firstValueFrom(this._rpcCore.chain.getBlockHash(0)),
      firstValueFrom(this._rpcCore.state.getRuntimeVersion()),
      firstValueFrom(this._rpcCore.system.chain()),
      firstValueFrom(this._rpcCore.system.properties()),
      firstValueFrom(this._rpcCore.rpc.methods())
    ]);

    // set our chain version & genesisHash as returned
    this._runtimeChain = chain;
    this._runtimeVersion = runtimeVersion;
    this._rx.runtimeVersion = runtimeVersion;

    // retrieve metadata, either from chain  or as pass-in via options
    const metadataKey = `${genesisHash.toHex() || '0x'}-${runtimeVersion.specVersion.toString()}`;
    const metadata = optMetadata?.[metadataKey]
      ? new Metadata(this.registry, optMetadata[metadataKey])
      : await this._retrieveMetadata(runtimeVersion.apis);

    // initializes the registry & RPC
    this._initRegistry(this.registry, chain, runtimeVersion, metadata, chainProps);
    this._filterRpc(rpcMethods.methods.map(textToString), getSpecRpc(this.registry, chain, runtimeVersion.specName));
    this._subscribeUpdates();

    // setup the initial registry, when we have none
    if (!this.#registries.length) {
      this.#registries.push({ counter: 0, isDefault: true, metadata, registry: this.registry, runtimeVersion });
    }

    // get unique types & validate
    metadata.getUniqTypes(this._options.throwOnUnknown || false);

    return [genesisHash, metadata];
  }

  private _initFromMeta (metadata: Metadata): boolean {
    const runtimeVersion = this._runtimeVersion;

    if (!runtimeVersion) {
      throw new Error('Invalid initializion order, runtimeVersion is not available');
    }

    this._extrinsicType = metadata.asLatest.extrinsic.version.toNumber();
    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = runtimeVersion;

    // inject metadata and adjust the types as detected
    this._injectMetadata(this._getDefaultRegistry(), true);

    // derive is last, since it uses the decorated rx
    this._rx.derive = this._decorateDeriveRx(this._rxDecorateMethod);
    this._derive = this._decorateDerive(this._decorateMethod);

    return true;
  }

  /**
   * @internal
   *
   * Tries to use runtime api calls to retrieve metadata. This ensures the api initializes with the latest metadata.
   * If the runtime call is not there it will use the rpc method.
   */
  private async _retrieveMetadata (apis: Vec<RuntimeVersionApi>, at?: BlockHash | string | Uint8Array): Promise<Metadata> {
    let metadataVersion: u32 | null = null;
    const metadataApi = apis.find(([a]) => a.eq(blake2AsHex('Metadata', 64)));

    // This chain does not have support for the metadataApi, or does not have the required version.
    if (!metadataApi || metadataApi[1].toNumber() < 2) {
      l.warn('MetadataApi not available, rpc::state::get_metadata will be used.');

      return at
        ? new Metadata(this.registry, await firstValueFrom(this._rpcCore.state.getMetadata.raw<HexString>(at)))
        : await firstValueFrom(this._rpcCore.state.getMetadata());
    }

    try {
      const metadataVersionsAsBytes = at
        ? await firstValueFrom(this._rpcCore.state.call.raw('Metadata_metadata_versions', '0x', at))
        : await firstValueFrom(this._rpcCore.state.call('Metadata_metadata_versions', '0x'));
      const versions = this.registry.createType('Vec<u32>', metadataVersionsAsBytes);

      metadataVersion = versions.reduce((largest, current) => current.gt(largest) ? current : largest);
    } catch (e) {
      l.warn(`error with state_call::Metadata_metadata_versions, rpc::state::get_metadata will be used: ${(e as Error).message}`);
    }

    if (metadataVersion) {
      try {
        const metadataBytes = at
          ? await firstValueFrom(this._rpcCore.state.call.raw<Bytes>('Metadata_metadata_at_version', u8aToHex(metadataVersion.toU8a()), at))
          : await firstValueFrom(this._rpcCore.state.call('Metadata_metadata_at_version', u8aToHex(metadataVersion.toU8a())));
        // When the metadata is called with `at` it is required to use `.raw`. Therefore since the length prefix is not present the
        // need to create a `Raw` type is necessary before creating the `OpaqueMetadata` type or else there will be a magic number
        // mismatch
        const rawMeta = at
          ? this.registry.createType('Raw', metadataBytes).toU8a()
          : metadataBytes;
        const opaqueMetadata = this.registry.createType('Option<OpaqueMetadata>', rawMeta).unwrapOr(null);

        if (opaqueMetadata) {
          return new Metadata(this.registry, opaqueMetadata.toHex());
        }
      } catch (e) {
        l.warn(`error with state_call::Metadata_metadata_at_version, rpc::state::get_metadata will be used: ${(e as Error).message}`);
      }
    }

    return await firstValueFrom(this._rpcCore.state.getMetadata());
  }

  private _subscribeHealth (): void {
    this._unsubscribeHealth();

    // Only enable the health keepalive on WS, not needed on HTTP
    this.#healthTimer = this.hasSubscriptions
      ? setInterval((): void => {
        firstValueFrom(this._rpcCore.system.health.raw()).catch(noop);
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

  async #onProviderConnect (): Promise<void> {
    this._isConnected.next(true);
    this.emit('connected');

    try {
      const cryptoReady = this._options.initWasm === false
        ? true
        : await cryptoWaitReady();
      const hasMeta = await this._loadMeta();

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
  }

  #onProviderDisconnect (): void {
    this._isConnected.next(false);
    this._unsubscribe();
    this.emit('disconnected');
  }

  #onProviderError (error: Error): void {
    this.emit('error', error);
  }
}
