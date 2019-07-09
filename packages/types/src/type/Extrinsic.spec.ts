// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import Method from '../primitive/Method';
import Extrinsic from './Extrinsic';

describe('Extrinsic', () => {
  beforeAll(() => {
    Method.injectMethods(extrinsics);
  });

  it.skip('decodes a non-signed properly via JSON', () => {
    const extrinsic = new Extrinsic('0x010200ea51b75b00000000');

    expect(extrinsic.isSigned).toEqual(false);
    expect(extrinsic.callIndex).toEqual(new Uint8Array([2, 0]));
    expect(extrinsic.data).toEqual(new Uint8Array([234, 81, 183, 91, 0, 0, 0, 0]));
  });

  it('decodes an actual transaction (new format)', () => {
    const extrinsic = new Extrinsic('0x250281ffbfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e0c00' +
    '0400' + // balances.transfer
    'ff4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8e5c0');

    expect(extrinsic.isSigned).toEqual(true);
    expect(extrinsic.signature.signer.toU8a()).toEqual(new Uint8Array([255, 191, 200, 35, 170, 117, 195, 0, 88, 238, 236, 33, 171, 226, 194, 214, 183, 36, 116, 24, 164, 175, 137, 214, 122, 32, 132, 194, 172, 134, 77, 160, 128]));
    expect(extrinsic.signature.signature.toHex()).toEqual('0xc0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e');
    expect(extrinsic.signature.nonce.toNumber()).toEqual(3);
    expect(extrinsic.signature.era.toU8a()).toEqual(new Uint8Array([0]));
    expect(extrinsic.callIndex).toEqual(new Uint8Array([4, 0]));
    expect(`${extrinsic.method.sectionName}.${extrinsic.method.methodName}`).toEqual('balances.transfer');
    expect(extrinsic.args[0].toString()).toEqual('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo');
  });

  it('decodes an actual transaction (old format)', () => {
    const extrinsic = new Extrinsic(
      '0x81ffbfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e0c00' +
      '0400' + // balances.transfer
      'ff4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8e5c0'
    );

    expect(extrinsic.isSigned).toEqual(true);
    expect(extrinsic.signature.signer.toU8a()).toEqual(new Uint8Array([255, 191, 200, 35, 170, 117, 195, 0, 88, 238, 236, 33, 171, 226, 194, 214, 183, 36, 116, 24, 164, 175, 137, 214, 122, 32, 132, 194, 172, 134, 77, 160, 128]));
    expect(extrinsic.signature.signature.toHex()).toEqual('0xc0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e');
    expect(extrinsic.signature.nonce.toNumber()).toEqual(3);
    expect(extrinsic.signature.era.toU8a()).toEqual(new Uint8Array([0]));
    expect(extrinsic.callIndex).toEqual(new Uint8Array([4, 0]));
    expect(`${extrinsic.method.sectionName}.${extrinsic.method.methodName}`).toEqual('balances.transfer');
    expect(extrinsic.args[0].toString()).toEqual('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo');
  });
});
