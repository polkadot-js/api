// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/types-augment';

import { TypeRegistry } from '@polkadot/types';

import { U32 } from './index.js';

const registry = new TypeRegistry();

console.log(new U32(registry).divn(1));
