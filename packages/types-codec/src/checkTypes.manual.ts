// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/types-augment';

import { TypeRegistry } from '@polkadot/types';

import { U32 } from '.';

const registry = new TypeRegistry();

console.log(new U32(registry).divn(1));
