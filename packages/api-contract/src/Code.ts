// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ISubmittableResult } from '@polkadot/api/SubmittableExtrinsic';
import { IKeyringPair } from '@polkadot/types/types';
import { ContractABI } from './types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRx } from '@polkadot/api';
import { AccountId, Address, EventRecord, ExtrinsicStatus, Hash } from '@polkadot/types';
import { compactAddLength, u8aToU8a } from '@polkadot/util';

import Abi from './Abi';
import Base from './Base';
import Blueprint from './Blueprint';

// Ok, tried, failed, eventutall ... well, we are only trying with RxJs as a
// start, so take a big fat shortcut with this version, real commented after
type IContractDeployResultSubscription<ApiType> = Observable<IContractDeployResult>;
// type IContractDeployResultSubscription<ApiType> =
//   ApiType extends 'rxjs'
//     ? Observable<IContractDeployResult>
//     : Promise<() => void>;

export interface IContractDeployResult extends ISubmittableResult {
  readonly blueprint?: Blueprint;
}

// unlike the ISubmittableExtrinsic, it doesn't extend IExtrinsic and only
// implements one var iant of signAndSend - this is purely done to see what
// is hanging where, with the bare-mainimum from a simplicity perspective
// Very obvious is that it supports only 1 version of signAndSend
// (we need to revisit this, but probably ok for initial?)
export interface IContractDeployer<ApiType> {
  signAndSend (account: IKeyringPair | string | AccountId | Address): IContractDeployResultSubscription<ApiType>;
}

// This most probably should be a Coded-like result as per SubmittableResult
// however, once again, doing the stuff below is slightly more clear than
// re-implementing SubmittableResult just to add the new additional field
class ContractDeployResult implements IContractDeployResult {
  readonly blueprint?: Blueprint;
  readonly events: Array<EventRecord>;
  readonly status: ExtrinsicStatus;

  constructor ({ events, status }: ISubmittableResult, blueprint?: Blueprint) {
    this.blueprint = blueprint;
    this.events = events;
    this.status = status;
  }

  findRecord (section: string, method: string): EventRecord | undefined {
    return this.events.find(({ event }) =>
      event.section === section && event.method === method
    );
  }
}

// NOTE Experimental, POC, bound to change
export default class Contract<ApiType = 'rxjs'> extends Base {
  readonly code: Uint8Array;

  constructor (api: ApiRx, abi: ContractABI | Abi, wasm: string | Uint8Array) {
    super(api, abi);

    this.code = u8aToU8a(wasm);
  }

  public putCode (maxGas: number | string | BN): IContractDeployer<ApiType> {
    const signAndSend = (account: IKeyringPair | string | AccountId | Address): IContractDeployResultSubscription<ApiType> => {
      return this.api.tx.contract
        .putCode(maxGas, compactAddLength(this.code))
        .signAndSend(account)
        .pipe(
          map((result: ISubmittableResult) => {
            let blueprint: Blueprint | undefined;

            if (result.status.isFinalized) {
              const record = result.findRecord('contract', 'CodeStored');

              if (record) {
                blueprint = new Blueprint(this.api, this.abi, record.event.data[0] as Hash);
              }
            }

            return new ContractDeployResult(result, blueprint);
          })
        );
    };

    return { signAndSend };
  }
}
