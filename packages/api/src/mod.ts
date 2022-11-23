// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// NOTE: Generally that file _should_ only `export * from './index'`, however
// for the time being we are not exporting sc-provider directly. Hence we are
// using a combination of index.ts & bundle.ts to generate the contents of this

// from index.ts
import './detectPackage';
// from bundle.ts (and all the rest below)
import '@polkadot/rpc-augment';

export { Keyring } from '@polkadot/keyring';
export { HttpProvider, WsProvider } from '@polkadot/rpc-provider';

export { packageInfo } from './packageInfo';
export { SubmittableResult } from './submittable';

export * from './promise';
export * from './rx';
