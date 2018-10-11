// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiBaseInterface } from './types';

import E3 from 'eventemitter3';
import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core/index';
import { Extrinsics } from '@polkadot/extrinsics/types';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import { Storage } from '@polkadot/storage/types';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import { Hash, Method, RuntimeVersion } from '@polkadot/types/index';
import RuntimeMetadata from '@polkadot/types/Metadata';
import assert from '@polkadot/util/assert';
import isUndefined from '@polkadot/util/is/undefined';
import logger from '@polkadot/util/logger';

type MetaDecoration = {
  callIndex?: Uint8Array,
  meta: any,
  method: string,
  section: string,
  toJSON: () => any
};

const l = logger('api');

const INIT_ERROR = `Api needs to be initialised before using, listen on 'ready'`;

export default abstract class ApiBase<R, S, E> extends E3.EventEmitter implements ApiBaseInterface<R, S, E> {
  protected _extrinsics?: E;
  protected _genesisHash?: Hash;
  protected _storage?: S;
  protected _rpc: R;
  protected _rpcBase: Rpc;
  protected _runtimeMetadata?: RuntimeMetadata;
  protected _runtimeVersion?: RuntimeVersion;

  /**
   * @param wsProvider An optional WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/rx';
   *
   * new Api().isReady.subscribe((api) => {
   *   api.rpc.newHead().subscribe((header) => {
   *     console.log(`new block #${header.blockNumber.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor (wsProvider?: WsProvider) {
    super();

    this._rpcBase = new Rpc(wsProvider);
    this._rpc = this.decorateRpc(this._rpcBase);

    this.init();
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get genesisHash (): Hash {
    assert(!isUndefined(this._genesisHash), INIT_ERROR);

    return this._genesisHash as Hash;
  }

  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  get runtimeMetadata (): RuntimeMetadata {
    assert(!isUndefined(this._runtimeMetadata), INIT_ERROR);

    return this._runtimeMetadata as RuntimeMetadata;
  }

  /**
   * @description Contains the version information for the current runtime.
   */
  get runtimeVersion (): RuntimeVersion {
    assert(!isUndefined(this._runtimeVersion), INIT_ERROR);

    return this._runtimeVersion as RuntimeVersion;
  }

  /**
   * @description Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions.
   * @example
   * <BR>
   *
   * ```javascript
   * api.rpc.chain
   *   .newHead()
   *   .subscribe((header) => {
   *     console.log('new header', header);
   *   });
   * ```
   */
  get rpc (): R {
    return this._rpc;
  }

  /**
   * @description Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.
   * @example
   * <BR>
   *
   * ```javascript
   * api.st.balances
   *   .freeBalance(<accountId>)
   *   .subscribe((balance) => {
   *     console.log('new balance', balance);
   *   });
   * ```
   */
  get st (): S {
    assert(!isUndefined(this._storage), INIT_ERROR);

    return this._storage as S;
  }

  /**
   * @description Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.
   * @example
   * <BR>
   *
   * ```javascript
   * api.tx.balances
   *   .transfer(<recipientId>, <balance>)
   *   .sign(<keyPair>, <accountNonce>, <blockHash (optional)>)
   *   .send()
   *   .subscribe((status) => {
   *     console.log('tx status', status);
   *   });
   * ```
   */
  get tx (): E {
    assert(!isUndefined(this._extrinsics), INIT_ERROR);

    return this._extrinsics as E;
  }

  private init (): void {
    let isReady: boolean = false;

    this._rpcBase._provider.on('disconnected', () => {
      this.emit('disconnected');
    });

    this._rpcBase._provider.on('connected', async () => {
      this.emit('connected');

      // TODO When re-connected (i.e. disconnected and then connected), we want to do a couple of things
      //   - refresh metadata as needed, decorating again
      //   - re-create storage subscriptions for those we already have
      //   - re-watch extrinsics where we have subscriptions already
      //   - need to refresh genesisHash, extrinsic resub only when it matches
      if (isReady) {
        return;
      }

      const hasMeta = await this.loadMeta();

      if (hasMeta && !isReady) {
        isReady = true;

        this.emit('ready', this);
      }
    });
  }

  private async loadMeta (): Promise<boolean> {
    try {
      this._runtimeMetadata = await this._rpcBase.state.getMetadata();
      this._runtimeVersion = await this._rpcBase.chain.getRuntimeVersion();
      this._genesisHash = await this._rpcBase.chain.getBlockHash(0);

      const extrinsics = extrinsicsFromMeta(this.runtimeMetadata);
      const storage = storageFromMeta(this.runtimeMetadata);

      this._extrinsics = this.decorateExtrinsics(extrinsics);
      this._storage = this.decorateStorage(storage);

      Method.injectExtrinsics(extrinsics);

      return true;
    } catch (error) {
      l.error('loadMeta', error);

      return false;
    }
  }

  protected decorateFunctionMeta (input: MetaDecoration, output: MetaDecoration): MetaDecoration {
    output.meta = input.meta;
    output.method = input.method;
    output.section = input.section;
    output.toJSON = input.toJSON;

    if (input.callIndex) {
      output.callIndex = input.callIndex;
    }

    return output;
  }

  protected abstract decorateRpc (rpc: Rpc): R;
  protected abstract decorateExtrinsics (extrinsics: Extrinsics): E;
  protected abstract decorateStorage (storage: Storage): S;
}
