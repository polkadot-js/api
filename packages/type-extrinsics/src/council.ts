// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CreateItems, CreateItemOptions, Section } from '@polkadot/params/types';
import { Extrinsics, Extrinsic$Sections } from './types';

import param from '@polkadot/params/param';
import createSection from '@polkadot/params/section';

const setApprovals: CreateItemOptions = {
  description: 'Set approvals',
  params: [
    param('votes', ['bool']),
    param('index', 'u32')
  ],
  type: []
};

const reapInactiveVoter: CreateItemOptions = {
  description: 'Remove insactive voter',
  params: [
    param('signedIndex', 'u32'),
    param('who', 'AccountId'),
    param('whoIndex', 'u32'),
    param('assumedVoteIndex', 'u32')
  ],
  type: []
};

const retractVoter: CreateItemOptions = {
  description: 'Retract voter',
  params: [
    param('index', 'u32')
  ],
  type: []
};

const submitCandidacy: CreateItemOptions = {
  description: 'Submit candidacy',
  params: [
    param('slot', 'u32')
  ],
  type: []
};

const presentWinner: CreateItemOptions = {
  description: 'Present winner',
  params: [
    param('candidate', 'AccountId'),
    param('total', 'Balance'),
    param('index', 'u32')
  ],
  type: []
};

const setDesiredSeats: CreateItemOptions = {
  description: 'Set desired seats',
  params: [
    param('count', 'u32')
  ],
  type: []
};

const removeMember: CreateItemOptions = {
  description: 'Remove member',
  params: [
    param('member', 'AccountId')
  ],
  type: []
};

const setPresentationDuration: CreateItemOptions = {
  description: 'Set presentation duration',
  params: [
    param('duration', 'u64')
  ],
  type: []
};

const setTermDuration: CreateItemOptions = {
  description: 'Set term duration',
  params: [
    param('duration', 'u64')
  ],
  type: []
};

export default (name: Extrinsic$Sections, index: number): Section<Extrinsics> =>
  createSection(name, index)((createMethod: CreateItems<Extrinsics>) => ({
    description: 'Council',
    public: {
      setApprovals:
        createMethod('setApprovals', 0)(setApprovals),
      reapInactiveVoter:
        createMethod('reapInactiveVoter', 1)(reapInactiveVoter),
      retractVoter:
        createMethod('retractVoter', 2)(retractVoter),
      submitCandidacy:
        createMethod('submitCandidacy', 3)(submitCandidacy),
      presentWinner:
        createMethod('presentWinner', 4)(presentWinner)
    },
    private: {
      setDesiredSeats:
        createMethod('setDesiredSeats', 0)(setDesiredSeats),
      removeMember:
        createMethod('removeMember', 1)(removeMember),
      setPresentationDuration:
        createMethod('setPresentationDuration', 2)(setPresentationDuration),
      setTermDuration:
        createMethod('setTermDuration', 3)(setTermDuration)
    }
  }));
