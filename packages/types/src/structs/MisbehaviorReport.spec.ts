// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MisbehaviorReport, { BftAtReport } from './MisbehaviorReport';

describe('BftAtReport', () => {
  const report = new BftAtReport({
    round: 16,
    a: ['0x1234', '0x5678'],
    b: ['0x8765', '0x4321']
  });

  it('has the correct round', () => {
    expect(report.round.toNumber()).toEqual(16);
  });

  it('has the correct hash (a)', () => {
    expect(report.a.hash.toHex()).toEqual('0x1234000000000000000000000000000000000000000000000000000000000000');
  });

  it('has the correct signature (b)', () => {
    expect(report.b.signature.toHex()).toEqual('0x43210000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });
});

describe('MisbehaviorReport', () => {
  const report = new MisbehaviorReport({
    parentHash: '0x01020304',
    parentNumber: 78,
    target: '0x11112222',
    misbehavior: 3
  });

  it('has the correct misbehavior type', () => {
    expect(report.misbehavior.type).toEqual('BftDoubleCommit');
  });

  it('has the correct parent block', () => {
    expect(report.parentHash.toHex()).toEqual('0x0102030400000000000000000000000000000000000000000000000000000000');
    expect(report.parentNumber.toNumber()).toEqual(78);
  });

  it('identifies the misbehaving authority', () => {
    expect(report.target.toHex()).toEqual('0x1111222200000000000000000000000000000000000000000000000000000000');
  });
});
