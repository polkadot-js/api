// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import { toPromiseMethod } from '@polkadot/api';

import v0contractFlipper from '../test/contracts/ink/v0/flipper.contract.json';
import v0abiFlipper from '../test/contracts/ink/v0/flipper.json';
import v1contractFlipper from '../test/contracts/ink/v1/flipper.contract.json';
import { Blueprint } from './Blueprint';
import { mockApi } from './mock';

const EXISTING = { Existing: '0x0000000000000000000000000000000000000000000000000000000000000000' };

const v0wasmFlipper = fs.readFileSync(path.join(__dirname, '../test/contracts/ink/v0/flipper.wasm'));

describe('Blueprint', (): void => {
  it('can construct with an individual ABI/WASM combo', (): void => {
    expect(
      () => new Blueprint(mockApi, v0abiFlipper as Record<string, unknown>, { Upload: v0wasmFlipper }, toPromiseMethod)
    ).not.toThrow();
  });

  it('can construct with an .contract ABI (v0)', (): void => {
    expect(
      () => new Blueprint(mockApi, v0contractFlipper as Record<string, unknown>, EXISTING, toPromiseMethod)
    ).not.toThrow();
  });

  it.only('can construct with an .contract ABI (v1)', (): void => {
    expect(
      () => new Blueprint(mockApi, v1contractFlipper as Record<string, unknown>, EXISTING, toPromiseMethod)
    ).not.toThrow();
  });
});
