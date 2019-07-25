// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash, Justification } from '../srml/runtime/types';
import { AnyU8a } from '../types';

import { ClassOf } from '../codec/createType';
import Struct from '../codec/Struct';
import Block, { BlockValue } from './Block';

interface SignedBlockValue {
  block?: BlockValue;
  justification?: AnyU8a;
}

/**
 * @name SignedBlock
 * @description
 * A [[Block]] that has been signed and contains a [[Justification]]
 */
export default class SignedBlock extends Struct {
  public constructor (value?: SignedBlockValue | Uint8Array) {
    super({
      block: Block,
      justification: ClassOf('Justification')
    }, value);
  }

  /**
   * @description The wrapped [[Block]]
   */
  public get block (): Block {
    return this.get('block') as Block;
  }

  /**
   * @description Block/header [[Hash]]
   */
  public get hash (): Hash {
    return this.block.hash;
  }

  /**
   * @description The wrapped [[Justification]]
   */
  public get justification (): Justification {
    return this.get('justification') as Justification;
  }
}
