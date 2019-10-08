// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubmittableResultImpl } from '@polkadot/api/types';
import { AccountId, Address, Hash } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
import { ContractABIPre } from './types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRx, SubmittableResult } from '@polkadot/api';
import { createType } from '@polkadot/types';
import { assert } from '@polkadot/util';

import Abi from './Abi';
import RxBase from './RxBase';
import RxContract from './RxContract';

type BlueprintCreateResultSubscription = Observable<BlueprintCreateResult>;

export interface BlueprintCreate {
  signAndSend (account: IKeyringPair | string | AccountId | Address): BlueprintCreateResultSubscription;
}

class BlueprintCreateResult extends SubmittableResult {
  public readonly contract?: RxContract;

  public constructor (result: SubmittableResultImpl, contract?: RxContract) {
    super(result);

    this.contract = contract;
  }
}

// NOTE Experimental, POC, bound to change
export default class Blueprint extends RxBase {
  public readonly codeHash: Hash;

  public constructor (api: ApiRx, abi: ContractABIPre | Abi, codeHash: string | Hash) {
    super(api, abi);

    this.codeHash = createType('Hash', codeHash);
  }

  public deployContract (constructorIndex = 0, endowment: number | BN, maxGas: number | BN, ...params: any[]): BlueprintCreate {
    assert(!!this.abi.constructors[constructorIndex], `Specified constructor index ${constructorIndex} does not exist`);
    const signAndSend = (account: IKeyringPair | string | AccountId | Address): BlueprintCreateResultSubscription => {
      return this.apiContracts
        .create(endowment, maxGas, this.codeHash, this.abi.constructors[constructorIndex](...params))
        .signAndSend(account)
        .pipe(map(this.createResult));
    };

    return { signAndSend };
  }

  private createResult = (result: SubmittableResult): BlueprintCreateResult => {
    let contract: RxContract | undefined;

    if (result.isFinalized) {
      const record = result.findRecord('contract', 'Instantiated');

      if (record) {
        contract = new RxContract(this.api, this.abi, record.event.data[1] as Address);
      }
    }

    return new BlueprintCreateResult(result, contract);
  }
}
