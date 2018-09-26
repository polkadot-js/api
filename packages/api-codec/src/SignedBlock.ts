// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Struct from './codec/Struct';
import { Justification, JustificationStruct } from './Bft';
import Block, { BlockStruct } from './Block';

type SignedBlockStruct = {
  block?: BlockStruct,
  justification?: JustificationStruct
};

export default class SignedBlock extends Struct {
  constructor (value: SignedBlockStruct = {}) {
    super({
      block: Block,
      justification: Justification
    }, value);
  }

  get block (): Block {
    return this.raw.block as Block;
  }

  get justification (): Justification {
    return this.raw.justification as Justification;
  }
}
