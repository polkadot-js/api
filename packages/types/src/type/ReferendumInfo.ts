// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../types';

import Struct from '../codec/Struct';
import BlockNumber from './BlockNumber';
import Proposal from './Proposal';
import VoteThreshold from './VoteThreshold';

interface ReferendumInfoValue {
  end?: BlockNumber;
  proposal?: Proposal;
  threshold?: VoteThreshold;
  delay?: BlockNumber;
}

/**
 * @name ReferendumInfo
 * @description
 * Info regarding an ongoing referendum
 */
export default class ReferendumInfo extends Struct {
  public constructor (value?: ReferendumInfoValue | Uint8Array | Map<string, Codec>) {
    super({
      end: BlockNumber,
      proposal: Proposal,
      threshold: VoteThreshold,
      delay: BlockNumber
    }, value);
  }

  /**
   * @description When voting on this referendum will end
   */
  public get end (): BlockNumber {
    return this.get('end') as BlockNumber;
  }

  /**
   * @description The proposal being voted on
   */
  public get proposal (): Proposal {
    return this.get('proposal') as Proposal;
  }

  /**
   * @description The thresholding mechanism to determine whether it passed
   */
  public get threshold (): VoteThreshold {
    return this.get('threshold') as VoteThreshold;
  }

  /**
   * @description The delay (in blocks) to wait after a successful referendum before deploying
   */
  public get delay (): BlockNumber {
    return this.get('delay') as BlockNumber;
  }
}
