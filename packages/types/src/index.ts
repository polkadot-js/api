// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// NOTE When adding any types here, we need to update the coumentation links as
// well - <root>/docs/SUMMARY.md as well as ../README.md

import { assertSingletonPackage } from '@polkadot/util';

// HACK Register our types before anything else - if just means that any use of
// createType (either here, like in derive) or in users of this app, will have
// the type available without restoring to juggling imports themselves
//
// This was found here in api-derive as well in apps, where `createType` was
// used on constant definitions, but before the actual API has been injected
import './injector';

assertSingletonPackage('@polkadot/types');

export * from './codec';
export * from './index.types';
