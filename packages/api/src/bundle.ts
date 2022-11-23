// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// NOTE: Any export changes here also needs to be applied to mod.ts
// (generally that file _should_ only `export * from './index'`, however
// for the time being we are not exporting sc-provider directly there)

import '@polkadot/rpc-augment';

export { Keyring } from '@polkadot/keyring';
export { HttpProvider, ScProvider, WsProvider } from '@polkadot/rpc-provider';

export { packageInfo } from './packageInfo';
export { SubmittableResult } from './submittable';

export * from './promise';
export * from './rx';
