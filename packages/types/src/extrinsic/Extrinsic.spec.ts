// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadata from '@polkadot/metadata/Metadata/static';
import { hexToU8a } from '@polkadot/util';

import { TypeRegistry } from '../create';
import Extrinsic from './Extrinsic';

const registry = new TypeRegistry();

// eslint-disable-next-line no-new
new Metadata(registry, rpcMetadata);

describe('Extrinsic', (): void => {
  describe('V1', (): void => {
    it('decodes an actual transaction', (): void => {
      const extrinsic = new Extrinsic(
        registry,
        '0x' +
        '2502' +
        '81' +
        'ff' +
        'bfc823aa75c30058eeec21abe2c2d6b7247418a4af89d67a2084c2ac864da080' +
        'c0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6' +
        'b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e' +
        '0c' + // nonce
        '00' + // era
        '0600' + // balances.transfer
        'ff' +
        '4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8' +
        'e5c0'
      );

      expect(extrinsic.isSigned).toEqual(true);
      expect(extrinsic.signer.toU8a()).toEqual(new Uint8Array([255, 191, 200, 35, 170, 117, 195, 0, 88, 238, 236, 33, 171, 226, 194, 214, 183, 36, 116, 24, 164, 175, 137, 214, 122, 32, 132, 194, 172, 134, 77, 160, 128]));
      expect(extrinsic.signature.toHex()).toEqual('0xc0aa4df3b4926c3cd78bbdced31d8bdccb8604b779b71b90e58b2848df4a9ad6b0aa1aae6be7a05c9413a172b0325e4d214e5ff2b25098028b30f1a50be9c90e');
      expect(extrinsic.nonce.toNumber()).toEqual(3);
      expect(extrinsic.era.toU8a()).toEqual(new Uint8Array([0]));
      expect(extrinsic.callIndex).toEqual(new Uint8Array([6, 0]));
      expect(`${extrinsic.method.sectionName}.${extrinsic.method.methodName}`).toEqual('balances.transfer');
      expect(extrinsic.args[0].toString()).toEqual('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo');
    });
  });

  describe('V2', (): void => {
    it('decodes an actual transaction', (): void => {
      const extrinsic = new Extrinsic(
        registry,
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
        '0600' + // balances.transfer
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
      expect(extrinsic.callIndex).toEqual(new Uint8Array([6, 0]));
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
        '0600' + // balances.transfer
        'ff' +
        '4a83f1c09be797bc3d9adce29818368b276a84e6b545ced492c25c948978d7f8' +
        'e5c0';

      expect(
        new Extrinsic(registry, new Extrinsic(registry, input)).toU8a()
      ).toEqual(hexToU8a(input));
    });
  });

  describe('V4', (): void => {
    it('decodes an actual transaction', (): void => {
      const extrinsic = new Extrinsic(
        registry,
        '0x' +
        '5d02' + // length
        '84' + // V4, signing bit set
        'ff' + // lookup, AccountId of sender follows
        'fcc4910cb536b4333db4bccb40e2cf6427b4766518e754b91e70c97e4a87dbb3' + // sender
        '00' + // multisig, type ed25519
        'd99ffe3e610ad234e1414bda5831395a6df9098bf80b01561ce89a5065ae89d5' + // sig first 32
        'c10e1619c6c99131b0bea4fb73ef04d07c07770e2ae9df5c325c331769ccb300' + // sig last 32
        'a90b' + // mortal era
        '1101' + // nonce, compact 68
        '0700ac23fc06' + // tip, 0.03 KSM
        '0600' + // balances.transfer (on Kusama this was 0400, changed here to match metadata)
        'ff' + // lookup, AccountId of recipient follows
        '495e1e506f266418af07fa0c5c108dd436f2faa59fe7d9e54403779f5bbd7718' + // recipient
        '0bc01eb1fc185f' // value, 104.560 KSM
      );

      expect(extrinsic.era.toHuman()).toEqual({ MortalEra: { period: '1,024', phase: '186' } });
      expect(extrinsic.nonce.toNumber()).toEqual(68);
      expect(extrinsic.tip.toHuman()).toEqual('30.000m Unit');
      expect(extrinsic.callIndex).toEqual(new Uint8Array([6, 0]));
      expect(extrinsic.args[0].toHex()).toEqual('0xff495e1e506f266418af07fa0c5c108dd436f2faa59fe7d9e54403779f5bbd7718');
      expect(extrinsic.args[1].toHuman()).toEqual('104.560 Unit');
    });
  });
});
