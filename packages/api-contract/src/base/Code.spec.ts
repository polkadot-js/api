// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import { toPromiseMethod } from '@polkadot/api';
import v0contractFlipper from '@polkadot/api-contract-support/contracts/ink/v0/flipper.contract.json';
import v0abiFlipper from '@polkadot/api-contract-support/contracts/ink/v0/flipper.json';
import v1contractFlipper from '@polkadot/api-contract-support/contracts/ink/v1/flipper.contract.json';

import { Code } from './Code';
import { mockApi } from './mock';

const v0wasmFlipper = fs.readFileSync(path.join(__dirname, '../../../api-contract-support/contracts/ink/v0/flipper.wasm'));

describe('Code', (): void => {
  it('can construct with an individual ABI/WASM combo', (): void => {
    expect(
      () => new Code(mockApi, v0abiFlipper as Record<string, unknown>, v0wasmFlipper, toPromiseMethod)
    ).not.toThrow();
  });

  it('can construct with an .contract ABI (v0)', (): void => {
    expect(
      () => new Code(mockApi, v0contractFlipper as Record<string, unknown>, null, toPromiseMethod)
    ).not.toThrow();
  });

  it.only('can construct with an .contract ABI (v1)', (): void => {
    expect(
      () => new Code(mockApi, v1contractFlipper as Record<string, unknown>, null, toPromiseMethod)
    ).not.toThrow();
  });
});
