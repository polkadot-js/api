// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { SubmittableSendResult } from '../types';
import { ApiPromiseInterface } from './types';

import { EventRecord, Extrinsic, ExtrinsicStatus, Hash, SignedBlock } from '@polkadot/types/index';

import filterEvents from '../util/filterEvents';

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiPromiseInterface;

  constructor (api: ApiPromiseInterface, extrinsic: Extrinsic) {
    super(extrinsic);

    this._api = api;
  }

  // FIXME split into graph derivation once available
  private checkStatus (statusCb: (result: SubmittableSendResult) => any): (status: ExtrinsicStatus) => Promise<void> {
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

  send (statusCb?: (result: SubmittableSendResult) => any): Promise<Hash> {
    if (!statusCb || !this._api.hasSubscriptions) {
      return this._api.rpc.author.submitExtrinsic(this);
    }

    return this._api.rpc.author.submitAndWatchExtrinsic(this, this.checkStatus(statusCb));
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }
}
