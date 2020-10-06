// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ChainProperties, SignedBlock, RuntimeVersion } from '@polkadot/types/interfaces';
import { Registry } from '@polkadot/types/types';
import { ApiBase, ApiOptions, ApiTypes, DecorateMethod } from '../types';
import { VersionedRegistry } from './types';

import BN from 'bn.js';
import { Observable, Subscription, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Metadata, Text, TypeRegistry } from '@polkadot/types';
import { LATEST_EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/Extrinsic';
import { getSpecAlias, getSpecTypes, getUpgradeVersion } from '@polkadot/types-known';
import { BN_ZERO, assert, logger, u8aEq, u8aToU8a } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import Decorate from './Decorate';

const KEEPALIVE_INTERVAL = 15000;
const DEFAULT_BLOCKNUMBER = { unwrap: () => BN_ZERO };

const l = logger('api/init');

export default abstract class Init<ApiType extends ApiTypes> extends Decorate<ApiType> {
  #healthTimer: NodeJS.Timeout | null = null;

  #registries: VersionedRegistry[] = [];

  #updateSub?: Subscription;

  constructor (options: ApiOptions, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super(options, type, decorateMethod);

    if (!this.hasSubscriptions) {
      l.warn('Api will be available in a limited mode since the provider does not support subscriptions');
    }

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
    this._queryMulti = this._decorateMulti(this._decorateMethod);
    this._rx.queryMulti = this._decorateMulti(this._rxDecorateMethod);
    this._rx.signer = options.signer;

    this._rpcCore.setRegistrySwap((hash: string | Uint8Array) => this.getBlockRegistry(hash));
    this._rpcCore.provider.on('disconnected', this.#onProviderDisconnect);
    this._rpcCore.provider.on('error', this.#onProviderError);
    this._rpcCore.provider.on('connected', this.#onProviderConnect);

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
  private _initRegistry (registry: Registry, chain: Text, version: { specName: Text, specVersion: BN }, chainProps?: ChainProperties): Registry {
    registry.setChainProperties(chainProps || this.registry.getChainProperties());
    registry.setKnownTypes(this._options);
    registry.register(getSpecTypes(registry, chain, version.specName, version.specVersion));

    // for bundled types, pull through the aliasses defined
    if (registry.knownTypes.typesBundle) {
      registry.knownTypes.typesAlias = getSpecAlias(registry, chain, version.specName);
    }

    return registry;
  }

  /**
   * @description Sets up a registry based on the block hash defined
   */
  public async getBlockRegistry (blockHash: string | Uint8Array): Promise<VersionedRegistry> {
    // shortcut in the case where we have an immediate-same request
    const lastBlockHash = u8aToU8a(blockHash);
    const existingViaHash = this.#registries.find((r) => r.lastBlockHash && u8aEq(lastBlockHash, r.lastBlockHash));

    if (existingViaHash) {
      return existingViaHash;
    }

    // ensure we have everything required
    assert(this._genesisHash && this._runtimeVersion, 'Cannot retrieve data on an uninitialized chain');

    // We have to assume that on the RPC layer the calls used here does not call back into
    // the registry swap, so getHeader & getRuntimeVersion should not be historic
    const header = this._genesisHash.eq(blockHash)
      ? { number: DEFAULT_BLOCKNUMBER, parentHash: this._genesisHash }
      : await this._rpcCore.chain.getHeader(blockHash).toPromise();

    assert(header?.parentHash && !header.parentHash.isEmpty, 'Unable to retrieve header and parent from supplied hash');

    // get the runtime version, either on-chain or via an known upgrade history
    const [firstVersion, lastVersion] = getUpgradeVersion(this._genesisHash, header.number.unwrap());
    const version = (firstVersion && (lastVersion || firstVersion.specVersion.eq(this._runtimeVersion.specVersion)))
      ? { specName: this._runtimeVersion.specName, specVersion: firstVersion.specVersion }
      : await this._rpcCore.state.getRuntimeVersion(header.parentHash).toPromise();

    // check for pre-existing registries
    const existingViaVersion = this.#registries.find((r) => r.specVersion.eq(version.specVersion));

    if (existingViaVersion) {
      existingViaVersion.lastBlockHash = lastBlockHash;

      return existingViaVersion;
    }

    // nothing has been found, construct new
    const registry = this._initRegistry(new TypeRegistry(), this._runtimeChain as Text, version);
    const metadata = await this._rpcCore.state.getMetadata(header.parentHash).toPromise();
    const result = { isDefault: false, lastBlockHash, metadata, metadataConsts: null, registry, specVersion: version.specVersion };

    registry.setMetadata(metadata);
    this.#registries.push(result);

    return result;
  }

  protected async _loadMeta (): Promise<boolean> {
    const genesisHash = await this._rpcCore.chain.getBlockHash(0).toPromise();

    // on re-connection to the same chain, we don't want to re-do everything from chain again
    if (this._isReady && !this._options.source && genesisHash.eq(this._genesisHash)) {
      return true;
    }

    if (this._genesisHash) {
      l.warn('Connection to new genesis detected, re-initializing');
    }

    this._genesisHash = genesisHash;

    if (this.#updateSub) {
      this.#updateSub.unsubscribe();
    }

    const { metadata = {} } = this._options;

    // only load from on-chain if we are not a clone (default path), alternatively
    // just use the values from the source instance provided
    this._runtimeMetadata = this._options.source?._isReady
      ? await this._metaFromSource(this._options.source)
      : await this._metaFromChain(metadata);

    return this._initFromMeta(this._runtimeMetadata);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  private async _metaFromSource (source: ApiBase<any>): Promise<Metadata> {
    this._extrinsicType = source.extrinsicVersion;
    this._runtimeChain = source.runtimeChain;
    this._runtimeVersion = source.runtimeVersion;
    this._genesisHash = source.genesisHash;

    const methods: string[] = [];

    // manually build a list of all available methods in this RPC, we are
    // going to filter on it to align the cloned RPC without making a call
    Object.keys(source.rpc).forEach((section): void => {
      Object.keys((source.rpc as Record<string, Record<string, unknown>>)[section]).forEach((method): void => {
        methods.push(`${section}_${method}`);
      });
    });

    this._filterRpcMethods(methods);

    return source.runtimeMetadata;
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
              thisRegistry.registry.setMetadata(metadata);
              thisRegistry.specVersion = version.specVersion;

              // clear the registry types to ensure that we override correctly
              this._initRegistry(thisRegistry.registry.init(), this._runtimeChain as Text, version);
              this.injectMetadata(metadata, false, thisRegistry.registry);

              return true;
            })
          )
      )
    ).subscribe();
  }

  private async _metaFromChain (optMetadata: Record<string, string>): Promise<Metadata> {
    const [runtimeVersion, chain, chainProps] = await Promise.all([
      this._rpcCore.state.getRuntimeVersion().toPromise(),
      this._rpcCore.system.chain().toPromise(),
      this._rpcCore.system.properties().toPromise()
    ]);

    // set our chain version & genesisHash as returned
    this._runtimeChain = chain;
    this._runtimeVersion = runtimeVersion;
    this._rx.runtimeVersion = runtimeVersion;

    // initializes the registry
    this._initRegistry(this.registry, chain, runtimeVersion, chainProps);
    this._subscribeUpdates();

    // filter the RPC methods (this does an rpc-methods call)
    await this._filterRpc();

    // retrieve metadata, either from chain  or as pass-in via options
    const metadataKey = `${this._genesisHash?.toHex() || '0x'}-${runtimeVersion.specVersion.toString()}`;
    const metadata = metadataKey in optMetadata
      ? new Metadata(this.registry, optMetadata[metadataKey])
      : await this._rpcCore.state.getMetadata().toPromise();

    this.registry.setMetadata(metadata);

    // setup the initial registry, when we have none
    if (!this.#registries.length) {
      this.#registries.push({ isDefault: true, lastBlockHash: null, metadata, metadataConsts: null, registry: this.registry, specVersion: runtimeVersion.specVersion });
    }

    // get unique types & validate
    metadata.getUniqTypes(false);

    return metadata;
  }

  private async _initFromMeta (metadata: Metadata): Promise<boolean> {
    const metaExtrinsic = metadata.asLatest.extrinsic;

    // only inject if we are not a clone (global init)
    if (metaExtrinsic.version.gt(BN_ZERO)) {
      this._extrinsicType = metaExtrinsic.version.toNumber();
    } else if (!this._options.source) {
      // detect the extrinsic version in-use based on the last block
      const { block: { extrinsics: [firstTx] } }: SignedBlock = await this._rpcCore.chain.getBlock().toPromise();

      // If we haven't sync-ed to 1 yes, this won't have any values
      this._extrinsicType = firstTx ? firstTx.type : LATEST_EXTRINSIC_VERSION;
    }

    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = this._runtimeVersion;

    this.injectMetadata(metadata, true);

    // derive is last, since it uses the decorated rx
    this._rx.derive = this._decorateDeriveRx(this._rxDecorateMethod);
    this._derive = this._decorateDerive(this._decorateMethod);

    return true;
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
        this._rpcCore.system.health().toPromise().catch((): void => {
          // ignore
        });
      }, KEEPALIVE_INTERVAL);
    } catch (_error) {
      const error = new Error(`FATAL: Unable to initialize the API: ${(_error as Error).message}`);

      l.error(error);

      this.emit('error', error);
    }
  }

  #onProviderDisconnect = (): void => {
    this.emit('disconnected');
    this._isConnected.next(false);

    if (this.#healthTimer) {
      clearInterval(this.#healthTimer);
      this.#healthTimer = null;
    }
  };

  #onProviderError = (error: Error): void => {
    this.emit('error', error);
  };
}
