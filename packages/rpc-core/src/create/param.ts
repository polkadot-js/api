// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InterfaceTypes } from '@polkadot/types/types';
import { RpcParam } from '../types';

interface RpcParamOptions {
  isOptional?: boolean;
}

/** @internal */
export default function createParam (name: string, type: keyof InterfaceTypes, { isOptional = false }: RpcParamOptions = { isOptional: false }): RpcParam {
  return {
    isOptional,
    name,
    type
  };
}

// 0x
// 99e0b6323bb505de354e50466921cfdb010a240ba5c8b29cf5fc34ea54af2657
// 56a03be6086941e0f656ae86dc5c85623c338c6203228455c0c2aaedd18cf169
// 5cec7b0222c3397b7ba35d68b9d77e279ef9a86fc6b967c2995d61fa4082b66e
// 88cdc224106f6a4053c93f0a3f09ae70bf9e09d797f17b0d27b8ab5ddf4f8a67
// fa5160fa188a46319173bc0187edb5d34b152cb314efc267f3bab89d639e6d13

// 0x
// 39f54a56d29828b938d10a6849fe2ac203550850a40764831c3ac839e67d3c8c
// 0a84ce2d8ff01a707609201d5282660a946af9f94948d1d0fc172b94f0562e11
// 7867647f2bfc352b22c1fc727d52fd4aa58daaf591c3273b9367596b859c9a2a
// 7409cc989d6b33ff60dbac6f574d834144bbe1c1fa7fde23a742b2283c6ca14a
// 94cbd88a641a9c71a79c98f014e5ef70be846d1fa0e92096d991b3246807e938
