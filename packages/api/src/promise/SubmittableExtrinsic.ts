// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiPromiseInterface } from './types';

import { Extrinsic, ExtrinsicStatus, Hash, SignedBlock } from '@polkadot/types/index';

type SendResult = {
  events?: Array<any>,
  status: ExtrinsicStatus,
  type: string
};

export default class SubmittableExtrinsic extends Extrinsic {
  private _api: ApiPromiseInterface;

  constructor (api: ApiPromiseInterface, extrinsic: Extrinsic) {
    super(extrinsic);

    this._api = api;
  }

  private checkStatus (statusCb: (result: SendResult) => any): (status: ExtrinsicStatus) => Promise<void> {
    return async (status: ExtrinsicStatus): Promise<void> => {
      let events: Array<any> | undefined = undefined;

      if (status.type === 'Finalised') {
        const blockHash: Hash = await this._api.rpc.chain.getFinalisedHead();
        const { block }: SignedBlock = await this._api.rpc.chain.getBlock(blockHash);

        console.error('block', block);

        const extHash = (status.value as Hash).toHex();
        const blockExts = block.extrinsics.map((ext) => ext.hash.toHex());

        console.error('extrinsics', extHash, this.hash.toHex(), blockExts, blockExts.indexOf(extHash));
      }

      statusCb({
        events,
        status,
        type: status.type
      });
    };
  }

  send (statusCb?: (result: SendResult) => any): Promise<Hash> {
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
