// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create/index.js';
import { Metadata } from '../metadata/index.js';
import { fallbackExtensions } from './signedExtensions/index.js';
import { GenericExtrinsic as Extrinsic } from './index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

describe('Extrinsic', (): void => {
  describe('V4', (): void => {
    it('decodes an actual transaction', (): void => {
      registry.setSignedExtensions(fallbackExtensions);

      const extrinsic = new Extrinsic(
        registry,
        '0x' +
        '5d02' + // length
        '84' + // V4, signing bit set
        '00' + // MultiAddress, AccountId of sender follows
        'fcc4910cb536b4333db4bccb40e2cf6427b4766518e754b91e70c97e4a87dbb3' + // sender
        '00' + // multisig, type ed25519
        'd99ffe3e610ad234e1414bda5831395a6df9098bf80b01561ce89a5065ae89d5' + // sig first 32
        'c10e1619c6c99131b0bea4fb73ef04d07c07770e2ae9df5c325c331769ccb300' + // sig last 32
        'a90b' + // mortal era
        '1101' + // nonce, compact 68
        '0700ac23fc06' + // tip, 0.03 KSM
        '0600' + // balances.transferAllowDeath (on Kusama this was 0400, changed here to match metadata)
        '00' + // MultiAddress, AccountId of recipient follows
        '495e1e506f266418af07fa0c5c108dd436f2faa59fe7d9e54403779f5bbd7718' + // recipient
        '0bc01eb1fc185f' // value, 104.560 KSM
      );

      expect(extrinsic.era.toHuman()).toEqual({ MortalEra: { period: '1,024', phase: '186' } });
      expect(extrinsic.nonce.toNumber()).toEqual(68);
      expect(extrinsic.tip.toHuman()).toEqual('30.0000 mUnit');
      expect(extrinsic.callIndex).toEqual(new Uint8Array([6, 0]));
      expect(extrinsic.args[0].toHex()).toEqual('0x00495e1e506f266418af07fa0c5c108dd436f2faa59fe7d9e54403779f5bbd7718');
      expect(extrinsic.args[1].toHuman()).toEqual('104,560,923,320,000'); // ('104.5609 Unit');
      expect(extrinsic.toPrimitive()).toEqual({ method: { args: { dest: { id: '5DiuK2zR4asj2CEh77SKtUgTswTLkD8eiAKrByg5G3wL5w9b' }, value: 104560923320000 }, callIndex: '0x0600' }, signature: { era: { mortalEra: [1024, 186] }, nonce: 68, signature: { ed25519: '0xd99ffe3e610ad234e1414bda5831395a6df9098bf80b01561ce89a5065ae89d5c10e1619c6c99131b0bea4fb73ef04d07c07770e2ae9df5c325c331769ccb300' }, signer: { id: '5Hn8KKEp8qruCGWaN9MEsjTs4FXB4wv9xn7g1RWkNeKKNXCr' }, tip: 30000000000 } });
    });
  });

  describe('V5', () => {
    it('Signed Extrinsic', () => {
      registry.setSignedExtensions(fallbackExtensions);

      const extrinsic = new Extrinsic(
        registry,
        '0x51028500d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d011e0b7d9438899333c50121f8e10144952d51c3bb8d0ea11dd1f24940d8ff615ad351d95ed9f41f078748ed7cf182864a20b38eebfaef6629433365eb90c0148c007502000000000603008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480b00a0724e1809',
        { preamble: 'signed', version: 5 }
      );

      expect(extrinsic.signer.toString()).toEqual('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
      expect(extrinsic.era.toHuman()).toEqual({ MortalEra: { period: '64', phase: '39' } });
      expect(extrinsic.nonce.toNumber()).toEqual(0);
      expect(extrinsic.tip.toHuman()).toEqual('0');
      expect(extrinsic.callIndex).toEqual(new Uint8Array([6, 3]));
      expect(extrinsic.args[0].toHex()).toEqual('0x008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48');
      expect(extrinsic.args[1].toHuman()).toEqual('10,000,000,000,000');
    });
  });
});
