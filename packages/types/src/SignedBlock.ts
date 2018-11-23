// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from './codec/Struct';
import { Justification, JustificationValue } from './Bft';
import Block, { BlockValue } from './Block';

type SignedBlockValue = {
  block?: BlockValue,
  justification?: JustificationValue
};

export default class SignedBlock extends Struct {
  constructor (value?: SignedBlockValue | Uint8Array) {
    super({
      block: Block,
      justification: Justification
    }, value);
  }

  get block (): Block {
    return this.get('block') as Block;
  }

  get justification (): Justification {
    return this.get('justification') as Justification;
  }
}
