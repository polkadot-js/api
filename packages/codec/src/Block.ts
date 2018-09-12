// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import BaseArray from './base/Array';
import Extrinsic from './Extrinsic';
import Header from './Header';

type BlockValue = {
  extrinsics: Extrinsics,
  header: Header
};

export class Extrinsics extends BaseArray<Extrinsic> {
  constructor (value: Array<Extrinsic> = [] as Array<Extrinsic>) {
    super(Extrinsic, value);
  }
}

export default class Block implements Base<BlockValue> {
  value: BlockValue;

  constructor ({ extrinsics = new Extrinsics(), header = new Header() }: BlockValue = {} as BlockValue) {
    this.value = {
      extrinsics,
      header
    };
  }

  byteLength (): number {
    return this.value.extrinsics.byteLength() +
      this.value.header.byteLength();
  }

  fromJSON (input: any): Block {
    this.value = {
      extrinsics: new Extrinsics().fromJSON(input.extrinsics),
      header: new Header().fromJSON(input.header)
    };

    return this;
  }

  fromU8a (input: Uint8Array): Block {
    const header = new Header().fromU8a(input);
    const extrinsics = new Extrinsics().fromU8a(input.subarray(header.byteLength()));

    this.value = {
      extrinsics,
      header
    };

    return this;
  }

  toJSON (): any {
    return {
      extrinsics: this.value.extrinsics.toJSON(),
      header: this.value.header.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.value.header.toU8a(),
      this.value.extrinsics.toU8a()
    );
  }

  toString (): string {
    return JSON.stringify({
      extrinsics: this.value.extrinsics.toString(),
      header: this.value.header.toString()
    });
  }
}
