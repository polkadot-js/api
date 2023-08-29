// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsCallEntry } from '../../types/index.js';

const PH_V1_TO_V2: DefinitionsCallEntry['methods'] = {
  assumed_validation_data: {
    description: 'Returns the persisted validation data for the given `ParaId` along with the corresponding validation code hash.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      },
      {
        name: 'hash',
        type: 'Hash'
      }
    ],
    type: 'Option<(PersistedValidationData, ValidationCodeHash)>'
  },
  availability_cores: {
    description: 'Yields information on all availability cores as relevant to the child block.',
    params: [],
    type: 'Vec<CoreState>'
  },
  candidate_events: {
    description: 'Get a vector of events concerning candidates that occurred within a block.',
    params: [],
    type: 'Vec<CandidateEvent>'
  },
  candidate_pending_availability: {
    description: 'Get the receipt of a candidate pending availability.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      }
    ],
    type: 'Option<CommittedCandidateReceipt>'
  },
  check_validation_outputs: {
    description: 'Checks if the given validation outputs pass the acceptance criteria.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      },
      {
        name: 'outputs',
        type: 'CandidateCommitments'
      }
    ],
    type: 'bool'
  },
  dmq_contents: {
    description: 'Get all the pending inbound messages in the downward message queue for a para.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      }
    ],
    type: 'Vec<InboundDownwardMessage>'
  },
  inbound_hrmp_channels_contents: {
    description: 'Get the contents of all channels addressed to the given recipient.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      }
    ],
    type: 'Vec<InboundHrmpMessage>'
  },
  on_chain_votes: {
    description: 'Scrape dispute relevant from on-chain, backing votes and resolved disputes.',
    params: [],
    type: 'Option<ScrapedOnChainVotes>'
  },
  persisted_validation_data: {
    description: 'Yields the persisted validation data for the given `ParaId` along with an assumption that should be used if the para currently occupies a core.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      },
      {
        name: 'assumption',
        type: 'OccupiedCoreAssumption'
      }
    ],
    type: 'Option<PersistedValidationData>'
  },
  session_index_for_child: {
    description: 'Returns the session index expected at a child of the block.',
    params: [],
    type: 'SessionIndex'
  },
  validation_code: {
    description: 'Fetch the validation code used by a para, making the given `OccupiedCoreAssumption`.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      },
      {
        name: 'assumption',
        type: 'OccupiedCoreAssumption'
      }
    ],
    type: 'ValidationCode'
  },
  validation_code_by_hash: {
    description: 'Get the validation code from its hash.',
    params: [
      {
        name: 'hash',
        type: 'ValidationCodeHash'
      }
    ],
    type: 'Option<ValidationCode>'
  },
  validator_groups: {
    description: 'Returns the validator groups and rotation info localized based on the hypothetical child of a block whose state  this is invoked on',
    params: [],
    type: '(Vec<Vec<ParaValidatorIndex>>, GroupRotationInfo)'
  },
  validators: {
    description: 'Get the current validators.',
    params: [],
    type: 'Vec<ValidatorId>'
  }
};

const PH_V2_TO_V3: DefinitionsCallEntry['methods'] = {
  pvfs_require_precheck: {
    description: 'Returns code hashes of PVFs that require pre-checking by validators in the active set.',
    params: [],
    type: 'Vec<ValidationCodeHash>'
  },
  session_info: {
    description: 'Get the session info for the given session, if stored.',
    params: [
      {
        name: 'index',
        type: 'SessionIndex'
      }
    ],
    type: 'Option<SessionInfo>'
  },
  submit_pvf_check_statement: {
    description: 'Submits a PVF pre-checking statement into the transaction pool.',
    params: [
      {
        name: 'stmt',
        type: 'PvfCheckStatement'
      },
      {
        name: 'signature',
        type: 'ValidatorSignature'
      }
    ],
    type: 'Null'
  },
  validation_code_hash: {
    description: 'Fetch the hash of the validation code used by a para, making the given `OccupiedCoreAssumption`.',
    params: [
      {
        name: 'paraId',
        type: 'ParaId'
      },
      {
        name: 'assumption',
        type: 'OccupiedCoreAssumption'
      }
    ],
    type: 'Option<ValidationCodeHash>'
  }
};

const PH_V3: DefinitionsCallEntry['methods'] = {
  disputes: {
    description: 'Returns all onchain disputes.',
    params: [],
    type: 'Vec<(SessionIndex, CandidateHash, DisputeState)>'
  }
};

const PH_V4: DefinitionsCallEntry['methods'] = {
  session_executor_params: {
    description: 'Returns execution parameters for the session.',
    params: [
      {
        name: 'sessionIndex',
        type: 'SessionIndex'
      }
    ],
    type: 'Option<ExecutorParams>'
  }
};

const PH_V5: DefinitionsCallEntry['methods'] = {
  key_ownership_proof: {
    description: 'Returns a merkle proof of a validator session key',
    params: [
      {
        name: 'validatorId',
        type: 'ValidatorId'
      }
    ],
    type: 'Option<OpaqueKeyOwnershipProof'
  },
  submit_report_dispute_lost: {
    description: 'Submit an unsigned extrinsic to slash validators who lost a dispute about a candidate of a past session',
    params: [
      {
        name: 'disputeProof',
        type: 'DisputeProof'
      },
      {
        name: 'keyOwnershipProof',
        type: 'OpaqueKeyOwnershipProof'
      }
    ],
    type: 'Option<Null>'
  },
  unapplied_slashes: {
    description: 'Returns a list of validators that lost a past session dispute and need to be slashed',
    params: [],
    type: 'Vec<(SessionIndex, CandidateHash, PendingSlashes)'
  }
};

export const runtime: DefinitionsCall = {
  ParachainHost: [
    {
      methods: {
        ...PH_V1_TO_V2,
        ...PH_V2_TO_V3,
        ...PH_V3,
        ...PH_V4,
        ...PH_V5
      },
      version: 5
    },
    {
      methods: {
        ...PH_V1_TO_V2,
        ...PH_V2_TO_V3,
        ...PH_V3,
        ...PH_V4
      },
      version: 4
    },
    {
      methods: {
        ...PH_V1_TO_V2,
        ...PH_V2_TO_V3,
        ...PH_V3
      },
      version: 3
    },
    {
      methods: {
        ...PH_V1_TO_V2,
        ...PH_V2_TO_V3
      },
      version: 2
    },
    {
      methods: {
        session_info: {
          description: 'Get the session info for the given session, if stored.',
          params: [
            {
              name: 'index',
              type: 'SessionIndex'
            }
          ],
          type: 'Option<OldV1SessionInfo>'
        },
        ...PH_V1_TO_V2
      },
      version: 1
    }
  ]
};
