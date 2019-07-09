// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiRx } from '@polkadot/api';
import { ISubmittableResult, SubmittableResult } from '@polkadot/api/SubmittableExtrinsic';
import { AccountId, Address, Hash } from '@polkadot/types';
import { IKeyringPair } from '@polkadot/types/types';
import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Abi from './Abi';
import RxBase from './RxBase';
import RxContract from './RxContract';
import { ContractABI } from './types';

type IBlueprintCreateResultSubscription = Observable<BlueprintCreateResult>;

export interface IBlueprintCreate {
  signAndSend (account: IKeyringPair | string | AccountId | Address): IBlueprintCreateResultSubscription;
}

class BlueprintCreateResult extends SubmittableResult {
  readonly contract?: RxContract;

  constructor (result: ISubmittableResult, contract?: RxContract) {
    super(result);

    this.contract = contract;
  }
}

// NOTE Experimental, POC, bound to change
export default class Blueprint extends RxBase {
  readonly codeHash: Hash;

  constructor (api: ApiRx, abi: ContractABI | Abi, codeHash: string | Hash) {
    super(api, abi);

    this.codeHash = new Hash(codeHash);
  }

  public deployContract (endowment: number | BN, maxGas: number | BN, ...params: Array<any>): IBlueprintCreate {
    const signAndSend = (account: IKeyringPair | string | AccountId | Address): IBlueprintCreateResultSubscription => {
      return this.apiContracts
        .create(endowment, maxGas, this.codeHash, this.abi.deploy(...params))
        .signAndSend(account)
        .pipe(
          map((result: SubmittableResult) => {
            let contract: RxContract | undefined;

            if (result.isFinalized) {
              const record = result.findRecord('contract', 'Instantiated');

              if (record) {
                contract = new RxContract(this.api, this.abi, record.event.data[1] as Address);
              }
            }

            return new BlueprintCreateResult(result, contract);
          })
        );
    };

    return { signAndSend };
  }
}
