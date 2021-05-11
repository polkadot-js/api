// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RpcInterfaceMethod } from '@polkadot/rpc-core/types';
import type { Text } from '@polkadot/types';
import type { ChainProperties, Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { Observable, Subscription } from '@polkadot/x-rxjs';
import type { ApiBase, ApiOptions, ApiTypes, DecorateMethod } from '../types';
import type { VersionedRegistry } from './types';

import BN from 'bn.js';

import { Metadata } from '@polkadot/metadata';
import { TypeRegistry } from '@polkadot/types/create';
import { getSpecAlias, getSpecExtensions, getSpecHasher, getSpecRpc, getSpecTypes, getUpgradeVersion } from '@polkadot/types-known';
import { assert, BN_ZERO, logger, stringify, u8aEq, u8aToHex, u8aToU8a } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { detectedCapabilities } from './capabilities';
import { Decorate } from './Decorate';

const KEEPALIVE_INTERVAL = 10000;

const l = logger('api/init');

export abstract class Init<ApiType extends ApiTypes> extends Decorate<ApiType> {
  #healthTimer: NodeJS.Timeout | null = null;

  #registries: VersionedRegistry[] = [];

  #updateSub?: Subscription | null = null;

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
      this.#registries = options.source.#registries;
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
  private _initRegistry (registry: Registry, chain: Text, version: { specName: Text, specVersion: BN }, metadata: Metadata, chainProps?: ChainProperties): Registry {
    registry.setChainProperties(chainProps || this.registry.getChainProperties());
    registry.setKnownTypes(this._options);
    registry.register(getSpecTypes(registry, chain, version.specName, version.specVersion));
    registry.setHasher(getSpecHasher(registry, chain, version.specName));

    // for bundled types, pull through the aliases defined
    if (registry.knownTypes.typesBundle) {
      registry.knownTypes.typesAlias = getSpecAlias(registry, chain, version.specName);
    }

    registry.setMetadata(metadata, undefined, {
      ...getSpecExtensions(registry, chain, version.specName),
      ...(this._options.signedExtensions || {})
    });

    return registry;
  }

  /**
   * @description Sets up a registry based on the block hash defined
   */
  public async getBlockRegistry (blockHash: Uint8Array): Promise<VersionedRegistry> {
    const existingViaHash = this.#registries.find(({ lastBlockHash }) =>
      lastBlockHash && u8aEq(lastBlockHash, blockHash)
    );

    if (existingViaHash) {
      return existingViaHash;
    }

    // ensure we have everything required
    assert(this._genesisHash && this._runtimeVersion, 'Cannot retrieve data on an uninitialized chain');

    // We have to assume that on the RPC layer the calls used here does not call back into
    // the registry swap, so getHeader & getRuntimeVersion should not be historic
    const header = this.registry.createType('HeaderPartial',
      this._genesisHash.eq(blockHash)
        ? { number: BN_ZERO, parentHash: this._genesisHash }
        : await (this._rpcCore.chain.getHeader as RpcInterfaceMethod).json(blockHash).toPromise()
    );

    assert(!header.parentHash.isEmpty, 'Unable to retrieve header and parent from supplied hash');

    // get the runtime version, either on-chain or via an known upgrade history
    const [firstVersion, lastVersion] = getUpgradeVersion(this._genesisHash, header.number);
    const version = this.registry.createType('RuntimeVersionPartial',
      (firstVersion && (lastVersion || firstVersion.specVersion.eq(this._runtimeVersion.specVersion)))
        ? { specName: this._runtimeVersion.specName, specVersion: firstVersion.specVersion }
        : await (this._rpcCore.state.getRuntimeVersion as RpcInterfaceMethod).json(header.parentHash).toPromise()
    );

    // check for pre-existing registries
    const existingViaVersion = this.#registries.find(({ specVersion }) => specVersion.eq(version.specVersion));

    if (existingViaVersion) {
      existingViaVersion.lastBlockHash = blockHash;

      return existingViaVersion;
    }

    // nothing has been found, construct new
    const metadata = new Metadata(this.registry,
      await (this._rpcCore.state.getMetadata as RpcInterfaceMethod).raw(header.parentHash).toPromise()
    );
    const registry = this._initRegistry(new TypeRegistry(blockHash), this._runtimeChain as Text, version, metadata);

    // add our new registry
    const result = { isDefault: false, lastBlockHash: blockHash, metadata, metadataConsts: null, registry, specVersion: version.specVersion };

    this.#registries.push(result);

    // TODO This could be useful for historic, disabled due to cross-looping, i.e. .at queries
    // this._detectCapabilities(registry, blockHash);

    return result;
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

    const methods: string[] = [];

    // manually build a list of all available methods in this RPC, we are
    // going to filter on it to align the cloned RPC without making a call
    Object.keys(source.rpc).forEach((section): void => {
      Object.keys((source.rpc as Record<string, Record<string, unknown>>)[section]).forEach((method): void => {
        methods.push(`${section}_${method}`);
      });
    });

    this._filterRpcMethods(methods);

    return [source.genesisHash, source.runtimeMetadata];
  }

  private _detectCapabilities (registry: Registry, blockHash?: string | Uint8Array): boolean {
    detectedCapabilities(this._rx, blockHash)
      .toPromise()
      .then((types): void => {
        if (Object.keys(types).length) {
          registry.register(types as Record<string, string>);

          l.debug(() => `Capabilities detected${blockHash ? ` (${u8aToHex(u8aToU8a(blockHash))})` : ''}: ${stringify(types)}`);
        }
      })
      .catch(undefined);

    return true;
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
              const thisRegistry = this.#registries.find(({ isDefault }) => isDefault);

              assert(thisRegistry, 'Initialization error, cannot find the default registry');

              // setup the data as per the current versions
              thisRegistry.metadata = metadata;
              thisRegistry.metadataConsts = null;
              thisRegistry.specVersion = version.specVersion;

              // clear the registry types to ensure that we override correctly
              this._initRegistry(thisRegistry.registry.init(), this._runtimeChain as Text, version, metadata);
              this.injectMetadata(metadata, false, thisRegistry.registry);

              return this._detectCapabilities(thisRegistry.registry);
            })
          )
      )
    ).subscribe();
  }

  private async _metaFromChain (optMetadata?: Record<string, string>): Promise<[Hash, Metadata]> {
    const [genesisHash, runtimeVersion, chain, chainProps, rpcMethods, chainMetadata] = await Promise.all([
      this._rpcCore.chain.getBlockHash(0).toPromise(),
      this._rpcCore.state.getRuntimeVersion().toPromise(),
      this._rpcCore.system.chain().toPromise(),
      this._rpcCore.system.properties().toPromise(),
      this._rpcCore.rpc.methods().toPromise(),
      optMetadata
        ? Promise.resolve(null)
        : this._rpcCore.state.getMetadata().toPromise()
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
        : await this._rpcCore.state.getMetadata().toPromise()
    );

    // initializes the registry & RPC
    this._initRegistry(this.registry, chain, runtimeVersion, metadata, chainProps);
    this._filterRpc(rpcMethods, getSpecRpc(this.registry, chain, runtimeVersion.specName));
    this._subscribeUpdates();

    // setup the initial registry, when we have none
    if (!this.#registries.length) {
      this.#registries.push({ isDefault: true, lastBlockHash: null, metadata, metadataConsts: null, registry: this.registry, specVersion: runtimeVersion.specVersion });
    }

    // get unique types & validate
    metadata.getUniqTypes(false);

    return [genesisHash, metadata];
  }

  private _initFromMeta (metadata: Metadata): boolean {
    this._extrinsicType = metadata.asLatest.extrinsic.version.toNumber();
    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = this._runtimeVersion as RuntimeVersion; // must be set here

    // inject metadata and adjust the types as detected
    this.injectMetadata(metadata, true);

    // derive is last, since it uses the decorated rx
    this._rx.derive = this._decorateDeriveRx(this._rxDecorateMethod);
    this._derive = this._decorateDerive(this._decorateMethod);

    // detect the on-chain capabilities
    this._detectCapabilities(this.registry);

    return true;
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
    this.emit('connected');
    this._isConnected.next(true);

    try {
      const [hasMeta, cryptoReady] = await Promise.all([
        this._loadMeta(),
        this._options.initWasm === false
          ? Promise.resolve(true)
          : cryptoWaitReady()
      ]);

      if (hasMeta && !this._isReady && cryptoReady) {
        this._isReady = true;

        this.emit('ready', this);
      }

      this.#healthTimer = setInterval((): void => {
        this._rpcCore.system.health().toPromise().catch((error) => l.warn(`Health keepalive check failed: ${(error as Error).message}`));
      }, KEEPALIVE_INTERVAL);
    } catch (_error) {
      const error = new Error(`FATAL: Unable to initialize the API: ${(_error as Error).message}`);

      l.error(error);
      l.error(_error);

      this.emit('error', error);
    }
  }

  #onProviderDisconnect = (): void => {
    this.emit('disconnected');
    this._isConnected.next(false);

    this._unsubscribeHealth();
  };

  #onProviderError = (error: Error): void => {
    this.emit('error', error);
  };
}
