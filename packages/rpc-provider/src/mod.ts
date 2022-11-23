// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// export * from './index';
//
// NOTE: Generally this file _should_ only `export * from './index'`, however
// for the time being we are not exporting sc-provider directly. Hence we are
// using a combination of index.ts & bundle.ts to generate the contents of this

// from index.ts
import './detectPackage';

// from bundle.ts
export { HttpProvider } from './http';
export { packageInfo } from './packageInfo';
export { WsProvider } from './ws';
