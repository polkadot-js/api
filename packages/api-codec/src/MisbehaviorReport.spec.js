// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import MisbehaviorReport, { BftAtReport } from './MisbehaviorReport';

describe('BftAtReport', () => {
  const report = new BftAtReport({
    round: 16,
    a: {
      hash: '0x1234',
      signature: '0x5678'
    },
    b: {
      hash: '0x8765',
      signature: '0x4321'
    }
  });

  it('has the correct round', () => {
    expect(report.round.toNumber()).toEqual(16);
  });

  it('has the correct hash (a)', () => {
    expect(report.a.hash.toHex()).toEqual('0x1234');
  });

  it('has the correct signature (b)', () => {
    expect(report.b.signature.toHex()).toEqual('0x4321');
  });
});

describe('MisbehaviorReport', () => {
  const report = new MisbehaviorReport({
    parentHash: '0x01020304',
    parentNumber: 78,
    target: '0x11112222',
    misbehavior: 0x12
  });

  it('has the correct misbehavior type', () => {
    expect(report.misbehavior.Type).toEqual('BftDoubleCommit');
  });

  it('has the correct parent block', () => {
    expect(report.parentHash.toHex()).toEqual('0x01020304');
    expect(report.parentNumber.toNumber()).toEqual(78);
  });

  it('identifies the misbehaving authority', () => {
    expect(report.target.toHex()).toEqual('0x11112222');
  });
});
