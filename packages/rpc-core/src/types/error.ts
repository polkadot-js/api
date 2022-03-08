// Copyright 2017-2022 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface RpcErrorInterface {
  code: number;
  data?: string | number;
  message: string;
  stack: string;
}
