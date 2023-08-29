// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type ExtTypes = Record<string, string>;

export interface ExtInfo {
  extrinsic: ExtTypes;
  payload: ExtTypes;
}

export type ExtDef = Record<string, ExtInfo>;
