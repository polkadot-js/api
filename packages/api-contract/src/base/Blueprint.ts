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
import { assert } from '@polkadot/util';

import Abi from '../Abi';
import Contract from './Contract';
import { BaseWithTx } from './util';

type BlueprintCreateResultSubscription<ApiType extends ApiTypes> = Observable<BlueprintCreateResult<ApiType>>;

export interface BlueprintCreate<ApiType extends ApiTypes> {
  signAndSend (account: IKeyringPair | string | AccountId | Address): BlueprintCreateResultSubscription<ApiType>;
}

class BlueprintCreateResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>) {
    super(result);

    this.contract = contract;
  }
}

// NOTE Experimental, POC, bound to change
export default class Blueprint<ApiType extends ApiTypes> extends BaseWithTx<ApiType> {
  public readonly codeHash: Hash;

  constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>, codeHash: string | Hash) {
    super(api, abi, decorateMethod);

    this.codeHash = this.registry.createType('Hash', codeHash);
  }

  public deployContract (constructorIndex = 0, endowment: number | BN, maxGas: number | BN, ...params: any[]): BlueprintCreate<ApiType> {
    assert(!!this.abi.constructors[constructorIndex], `Specified constructor index ${constructorIndex} does not exist`);

    return {
      signAndSend: this.decorateMethod(
        (account: IKeyringPair | string | AccountId | Address): BlueprintCreateResultSubscription<ApiType> => {
          return this._apiContracts
            .create(endowment, maxGas, this.codeHash, this.abi.constructors[constructorIndex](...params))
            .signAndSend(account)
            .pipe(map(this._createResult));
        }
      )
    };
  }

  private _createResult = (result: SubmittableResult): BlueprintCreateResult<ApiType> => {
    let contract: Contract<ApiType> | undefined;

    if (result.isInBlock) {
      const record = result.findRecord('contract', 'Instantiated');

      if (record) {
        contract = new Contract<ApiType>(this.api, this.abi, this.decorateMethod, record.event.data[1] as Address);
      }
    }

    return new BlueprintCreateResult(result, contract);
  }
}
