// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { AccountId, Address, Hash } from '@polkadot/types/interfaces';
import { IKeyringPair, ISubmittableResult } from '@polkadot/types/types';
import { ApiObject, ContractABIPre } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import { compactAddLength, u8aToU8a } from '@polkadot/util';

import Abi from '../Abi';
import Blueprint from './Blueprint';
import { BaseWithTx } from './util';

type CodePutCodeResultSubscription<ApiType extends ApiTypes> = Observable<CodePutCodeResult<ApiType>>;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface CodePutCode<ApiType extends ApiTypes> {
  signAndSend (account: IKeyringPair | string | AccountId | Address): CodePutCodeResultSubscription<ApiType>;
}

class CodePutCodeResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly blueprint?: Blueprint<ApiType>;

  constructor (result: ISubmittableResult, blueprint?: Blueprint<ApiType>) {
    super(result);

    this.blueprint = blueprint;
  }
}

// NOTE Experimental, POC, bound to change
export default class Code<ApiType extends ApiTypes> extends BaseWithTx<ApiType> {
  public readonly code: Uint8Array;

  constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, wasm: string | Uint8Array) {
    super(api, abi, decorateMethod);

    this.code = u8aToU8a(wasm);
  }

  public createBlueprint = (maxGas: number | BN): CodePutCode<ApiType> => {
    return {
      signAndSend: this.decorateMethod(
        (account: IKeyringPair | string | AccountId | Address): CodePutCodeResultSubscription<ApiType> =>
          this._apiContracts
            .putCode(maxGas, compactAddLength(this.code))
            .signAndSend(account)
            .pipe(map(this._createResult))
      )
    };
  }

  private _createResult = (result: ISubmittableResult): CodePutCodeResult<ApiType> => {
    let blueprint: Blueprint<ApiType> | undefined;

    if (result.isInBlock) {
      const record = result.findRecord('contract', 'CodeStored');

      if (record) {
        blueprint = new Blueprint<ApiType>(this.api, this.abi, this.decorateMethod, record.event.data[0] as Hash);
      }
    }

    return new CodePutCodeResult(result, blueprint);
  }
}
