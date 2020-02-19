// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SignedBlock, RuntimeVersion } from '@polkadot/types/interfaces';
import { ApiBase, ApiOptions, ApiTypes, DecorateMethod } from '../types';

import { combineLatest, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Metadata, Text } from '@polkadot/types';
import { getMetadataTypes, getSpecTypes, getUserTypes } from '@polkadot/types/known';
import { LATEST_EXTRINSIC_VERSION } from '@polkadot/types/primitive/Extrinsic/Extrinsic';
import { logger } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import Decorate from './Decorate';

const KEEPALIVE_INTERVAL = 15000;

const l = logger('api/decorator');

export default abstract class Init<ApiType extends ApiTypes> extends Decorate<ApiType> {
  private _healthTimer: NodeJS.Timeout | null = null;

  constructor (options: ApiOptions, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super(options, type, decorateMethod);

    if (!this.hasSubscriptions) {
      console.warn('Api will be available in a limited mode since the provider does not support subscriptions');
    }

    // We only register the types (global) if this is not a cloned instance.
    // Do right up-front, so we get in the user types before we are actually
    // doing anything on-chain, this ensures we have the overrides in-place
    if (!options.source && options.types) {
      this.registerTypes(options.types);
    }

    this._rpc = this.decorateRpc(this._rpcCore, this.decorateMethod);
    this._rx.rpc = this.decorateRpc(this._rpcCore, this.rxDecorateMethod);
    this._queryMulti = this.decorateMulti(this.decorateMethod);
    this._rx.queryMulti = this.decorateMulti(this.rxDecorateMethod);
    this._rx.signer = options.signer;

    this._rpcCore.provider.on('disconnected', this._onProviderDisconnect);
    this._rpcCore.provider.on('error', this._onProviderError);
    this._rpcCore.provider.on('connected', this._onProviderConnect);

    // If the provider was instantiated earlier, and has already emitted a
    // 'connected' event, then the `on('connected')` won't fire anymore. To
    // cater for this case, we call manually `this._onProviderConnect`.
    if (this._rpcCore.provider.isConnected()) {
      this._onProviderConnect();
    }
  }

  protected async loadMeta (): Promise<boolean> {
    const { metadata = {} } = this._options;

    // only load from on-chain if we are not a clone (default path), alternatively
    // just use the values from the source instance provided
    if (!this._options.source || !this._options.source._isReady) {
      this._runtimeMetadata = await this.metaFromChain(metadata);
    } else {
      this._runtimeMetadata = await this.metaFromSource(this._options.source);
    }

    return this.initFromMeta(this._runtimeMetadata);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  private async metaFromSource (source: ApiBase<any>): Promise<Metadata> {
    this._extrinsicType = source.extrinsicVersion;
    this._runtimeVersion = source.runtimeVersion;
    this._genesisHash = source.genesisHash;
    this.registry.setChainProperties(source.registry.getChainProperties());

    const methods: string[] = [];

    // manually build a list of all available methods in this RPC, we are
    // going to filter on it to align the cloned RPC without making a call
    Object.keys(source.rpc).forEach((section): void => {
      Object.keys((source.rpc as any)[section]).forEach((method): void => {
        methods.push(`${section}_${method}`);
      });
    });

    this.filterRpcMethods(methods);

    return source.runtimeMetadata;
  }

  // subscribe to metadata updates, inject the types on changes
  private subscribeUpdates (): void {
    this._rpcCore.state.subscribeRuntimeVersion().pipe(
      switchMap((version: RuntimeVersion) =>
        combineLatest(
          of(version),
          this._rpcCore.state.getMetadata()
        )
      ),
      tap(([version, metadata]: [RuntimeVersion, Metadata]): void => {
        if (!(this._runtimeVersion?.specVersion.eq(version.specVersion))) {
          console.info(`Runtime version updated to ${version.specVersion}`);

          this._runtimeVersion = version;
          this.registerTypes(getSpecTypes(this._runtimeChain as Text, version));
          this.injectMetadata(metadata);
        }
      })
    );
  }

  private async metaFromChain (optMetadata: Record<string, string>): Promise<Metadata> {
    const { typesChain, typesSpec } = this._options;
    const [genesisHash, runtimeVersion, chain, chainProps] = await Promise.all([
      this._rpcCore.chain.getBlockHash(0).toPromise(),
      this._rpcCore.state.getRuntimeVersion().toPromise(),
      this._rpcCore.system.chain().toPromise(),
      this._rpcCore.system.properties().toPromise()
    ]);

    // set our chain version & genesisHash as returned
    this._genesisHash = genesisHash;
    this._runtimeChain = chain;
    this._runtimeVersion = runtimeVersion;

    // do the setup for the specific chain
    this.registry.setChainProperties(chainProps);
    this.registerTypes(getSpecTypes(chain, runtimeVersion));
    this.registerTypes(getUserTypes(chain, runtimeVersion, typesChain, typesSpec));
    this.subscribeUpdates();

    // filter the RPC methods (this does an rpc-methods call)
    await this.filterRpc();

    // retrieve metadata, either from chain  or as pass-in via options
    const metadataKey = `${genesisHash}-${runtimeVersion.specVersion}`;
    const metadata = metadataKey in optMetadata
      ? new Metadata(this.registry, optMetadata[metadataKey])
      : await this._rpcCore.state.getMetadata().toPromise();

    // get unique types & validate
    metadata.getUniqTypes(false);

    return metadata;
  }

  private async initFromMeta (metadata: Metadata): Promise<boolean> {
    // inject types based on metadata, if applicable
    this.registerTypes(getMetadataTypes(metadata.version));

    const metaExtrinsic = metadata.asLatest.extrinsic;

    // only inject if we are not a clone (global init)
    if (metaExtrinsic.version.gtn(0)) {
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

    this.injectMetadata(metadata);

    // derive is last, since it uses the decorated rx
    this._rx.derive = this.decorateDeriveRx(this.rxDecorateMethod);
    this._derive = this.decorateDerive(this.decorateMethod);

    return true;
  }

  private _onProviderConnect = async (): Promise<void> => {
    this.emit('connected');
    this._isConnected.next(true);

    try {
      const [hasMeta, cryptoReady] = await Promise.all([
        this.loadMeta(),
        cryptoWaitReady()
      ]);

      if (hasMeta && !this._isReady && cryptoReady) {
        this._isReady = true;

        this.emit('ready', this);
      }

      this._healthTimer = setInterval((): void => {
        this._rpcCore.system.health().toPromise().catch((): void => {
          // ignore
        });
      }, KEEPALIVE_INTERVAL);
    } catch (_error) {
      const error = new Error(`FATAL: Unable to initialize the API: ${_error.message}`);

      l.error(error);

      this.emit('error', error);
    }
  }

  private _onProviderDisconnect = (): void => {
    this.emit('disconnected');
    this._isConnected.next(false);

    if (this._healthTimer) {
      clearInterval(this._healthTimer);
      this._healthTimer = null;
    }
  };

  private _onProviderError = (error: Error): void => {
    this.emit('error', error);
  };
}
