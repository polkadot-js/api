// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Digest, DigestItem, Hash, Header } from '../../interfaces/runtime';
import { AnyNumber, AnyU8a, Registry } from '../../types';

import { blake2AsU8a } from '@polkadot/util-crypto';

import { createType } from '../../codec/create';
import Extrinsic from '../Extrinsic/Extrinsic';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';

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
      extrinsics: 'Vec<Extrinsic>'
    }, value);
  }

  /**
   * @description Encodes a content [[Hash]] for the block
   */
  public get contentHash (): Hash {
    return createType(this.registry, 'Hash', blake2AsU8a(this.toU8a(), 256));
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
  public get hash (): Hash {
    return this.header.hash;
  }

  /**
   * @description The [[Header]] of the block
   */
  public get header (): Header {
    return this.get('header') as Header;
  }
}
