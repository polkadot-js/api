// Copyright 2017-2022 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DecoratedRpc, QueryableConsts, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from '@polkadot/api-base/types';
import type { RpcInterface } from '@polkadot/rpc-core/types';
import type { Metadata } from '@polkadot/types';
import type { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import type { Registry, Signer } from '@polkadot/types/types';

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx {
  consts: QueryableConsts<'rxjs'>;
  extrinsicType: number;
  genesisHash?: Hash;
  hasSubscriptions: boolean;
  registry: Registry;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableStorage<'rxjs'>>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;
}
