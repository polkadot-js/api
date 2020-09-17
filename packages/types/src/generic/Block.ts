// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Digest, DigestItem, H256, Header } from '../interfaces/runtime';
import { AnyNumber, AnyU8a, Registry } from '../types';

import Extrinsic from '../extrinsic/Extrinsic';
import Struct from '../codec/Struct';
import Vec from '../codec/Vec';

export interface HeaderValue {
  digest?: Digest | { logs: DigestItem[] };
  extrinsicsRoot?: AnyU8a;
  number?: AnyNumber;
  parentHash?: AnyU8a;
  stateRoot?: AnyU8a;
}

export interface BlockValue {
  extrinsics?: AnyU8a[];
  header?: HeaderValue;
}

/**
 * @name Block
 * @description
 * A block encoded with header and extrinsics
 */
export default class Block extends Struct {
  constructor (registry: Registry, value?: BlockValue | Uint8Array) {
    super(registry, {
      header: 'Header',
      // eslint-disable-next-line sort-keys
      extrinsics: 'Vec<Extrinsic>'
    }, value);
  }

  /**
   * @description Encodes a content [[Hash]] for the block
   */
  public get contentHash (): H256 {
    return this.registry.createType('H256', this.registry.hash(this.toU8a()));
  }

  /**
   * @description The [[Extrinsic]] contained in the block
   */
  public get extrinsics (): Vec<Extrinsic> {
    return this.get('extrinsics') as Vec<Extrinsic>;
  }

  /**
   * @description Block/header [[Hash]]
   */
  public get hash (): H256 {
    return this.header.hash;
  }

  /**
   * @description The [[Header]] of the block
   */
  public get header (): Header {
    return this.get('header') as Header;
  }
}
