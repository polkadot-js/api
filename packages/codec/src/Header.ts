// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import BlockNumber from './BlockNumber';
import Digest from './Digest';
import H256 from './H256';

export type HeaderValue = {
  blockNumber: BlockNumber,
  digest: Digest,
  extrinsicsRoot: H256,
  parentHash: H256,
  stateRoot: H256
};

// digest: {
//   logs
// },
// extrinsicsRoot: u8a
//   ? u8a.subarray(OFF_TX_ROOT, OFF_TX_ROOT + 32)
//   : new Uint8Array(),
// number,
// parentHash: u8a
//   ? u8a.subarray(OFF_PARENT_HASH, OFF_PARENT_HASH + 32)
//   : new Uint8Array(),
// stateRoot: u8a
//   ? u8a.subarray(OFF_STATE_ROOT, OFF_STATE_ROOT + 32)
//   : new Uint8Array()

const DEFAULT_VALUE = {} as HeaderValue;

export default class Header implements Base<HeaderValue> {
  value: HeaderValue;

  constructor ({ blockNumber = new BlockNumber(), digest = new Digest(), extrinsicsRoot = new H256(), parentHash = new H256(), stateRoot = new H256() }: HeaderValue = DEFAULT_VALUE) {
    this.value = {
      blockNumber,
      digest,
      extrinsicsRoot,
      parentHash,
      stateRoot
    };
  }

  byteLength (): number {
    return this.value.blockNumber.byteLength() +
      this.value.digest.byteLength() +
      this.value.extrinsicsRoot.byteLength() +
      this.value.parentHash.byteLength() +
      this.value.stateRoot.byteLength();
  }

  fromJSON (input: any): Digest {
    this.value = {
      logs: new DigestLogs().fromJSON(input)
    };

    return this;
  }

  fromU8a (input: Uint8Array): Digest {
    this.value = {
      logs: new DigestLogs().fromU8a(input)
    };

    return this;
  }

  toJSON (): any {
    return {
      logs: this.value.logs.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return this.value.logs.toU8a();
  }

  toString (): string {
    return JSON.stringify({
      logs: this.value.logs.toString()
    });
  }
}
