// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { InterfaceTypes } from '../../types';

export type ExtTypes = Record<string, keyof InterfaceTypes>;

export type ExtInfo = {
  extra: ExtTypes;
  types: ExtTypes;
}

export type ExtDef = Record<string, ExtInfo>;
