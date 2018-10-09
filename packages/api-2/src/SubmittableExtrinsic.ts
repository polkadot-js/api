// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import RpcRx from '@polkadot/api-rx/index';
import { Extrinsic } from '@polkadot/types/index';

export default class SubmittableExtrinsic extends Extrinsic {
  private _rpc: RpcRx;

  constructor (rpc: RpcRx, extrinsic: Extrinsic) {
    super({
      method: extrinsic.method,
      signature: extrinsic.signature
    });

    this._rpc = rpc;
  }

  // TODO needs to be submitAndWatch
  send (): Observable<any> {
    return this._rpc.author.submitExtrinsic(this);
  }
}
