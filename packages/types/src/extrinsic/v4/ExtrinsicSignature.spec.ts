// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import metadataStatic from '@polkadot/types-support/metadata/static-substrate';
import { BN_ZERO } from '@polkadot/util';

import { TypeRegistry } from '../../create';
import { Metadata } from '../../metadata';
import { GenericExtrinsicSignatureV4 as ExtrinsicSignature } from '.';

const signOptions = {
  blockHash: '0x1234567890123456789012345678901234567890123456789012345678901234',
  genesisHash: '0x1234567890123456789012345678901234567890123456789012345678901234',
  nonce: '0x69',
  runtimeVersion: {
    apis: [],
    authoringVersion: BN_ZERO,
    implName: String('test'),
    implVersion: BN_ZERO,
    specName: String('test'),
    specVersion: BN_ZERO,
    transactionVersion: BN_ZERO
  }
};

describe('ExtrinsicSignatureV4', (): void => {
  const pairs = createTestPairs({ type: 'ed25519' });

  it('encodes to a sane Uint8Array (default)', (): void => {
    const registry = new TypeRegistry();

    const u8a = new Uint8Array([
      // signer as an AccountIndex
      0x01, 0x08, // 4 << 2
      // signature type
      0x01,
      // signature
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
      // extra stuff
      0x00, // immortal,
      0x04, // nonce, compact
      0x08 // tip, compact
    ]);

    expect(
      new ExtrinsicSignature(registry, u8a, { isSigned: true }).toU8a()
    ).toEqual(u8a);
  });

  it('fake signs default', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metadataStatic);

    registry.setMetadata(metadata);

    expect(
      new ExtrinsicSignature(registry).signFake(
        registry.createType('Call'),
        pairs.alice.publicKey,
        signOptions
      ).toHex()
    ).toEqual(
      '0x' +
      '00' + // MultiAddress
      'd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d' +
      '01' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '00a5010000'
    );
  });

  it('fake signs default (AccountId address)', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metadataStatic);

    registry.setMetadata(metadata);
    registry.register({
      Address: 'AccountId',
      ExtrinsicSignature: 'AnySignature'
    });

    expect(
      new ExtrinsicSignature(registry).signFake(
        registry.createType('Call'),
        pairs.alice.address,
        signOptions
      ).toHex()
    ).toEqual(
      '0x' +
      // Address = AccountId, no prefix
      'd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d' +
      // This is a prefix-less signature, anySignture as opposed to Multi above
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '00a5010000'
    );
  });

  it('fake signs with non-enum signature', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metadataStatic);

    registry.setMetadata(metadata);
    registry.register({
      Address: 'AccountId',
      ExtrinsicSignature: '[u8;65]'
    });

    expect(
      new ExtrinsicSignature(registry).signFake(
        registry.createType('Call'),
        pairs.alice.address,
        signOptions
      ).toHex()
    ).toEqual(
      '0x' +
      // Address = AccountId, no prefix
      'd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d' +
      // 65 bytes here
      '01' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '00a5010000'
    );
  });

  it('injects a signature', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metadataStatic);

    registry.setMetadata(metadata);

    expect(
      new ExtrinsicSignature(registry).addSignature(
        pairs.alice.publicKey,
        new Uint8Array(65).fill(1),
        new Uint8Array(0)
      ).toHex()
    ).toEqual(
      '0x' +
      '00' + // MultiAddress
      'd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d' +
      '01' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '0101010101010101010101010101010101010101010101010101010101010101' +
      '00000000'
    );
  });
});
