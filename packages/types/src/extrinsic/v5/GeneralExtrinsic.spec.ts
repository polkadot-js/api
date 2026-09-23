// Copyright 2017-2026 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { Metadata } from '../../metadata/index.js';
import { GeneralExtrinsic } from './GeneralExtrinsic.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

describe('GeneralExt', (): void => {
  const extrinsic = '0xc44500650000000000060000d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0700e40b5402';

  it('Can decode a general extrinsic', (): void => {
    const genExt = new GeneralExtrinsic(registry, extrinsic);

    expect(genExt.version).toEqual(5);
    expect(genExt.transactionExtensionVersion.toNumber()).toEqual(0);
    expect(genExt.method.toHuman()).toEqual({ args: { dest: { Id: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY' }, value: '10,000,000,000' }, method: 'transferAllowDeath', section: 'balances' });
    expect(genExt.era.toHuman()).toEqual({ MortalEra: { period: '64', phase: '6' } });
    expect(genExt.tip.toNumber()).toEqual(0);
    expect(genExt.mode.toNumber()).toEqual(0);
    expect(genExt.assetId.toHuman()).toEqual(null);
    expect(genExt.nonce.toNumber()).toEqual(0);
  });

  it('Can encode a general extrinsic', (): void => {
    const payload = {
      era: '0x6500',
      method: '0x060000d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0700e40b5402',
      nonce: '0x00000000',
      tip: '0x00000000000000000000000000000000',
      transactionVersion: '0x00000002'
    };
    const genExt = new GeneralExtrinsic(registry, {
      payload
    });

    expect(genExt.toHex()).toEqual(extrinsic);
  });

  it('decodes metadata-defined extension versions', (): void => {
    const versionedRegistry = new TypeRegistry();
    const versionedMetadata = new Metadata(versionedRegistry, rpcMetadata);
    const { transactionExtensions, transactionExtensionsByVersion } = versionedMetadata.asLatest.extrinsic;
    const checkNonce = transactionExtensions.find(({ identifier }) => identifier.eq('CheckNonce'));
    const version0 = [...transactionExtensionsByVersion]
      .find(([version]) => version.eq(0))?.[1];
    const testExtensionIndex = transactionExtensions.length;

    if (!checkNonce || !version0) {
      throw new Error('Expected CheckNonce in transaction extension version 0');
    }

    transactionExtensions.push(versionedRegistry.createTypeUnsafe('TransactionExtensionMetadataV16', [{
      identifier: 'TestExtension',
      implicit: checkNonce.implicit,
      type: checkNonce.type
    }]));
    transactionExtensionsByVersion.set(
      versionedRegistry.createTypeUnsafe('u8', [1]),
      versionedRegistry.createTypeUnsafe('Vec<Compact<u32>>', [[testExtensionIndex, ...version0]])
    );
    versionedRegistry.setMetadata(versionedMetadata);

    const versionedExtrinsic = `0xc845011c${extrinsic.slice(8)}` as `0x${string}`;
    const genExt = new GeneralExtrinsic(versionedRegistry, versionedExtrinsic);
    const testExtension = genExt.get('TestExtension');

    if (!testExtension) {
      throw new Error('Expected TestExtension in decoded extrinsic');
    }

    expect(genExt.transactionExtensionVersion.toNumber()).toEqual(1);
    expect(testExtension.toHex()).toEqual('0x00000007');
    expect(genExt.method.toHuman()).toEqual({ args: { dest: { Id: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY' }, value: '10,000,000,000' }, method: 'transferAllowDeath', section: 'balances' });
    expect(genExt.toHex()).toEqual(versionedExtrinsic);
  });
});
