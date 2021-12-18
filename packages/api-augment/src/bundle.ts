// Copyright 2017-2021 @polkadot/api-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

// trigger in the same way as we do externally
import '@polkadot/api-augment/augment';

export { packageInfo } from './packageInfo';

// Important: we do the exports here via the full package name
export * from '@polkadot/api-augment/consts';
export * from '@polkadot/api-augment/errors';
export * from '@polkadot/api-augment/events';
export * from '@polkadot/api-augment/query';
export * from '@polkadot/api-augment/tx';
