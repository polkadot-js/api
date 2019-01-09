// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { SubmittableSendResult } from '../types';
import { ApiPromiseInterface, UnsubFunction } from './types';

import { EventRecord, Extrinsic, ExtrinsicStatus, Hash, Index, Method, SignedBlock } from '@polkadot/types/index';

import filterEvents from '../util/filterEvents';
import { assert } from '@polkadot/util';

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiPromiseInterface;

  constructor (api: ApiPromiseInterface, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._api = api;
  }

  private trackStatus (statusCb: (result: SubmittableSendResult) => any): (status: ExtrinsicStatus) => Promise<void> {
    return async (status: ExtrinsicStatus): Promise<void> => {
      let events: Array<any> | undefined = undefined;

      if (status.type === 'Finalised') {
        const blockHash = status.value as Hash;
        const signedBlock: SignedBlock = await this._api.rpc.chain.getBlock(blockHash);
        const allEvents: Array<EventRecord> = await this._api.query.system.events.at(blockHash) as any;

        events = filterEvents(this.hash, signedBlock, allEvents);
      }

      statusCb({
        events,
        status,
        type: status.type
      });
    };
  }

  send (statusCb?: (result: SubmittableSendResult) => any): Promise<Hash> | UnsubFunction {
    if (!statusCb || !this._api.hasSubscriptions) {
      return this._api.rpc.author.submitExtrinsic(this);
    }

    return this._api.rpc.author.submitAndWatchExtrinsic(this, this.trackStatus(statusCb));
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }

  signAndSend (signerPair: KeyringPair, statusCb: (result: SubmittableSendResult) => any): Promise<Hash> | UnsubFunction {
    assert(this._api.hasSubscriptions, 'Api does not support subscriptions');

    let unsubscribe: UnsubFunction | undefined;

    this._api.query.system
      .accountNonce(signerPair.address())
      .then((nonce) => {
        unsubscribe = this.sign(signerPair, nonce as Index).send(statusCb) as UnsubFunction;
      })
      .catch(console.error);

    return (): void => {
      if (unsubscribe) {
        unsubscribe();
      }

      unsubscribe = undefined;
    };
  }
}
