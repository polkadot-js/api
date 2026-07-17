// Copyright 2017-2026 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { VersionedMultiLocation, VersionedResponse } from './types.js';

import { TypeRegistry } from '../../create/index.js';

const registry = new TypeRegistry();

describe('xcm versioned types', (): void => {
  describe('VersionedMultiLocation', (): void => {
    // https://github.com/polkadot-js/api/pull/6142 introduced a lowercase `v5`
    // enum key, which broke the `.isV5`/`.asV5` accessors and produced a
    // lowercase `v5` type/JSON output inconsistent with all sibling versions.
    it('exposes an uppercase V5 variant (not v5)', (): void => {
      const raw = registry.createType('VersionedMultiLocation').toRawType();

      expect(raw.includes('"V5":"MultiLocationV5"')).toBe(true);
      expect(raw.includes('"v5"')).toBe(false);
    });

    it('decodes/creates the V5 variant with the correct type name', (): void => {
      const vml = registry.createType<VersionedMultiLocation>('VersionedMultiLocation', { V5: { interior: 'Here', parents: 0 } });

      expect(vml.type).toEqual('V5');
      expect(vml.isV5).toBe(true);
    });
  });

  describe('VersionedResponse', (): void => {
    // VersionedResponse was missing its `_enum` wrapper, so it decoded as a
    // Struct with V0..V5 fields instead of a versioned Enum.
    it('is an Enum (has an _enum wrapper), like every other Versioned* type', (): void => {
      expect(registry.createType('VersionedResponse').toRawType().includes('"_enum"')).toBe(true);
    });

    it('creates a single versioned variant discriminated by version', (): void => {
      const vr = registry.createType<VersionedResponse>('VersionedResponse', { V4: { Null: null } });

      expect(vr.type).toEqual('V4');
      expect(vr.isV4).toBe(true);
      expect(vr.isV5).toBe(false);
    });
  });
});
