// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InterfaceTypes } from '../../types';

export type ExtTypes = Record<string, keyof InterfaceTypes>;

export type ExtInfo = {
  extra: ExtTypes;
  types: ExtTypes;
}

export type ExtDef = Record<string, ExtInfo>;
