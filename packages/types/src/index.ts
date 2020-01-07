// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// NOTE When adding any types here, we need to update the documentation links as
// well - <root>/docs/SUMMARY.md as well as ../README.md

import { assertSingletonPackage } from '@polkadot/util';

assertSingletonPackage('@polkadot/types');

export * from './codec';
export * from './index.types';
export { formatType } from './scripts/util/formatting';
