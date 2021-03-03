// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { InterfaceTypes } from '../../types';

export type ExtTypes = Record<string, keyof InterfaceTypes>;

export type ExtInfo = {
  extrinsic: ExtTypes;
  payload: ExtTypes;
}

export type ExtDef = Record<string, ExtInfo>;
