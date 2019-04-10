// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export { WsProvider } from '@polkadot/rpc-provider';
import { assertSingletonPackage } from '@polkadot/util';

assertSingletonPackage('@polkadot/api');

export { default as ApiPromise } from './promise';
export { default as ApiRx } from './rx';
export { default as SubmittableExtrinsic, SubmittableResult } from './SubmittableExtrinsic';
