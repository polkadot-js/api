// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import { hexToU8a } from '@polkadot/util';

import Method from '../Method';
import Extrinsic from './Extrinsic';

describe('Extrinsic', (): void => {
  beforeAll((): void => {
    Method.injectMethods(extrinsics);
  });

  describe('V1', (): void => {
    it('decodes an actual transaction (length prefix)', (): void => {
      const extrinsic = new Extrinsic(
        '0x' +
        '2502' +
        '81' +
        'ff' +
        'bfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080' +
        'c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6' +
        'b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e' +
        '0c' + // nonce
        '00' + // era
        '0500' + // balances.transfer
        'ff' +
        '4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8' +
        'e5c0'
      );

      expect(extrinsic.isSigned).toEqual(true);
      expect(extrinsic.signer.toU8a()).toEqual(new Uint8Array([255, 191, 200, 35, 170, 117, 195, 0, 88, 238, 236, 33, 171, 226, 194, 214, 183, 36, 116, 24, 164, 175, 137, 214, 122, 32, 132, 194, 172, 134, 77, 160, 128]));
      expect(extrinsic.signature.toHex()).toEqual('0xc0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e');
      expect(extrinsic.nonce.toNumber()).toEqual(3);
      expect(extrinsic.era.toU8a()).toEqual(new Uint8Array([0]));
      expect(extrinsic.callIndex).toEqual(new Uint8Array([5, 0]));
      expect(`${extrinsic.method.sectionName}.${extrinsic.method.methodName}`).toEqual('balances.transfer');
      expect(extrinsic.args[0].toString()).toEqual('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo');
    });

    it('decodes an actual transaction (no length prefix, old version)', (): void => {
      const extrinsic = new Extrinsic(
        '0x' +
        '81' +
        'ff' +
        'bfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080' +
        'c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6' +
        'b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e' +
        '0c' +
        '00' +
        '0500' + // balances.transfer
        'ff' +
        '4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8' +
        'e5c0'
      );

      expect(extrinsic.isSigned).toEqual(true);
      expect(extrinsic.signer.toU8a()).toEqual(new Uint8Array([255, 191, 200, 35, 170, 117, 195, 0, 88, 238, 236, 33, 171, 226, 194, 214, 183, 36, 116, 24, 164, 175, 137, 214, 122, 32, 132, 194, 172, 134, 77, 160, 128]));
      expect(extrinsic.signature.toHex()).toEqual('0xc0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e');
      expect(extrinsic.nonce.toNumber()).toEqual(3);
      expect(extrinsic.era.toU8a()).toEqual(new Uint8Array([0]));
      expect(extrinsic.callIndex).toEqual(new Uint8Array([5, 0]));
      expect(`${extrinsic.method.sectionName}.${extrinsic.method.methodName}`).toEqual('balances.transfer');
      expect(extrinsic.args[0].toString()).toEqual('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo');
    });
  });

  describe('V2', (): void => {
    it('decodes an actual transaction (length prefix)', (): void => {
      const extrinsic = new Extrinsic(
        '0x' +
        '2902' + // yes, longer than in v1, 1 byte for the tip
        '82' +
        'ff' +
        'bfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080' +
        'c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6' +
        'b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e' +
        '00' + // era
        '0c' + // nonce
        '08' + // tip
        '0500' + // balances.transfer
        'ff' +
        '4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8' +
        'e5c0'
      );

      expect(extrinsic.isSigned).toEqual(true);
      expect(extrinsic.signer.toU8a()).toEqual(new Uint8Array([255, 191, 200, 35, 170, 117, 195, 0, 88, 238, 236, 33, 171, 226, 194, 214, 183, 36, 116, 24, 164, 175, 137, 214, 122, 32, 132, 194, 172, 134, 77, 160, 128]));
      expect(extrinsic.signature.toHex()).toEqual('0xc0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e');
      expect(extrinsic.era.toU8a()).toEqual(new Uint8Array([0]));
      expect(extrinsic.nonce.toNumber()).toEqual(3);
      expect(extrinsic.tip.toNumber()).toEqual(2);
      expect(extrinsic.callIndex).toEqual(new Uint8Array([5, 0]));
      expect(`${extrinsic.method.sectionName}.${extrinsic.method.methodName}`).toEqual('balances.transfer');
      expect(extrinsic.args[0].toString()).toEqual('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo');
    });

    it('constructs from itself', (): void => {
      const input = '0x' +
        '2902' +
        '82' +
        'ff' +
        'bfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080' +
        'c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6' +
        'b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e' +
        '00' + // era
        '00' + // nonce
        '00' + // tip
        '0500' + // balances.transfer
        'ff' +
        '4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8' +
        'e5c0';

      expect(
        new Extrinsic(new Extrinsic(input)).toU8a()
      ).toEqual(hexToU8a(input));
    });
  });
});
