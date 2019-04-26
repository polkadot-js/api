// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// NOTE When adding any types here, we need to update the coumentation links as
// well - <root>/docs/SUMMARY.md as well as ../README.md

import { assertSingletonPackage } from '@plugnet/util';

assertSingletonPackage('@plugnet/types');

export { default as ContractAbi } from './ContractAbi';
export * from './codec';
export * from './index.types';
