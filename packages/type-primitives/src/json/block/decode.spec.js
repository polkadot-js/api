// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import decode from './decode';

const blockPoc1 = {
  block: {
    extrinsics: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 36, 241, 242, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    header: {
      digest: {
        logs: []
      },
      extrinsicsRoot: '0xcfc906dc1496e190742daefd8ec378a0a901c134d176178f6bbbaeea407b3649',
      number: 1,
      parentHash: '0x6c5a31dc701c2a01a3f985da4da5faae19dc205ea212a5b1e4271e3e358271cc',
      stateRoot: '0x71abf5a507b6cf7a94d5cbfd8b4a1a809167a0044994acb420f891ff18f296d8'
    }
  },
  justification: {
    hash: '0xa04cab547ca4ef9ff13c1c489a8620994968035a7f07ef9d507226530c8dd81d',
    round_number: 1,
    signatures: [
      ['0x82c39b31a2b79a90f8e66e7a77fdb85a4ed5517f2ae39f6a80565e8ecae85cf5', '0xa681bd611800ede4637f2500315a850ffa8b9202640f0bed06125eb5fb10216c7f8bc4a4a0057a53807242144f2411c26bf84df91e7d62373a8cb7453973010e'],
      ['0x063d7787ebca768b7445dfebe7d62cbb1625ff4dba288ea34488da266dd6dca5', '0x5710dfbbbb17e1661d7cc0bcf879e8da9ba9255fae15603b35b8079a30f20547f882eaab8ff959ed85cb410718fda102c010420281b5cbef64e5d4e3147c3b0f'],
      ['0x4de37a07567ebcbf8c64568428a835269a566723687058e017b6d69db00a77e7', '0x95a6fd0eca0f36c560d27fc437433a1bfe3787c98f59515922394c8c51c500f13976cac28c79af22488cb0f9b123d933e4eb0eaf563d3b9672f6ae281e581708']
    ]
  }
};

describe.skip('blockDecode', () => {
  it('decodes poc-1 blocks properly', () => {
    expect(
      decode(blockPoc1).extrinsics[0].extrinsic
    ).toMatchObject({
      name: 'set',
      section: 'timestamp'
    });
  });
});
