// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { decorateExtrinsics, Metadata } from '../../metadata/index.js';
import { GeneralExtrinsic } from './GeneralExtrinsic.js';
import { createTestPairs } from '@polkadot/keyring';
import { fallbackExtensions } from '../signedExtensions/index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);
const keyring = createTestPairs({ type: 'ed25519' }, false);

registry.setMetadata(metadata);

const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);


describe('GeneralExtrinsic', (): void => {
    it('has a sane inspect', (): void => {
        // we don't expect this to fail, however it is actually a good
        // reference for the ordering in base Substrate
        expect(new GeneralExtrinsic(registry, { method: tx['timestamp']['set'](0).toHex() } as never).inspect()).toEqual({
            inner: [
                { name: 'transactionExtensionVersion', outer: [new Uint8Array(1)] },
                { inner: undefined, name: 'era', outer: [new Uint8Array([0]), new Uint8Array([0])] },
                { name: 'nonce', outer: [new Uint8Array([0])] },
                { name: 'tip', outer: [new Uint8Array([0])] },
                { name: 'assetId', outer: [new Uint8Array([0])] },
                { name: 'mode', outer: [new Uint8Array([0])] },
            ]
        });
    });

    it('creates a general extrinsic', (): void => {
        registry.setSignedExtensions(fallbackExtensions);
        const ext = new GeneralExtrinsic(
            registry,
            tx['balances']['transferAllowDeath'](keyring.bob.publicKey, 6969n)
        );

        expect(
            ext.toHex()
        ).toEqual(
            '0x' +
            '0600' + // balance.transferAllowDeath
            '00' +
            'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
            'e56c'
        );

        expect(ext.toHuman()).toEqual({
            args: {
                dest: {
                    Id: '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGqm'
                },
                value: '6,969'
            },
            callIndex: '0x0600'
        }
        )
    });
});

