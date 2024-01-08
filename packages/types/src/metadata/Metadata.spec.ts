// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { HexString } from '@polkadot/util/types';

import kusama from '@polkadot/types-support/metadata/static-kusama';
import polkadot from '@polkadot/types-support/metadata/static-polkadot';
import substrate from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create/index.js';
import { Metadata } from './Metadata.js';

const allData: Record<string, HexString> = {
  kusama,
  polkadot,
  substrate
};

for (const type of ['kusama', 'polkadot', 'substrate'] as const) {
  describe(`${type}metadata`, (): void => {
    const metadata = new Metadata(new TypeRegistry(), allData[type]);

    it('allows creation from hex', (): void => {
      expect(
        new Metadata(new TypeRegistry(), metadata.toHex()).toJSON()
      ).toEqual(metadata.toJSON());
    });

    it('has a sane toCallsOnly', (): void => {
      const test = metadata.asCallsOnly;

      // it has a useful length
      expect(
        test.toU8a().length > 65536
      ).toBe(true);

      // it sets it to the correct version
      expect(
        test.version
      ).toEqual(14);
    });
  });
}
