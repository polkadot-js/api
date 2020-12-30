// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import { decorateMethod } from '@polkadot/api/promise';

import contractFlipper from '../../test/contracts/ink/flipper.contract.json';
import abiFlipper from '../../test/contracts/ink/flipper.json';
import { Code } from './Code';
import { mockApi } from './mock';

const wasmFlipper = fs.readFileSync(path.join(__dirname, '../../test/contracts/ink/flipper.wasm'));

describe('Code', (): void => {
  it('can construct with an individual ABI/WASM combo', (): void => {
    expect(
      () => new Code(mockApi, abiFlipper, wasmFlipper, decorateMethod)
    ).not.toThrow();
  });

  it('can construct with an .contract ABI', (): void => {
    expect(
      () => new Code(mockApi, contractFlipper, null, decorateMethod)
    ).not.toThrow();
  });
});
