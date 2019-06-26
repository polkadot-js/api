// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const definition = {
  ParaId: 'U32',
  ParaIdOf: 'ParaId',
  SubId: 'U32',
  NewBidder: {
    who: 'AccountId',
    sub: 'SubId'
  },
  Bidder: {
    _enum: {
      New: 'NewBidder',
      Existing: 'ParaId'
    }
  },
  IncomingParachainDeploy: {
    code: 'Bytes',
    initialHeadData: 'Bytes'
  },
  IncomingParachainFixed: {
    codeHash: 'Hash',
    initialHeadData: 'Bytes'
  },
  IncomingParachain: {
    _enum: {
      Unset: 'NewBidder',
      Fixed: 'IncomingParachainFixed',
      Deploy: 'IncomingParachainDeploy'
    }
  },
  WinningDataEntry: '(AccountId, ParaIdOf, BalanceOf)',
  WinningData: '[WinningDataEntry; 10]'
};

export default definition;
