// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

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

  fromJSON (input: any): Header {
    this.value = {
      blockNumber: new BlockNumber().fromJSON(input.number),
      digest: new Digest().fromJSON(input.digest),
      extrinsicsRoot: new H256().fromJSON(input.extrinsicsRoot),
      parentHash: new H256().fromJSON(input.parentHash),
      stateRoot: new H256().fromJSON(input.stateRoot)
    };

    return this;
  }

  fromU8a (input: Uint8Array): Header {
    const parentHash = new H256().fromU8a(input);
    let offset = parentHash.byteLength();
    const blockNumber = new BlockNumber().fromU8a(input.subarray(offset));

    offset += blockNumber.byteLength();

    const stateRoot = new H256().fromU8a(input.subarray(offset));

    offset += stateRoot.byteLength();

    const extrinsicsRoot = new H256().fromU8a(input.subarray(offset));

    offset += extrinsicsRoot.byteLength();

    const digest = new Digest().fromU8a(input.subarray(offset));

    this.value = {
      blockNumber,
      digest,
      extrinsicsRoot,
      parentHash,
      stateRoot
    };

    return this;
  }

  toJSON (): any {
    return {
      digest: this.value.digest.toJSON(),
      extrinsicsRoot: this.value.extrinsicsRoot.toJSON(),
      number: this.value.blockNumber.toJSON(),
      parentHash: this.value.parentHash.toJSON(),
      stateRoot: this.value.stateRoot.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.value.parentHash.toU8a(),
      this.value.blockNumber.toU8a(),
      this.value.stateRoot.toU8a(),
      this.value.extrinsicsRoot.toU8a(),
      this.value.digest.toU8a()
    );
  }

  toString (): string {
    return JSON.stringify({
      digest: this.value.digest.toString(),
      extrinsicsRoot: this.value.extrinsicsRoot.toString(),
      number: this.value.blockNumber.toString(),
      parentHash: this.value.parentHash.toString(),
      stateRoot: this.value.stateRoot.toString()
    });
  }
}
