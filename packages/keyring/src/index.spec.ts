// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToU8a, stringToU8a } from '@plugnet/util';
import { cryptoWaitReady } from '@plugnet/util-crypto';

import Keyring from '.';
import setPrefix from './address/setPrefix';

describe('keypair', () => {
  beforeEach(async () => {
    await cryptoWaitReady();
  });

  describe('ed25519', () => {
    const publicKeyOne = new Uint8Array([47, 140, 97, 41, 216, 22, 207, 81, 195, 116, 188, 127, 8, 195, 230, 62, 209, 86, 207, 120, 174, 251, 74, 101, 80, 217, 123, 135, 153, 121, 119, 238]);
    const publicKeyTwo = new Uint8Array([215, 90, 152, 1, 130, 177, 10, 183, 213, 75, 254, 211, 201, 100, 7, 58, 14, 225, 114, 243, 218, 166, 35, 37, 175, 2, 26, 104, 247, 7, 81, 26]);
    const seedOne = stringToU8a('12345678901234567890123456789012');
    const seedTwo = hexToU8a('0x9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60');
    let keypair: Keyring;

    beforeEach(async () => {
      keypair = new Keyring({ type: 'ed25519' });

      keypair.addFromSeed(seedOne, {});
    });

    it('adds the pair', () => {
      expect(
        keypair.addFromSeed(seedTwo, {}).publicKey()
      ).toEqual(publicKeyTwo);
    });

    it('creates a ed25519 pair via mnemonicToSeed', () => {
      expect(
        keypair.addFromUri(
          'seed sock milk update focus rotate barely fade car face mechanic mercy'
        ).address()
      ).toEqual('5DkQP32jP4DVJLWWBRBoZF2tpWjqFrcrTBo6H5NcSk7MxKCC');
    });

    it('adds from a mnemonic', () => {
      setPrefix(68);

      expect(
        keypair.addFromMnemonic('moral movie very draw assault whisper awful rebuild speed purity repeat card', {}).address()
      ).toEqual('7sPsxWPE5DzAyPT3VuoJYw5NTGscx9QYN9oddQx4kALKC3hH');
    });

    it('allows publicKeys retrieval', () => {
      keypair.addFromSeed(seedTwo, {});

      expect(
        keypair.getPublicKeys()
      ).toEqual([ publicKeyOne, publicKeyTwo ]);
    });

    it('allows retrieval of a specific item', () => {
      expect(
        keypair.getPair(publicKeyOne).publicKey()
      ).toEqual(publicKeyOne);
    });

    it('allows adding from JSON', () => {
      expect(
        keypair.addFromJson(
          JSON.parse('{"address":"5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaQua","encoded":"0xb4a14995d25ab609f3686e9fa45f1fb237cd833f33f00d4b12c51858ca070d96972e47d73aae5eeb0fc06f923826cf0943fdb02c2c2ee30ef52a7912663053940d1da4da66b3a3f520ae07422c1c94b2d95690fca9d1f4a997623bb2923a8833280e19e7f72c3c5cfa343974e60e2b3dc53b404fdaf330756daad5e4e3","encoding":{"content":"pkcs8","type":"xsalsa20-poly1305","version":"0"},"meta":{"isTesting":true,"name":"alice"}}')
        ).publicKey()
      ).toEqual(
        new Uint8Array([209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79])
      );
    });

    it('signs and verifies', () => {
      const MESSAGE = stringToU8a('this is a message');
      const pair = keypair.getPair(publicKeyOne);
      const signature = pair.sign(MESSAGE);

      expect(pair.verify(MESSAGE, signature)).toBe(true);
    });
  });

  describe('sr25519', () => {
    const publicKeyOne = new Uint8Array([116, 28, 8, 160, 111, 65, 197, 150, 96, 143, 103, 116, 37, 155, 217, 4, 51, 4, 173, 250, 93, 62, 234, 98, 118, 11, 217, 190, 151, 99, 77, 99]);
    const publicKeyTwo = hexToU8a('0x44a996beb1eef7bdcab976ab6d2ca26104834164ecf28fb375600576fcc6eb0f');
    const seedOne = stringToU8a('12345678901234567890123456789012');
    const seedTwo = hexToU8a('0x9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60');
    let keypair: Keyring;

    beforeEach(() => {
      keypair = new Keyring({ type: 'sr25519' });

      keypair.addFromSeed(seedOne, {});
    });

    it('creates with dev phrase when only path specified', () => {
      expect(
        keypair.createFromUri('//Alice').address()
      ).toEqual('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
    });

    it('adds the pair', () => {
      expect(
        keypair.addFromSeed(seedTwo, {}).publicKey()
      ).toEqual(publicKeyTwo);
    });

    it('adds from a mnemonic', () => {
      setPrefix(68);

      expect(
        keypair.addFromMnemonic('moral movie very draw assault whisper awful rebuild speed purity repeat card', {}).address()
      ).toEqual('7qQGarA4PWjPPVHG4USn1yuuVZvEHN7XZz8o7EbAp48jayZQ');
    });

    it('allows publicKeys retrieval', () => {
      keypair.addFromSeed(seedTwo, {});

      expect(
        keypair.getPublicKeys()
      ).toEqual([ publicKeyOne, publicKeyTwo ]);
    });

    it('allows retrieval of a specific item', () => {
      expect(
        keypair.getPair(publicKeyOne).publicKey()
      ).toEqual(publicKeyOne);
    });

    it('allows adding from JSON', () => {
      expect(
        keypair.addFromJson(
          JSON.parse('{"address":"5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaQua","encoded":"0xb4a14995d25ab609f3686e9fa45f1fb237cd833f33f00d4b12c51858ca070d96972e47d73aae5eeb0fc06f923826cf0943fdb02c2c2ee30ef52a7912663053940d1da4da66b3a3f520ae07422c1c94b2d95690fca9d1f4a997623bb2923a8833280e19e7f72c3c5cfa343974e60e2b3dc53b404fdaf330756daad5e4e3","encoding":{"content":"pkcs8","type":"xsalsa20-poly1305","version":"0"},"meta":{"isTesting":true,"name":"alice"}}')
        ).publicKey()
      ).toEqual(
        new Uint8Array([209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79])
      );
    });

    it('signs and verifies', () => {
      const MESSAGE = stringToU8a('this is a message');
      const pair = keypair.getPair(publicKeyOne);
      const signature = pair.sign(MESSAGE);

      expect(pair.verify(MESSAGE, signature)).toBe(true);
    });
  });
});
