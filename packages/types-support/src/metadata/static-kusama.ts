// Copyright 2017-2026 @polkadot/types-support authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { compactStripLength, hexToU8a, u8aToHex } from '@polkadot/util';

import wrapped from './v16/kusama-hex.js';
import rpc from './v16/kusama-rpc.js';
import version from './v16/kusama-ver.js';

// The v16 fixtures store the raw `Metadata_metadata_at_version` result, i.e. a
// SCALE-encoded `Option<OpaqueMetadata>`. Strip the `Some` flag (0x01) and the
// `OpaqueMetadata` (Vec<u8>) length prefix to recover the raw, magic-prefixed
// metadata that direct `new Metadata(...)` consumers expect.
const metadata = u8aToHex(compactStripLength(hexToU8a(wrapped).subarray(1))[1]);

export { rpc, version };

export default metadata;
