// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// NOTE When adding any types here, we need to update the coumentation links as
// well - <root>/docs/SUMMARY.md as well as ../README.md

// NOTE We are not re-exporting the index.ts from codec here. The reasoning being
// that these should be enough to actually _use_ the codec, i.e. from a api-user
// perspective these are the value classes. (Codec is for the cases where you need
// to construct values dynamically)

export * from './codec';
export * from './index.classes';
