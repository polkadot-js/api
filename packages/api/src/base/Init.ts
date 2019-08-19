// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeVersion, SignedBlock } from '@polkadot/types/interfaces';
import { RegistryTypes } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes } from '../types';

import constantsFromMeta from '@polkadot/api-metadata/consts/fromMetadata';
import extrinsicsFromMeta from '@polkadot/api-metadata/extrinsics/fromMetadata';
import storageFromMeta from '@polkadot/api-metadata/storage/fromMetadata';
import { GenericCall, GenericEvent, Metadata } from '@polkadot/types';
import { LATEST_VERSION as EXTRINSIC_LATEST_VERSION } from '@polkadot/types/primitive/Extrinsic/constants';
import { assert, logger } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';

import Decorate from './Decorate';

const KEEPALIVE_INTERVAL = 15000;

// these are override types for polkadot chains
// NOTE The SessionKeys definition for Polkadot and Substrate (OpaqueKeys
// implementation) are different. Detect Polkadot and inject the `Keys`
// definition as applicable. (3 keys in substrate vs 4 in Polkadot).
const TYPES_FOR_POLKADOT: Record<string, string> = {
  Keys: 'SessionKeysPolkadot'
};

// NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
// This is detected based on metadata version, since this is what we have up-front
const TYPES_SUBSTRATE_1 = {
  BlockNumber: 'u64',
  Index: 'u64',
  EventRecord: 'EventRecord0to76'
};

// Type overrides for specific node types
const SPEC_TYPES: Record<string, Record<string, string>> = {
  kusama: TYPES_FOR_POLKADOT,
  polkadot: TYPES_FOR_POLKADOT
};

const l = logger('api/decorator');

export default abstract class Init<ApiType> extends Decorate<ApiType> {
  private _healthTimer: NodeJS.Timeout | null = null;

  public constructor (options: ApiOptions, type: ApiTypes) {
    super(options, type);

    assert(this._rpcCore.provider.hasSubscriptions, 'Api can only be used with a provider supporting subscriptions');

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
  }

  public abstract registerTypes (types?: RegistryTypes): void;

  protected async loadMeta (): Promise<boolean> {
    const { metadata = {} } = this._options;

    // only load from on-chain if we are not a clone (default path), alternatively
    // just use the values from the source instance provided
    if (!this._options.source || !this._options.source._isReady) {
      this._runtimeMetadata = await this.metaFromChain(metadata);
    } else {
      this._extrinsicType = this._options.source.extrinsicVersion;
      this._runtimeMetadata = this._options.source.runtimeMetadata;
      this._runtimeVersion = this._options.source.runtimeVersion;
      this._genesisHash = this._options.source.genesisHash;
    }

    return this.initFromMeta(this._runtimeMetadata);
  }

  private async metaFromChain (optMetadata: Record<string, string>): Promise<Metadata> {
    [this._genesisHash, this._runtimeVersion] = await Promise.all([
      this._rpcCore.chain.getBlockHash(0).toPromise(),
      this._rpcCore.chain.getRuntimeVersion().toPromise()
    ]);

    // based on the node, inject specific types
    this.registerTypes(
      SPEC_TYPES[this._runtimeVersion.specName.toString()]
    );

    const metadataKey = `${this._genesisHash}-${(this._runtimeVersion as RuntimeVersion).specVersion}`;
    const metadata = metadataKey in optMetadata
      ? new Metadata(optMetadata[metadataKey])
      : await this._rpcCore.state.getMetadata().toPromise();

    // get unique types & validate
    metadata.getUniqTypes(false);

    return metadata;
  }

  private async initFromMeta (metadata: Metadata): Promise<boolean> {
    // HACK-ish Old EventRecord format for e.g. Alex, based on \metadata format
    if (metadata.version <= 3) {
      this.registerTypes(TYPES_SUBSTRATE_1);
    }

    const extrinsics = extrinsicsFromMeta(metadata);
    const storage = storageFromMeta(metadata);
    const constants = constantsFromMeta(metadata);

    // only inject if we are not a clone (global init)
    if (!this._options.source) {
      GenericEvent.injectMetadata(metadata);
      GenericCall.injectMethods(extrinsics);

      // detect the extrinsic version in-use based on the last block
      const { block: { extrinsics: [firstTx] } }: SignedBlock = await this._rpcCore.chain.getBlock().toPromise();

      // If we haven't sync-ed to 1 yes, this won't have any values
      this._extrinsicType = firstTx ? firstTx.type : EXTRINSIC_LATEST_VERSION;
    }

    this._extrinsics = this.decorateExtrinsics(extrinsics, this.decorateMethod);
    this._query = this.decorateStorage(storage, this.decorateMethod);
    this._consts = constants;

    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = this._runtimeVersion;
    this._rx.tx = this.decorateExtrinsics(extrinsics, this.rxDecorateMethod);
    this._rx.query = this.decorateStorage(storage, this.rxDecorateMethod);
    this._rx.consts = constants;

    // derive is last, since it uses the decorated rx
    this._derive = this.decorateDerive(this._rx as ApiInterfaceRx, this.decorateMethod);

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
