// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignerPayloadRawBase } from '@polkadot/types/types';
import type { ApiOptions, ApiTypes, DecorateMethod, Signer } from '../types';

import { isString, objectSpread, u8aToHex, u8aToU8a } from '@polkadot/util';

import { Getters } from './Getters';

interface KeyringSigner {
  sign (message: Uint8Array): Uint8Array;
}

interface SignerRawOptions {
  signer?: Signer;
}

export abstract class ApiBase<ApiType extends ApiTypes> extends Getters<ApiType> {
  /**
   * @description Create an instance of the class
   *
   * @param options Options object to create API instance or a Provider instance
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * const api = new Api().isReady();
   *
   * api.rpc.subscribeNewHeads((header) => {
   *   console.log(`new block #${header.number.toNumber()}`);
   * });
   * ```
   */
  constructor (options: ApiOptions = {}, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super(options, type, decorateMethod);
  }

  /**
   * @description Connect from the underlying provider, halting all network traffic
   */
  public connect (): Promise<void> {
    return this._rpcCore.connect();
  }

  /**
   * @description Disconnect from the underlying provider, halting all network traffic
   */
  public disconnect (): Promise<void> {
    this._unsubscribe();

    return this._rpcCore.disconnect();
  }

  /**
   * @description Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  public setSigner (signer: Signer): void {
    this._rx.signer = signer;
  }

  /**
   * @description Signs a raw signer payload, string or Uint8Array
   */
  public async sign (address: KeyringSigner | string, data: SignerPayloadRawBase, { signer }: SignerRawOptions = {}): Promise<string> {
    if (isString(address)) {
      const _signer = signer || this._rx.signer;

      if (!_signer || !_signer.signRaw) {
        throw new Error('No signer exists with a signRaw interface. You possibly need to pass through an explicit keypair for the origin so it can be used for signing.');
      }

      return (
        await _signer.signRaw(
          objectSpread({ type: 'bytes' }, data, { address })
        )
      ).signature;
    }

    return u8aToHex(address.sign(u8aToU8a(data.data)));
  }
}
