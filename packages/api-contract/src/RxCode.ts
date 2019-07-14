// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ISubmittableResult, SubmittableResult } from '@polkadot/api/SubmittableExtrinsic';
import { IKeyringPair } from '@polkadot/types/types';
import { ContractABI } from './types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRx } from '@polkadot/api';
import { AccountId, Address, Hash } from '@polkadot/types';
import { compactAddLength, u8aToU8a } from '@polkadot/util';

import Abi from './Abi';
import RxBase from './RxBase';
import RxBlueprint from './RxBlueprint';

// Ok, tried, failed, eventually ... well, we are only trying with RxJs as a
// start, so take a big fat shortcut with this version, real intended version
// follows this and is commented out
type CodePutCodeResultSubscription = Observable<CodePutCodeResult>;
// type ICodePutCodeResultSubscription<ApiType> =
//   ApiType extends 'rxjs'
//     ? Observable<CodePutCodeResult>
//     : Promise<() => void>;

// unlike the ISubmittableExtrinsic, it doesn't extend IExtrinsic and only
// implements one var iant of signAndSend - this is purely done to see what
// is hanging where, with the bare-mainimum from a simplicity perspective
// Very obvious is that it supports only 1 version of signAndSend
// (we need to revisit this, but probably ok for initial?)
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface CodePutCode {
  signAndSend (account: IKeyringPair | string | AccountId | Address): CodePutCodeResultSubscription;
}

class CodePutCodeResult extends SubmittableResult {
  public readonly blueprint?: RxBlueprint;

  public constructor (result: ISubmittableResult, blueprint?: RxBlueprint) {
    super(result);

    this.blueprint = blueprint;
  }
}

// NOTE Experimental, POC, bound to change
export default class RxCode extends RxBase {
  public readonly code: Uint8Array;

  public constructor (api: ApiRx, abi: ContractABI | Abi, wasm: string | Uint8Array) {
    super(api, abi);

    this.code = u8aToU8a(wasm);
  }

  public createBlueprint (maxGas: number | BN): CodePutCode {
    const signAndSend = (account: IKeyringPair | string | AccountId | Address): CodePutCodeResultSubscription => {
      return this.apiContracts
        .putCode(maxGas, compactAddLength(this.code))
        .signAndSend(account)
        .pipe(
          map((result: ISubmittableResult): CodePutCodeResult => {
            let blueprint: RxBlueprint | undefined;

            if (result.isFinalized) {
              const record = result.findRecord('contract', 'CodeStored');

              if (record) {
                blueprint = new RxBlueprint(this.api, this.abi, record.event.data[0] as Hash);
              }
            }

            return new CodePutCodeResult(result, blueprint);
          })
        );
    };

    return { signAndSend };
  }
}
