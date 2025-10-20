// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { decorateExtrinsics, Metadata } from '../../metadata/index.js';
import { ExtrinsicPayloadV5 } from './ExtrinsicPayload.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

import { createWriteStream } from "fs";
import { BN_ZERO } from '@polkadot/util';
import { fallbackExtensions } from '../signedExtensions/index.js';

console.log = async (message: any) => {
  const tty = createWriteStream("/dev/tty");
  const msg =
    typeof message === "string" ? message : JSON.stringify(message, null, 2);
  return tty.write(msg + "\n");
};


registry.setMetadata(metadata);
registry.setTransactionExtensions(fallbackExtensions);
registry.register({verifySignature: "PalletVerifySignatureExtensionVerifySignature"})

const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

describe('ExtrinsicPayload', (): void => {
  it('has a sane inspect', (): void => {
    new ExtrinsicPayloadV5(registry, { method: tx['timestamp']['set'](0).toHex()} as never)



  });
});
