// Copyright 2017-2021 @polkadot/rpc-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

// trigger in the same way as we do externally
import '@polkadot/rpc-augment/augment';

export { packageInfo } from './packageInfo';

// Important: we do the exports here via the full package name
export * from '@polkadot/rpc-augment/rpc';
