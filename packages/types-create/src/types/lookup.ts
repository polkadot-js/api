// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ICompact, INumber } from '@polkadot/types-codec/types';
import type { TypeDef } from './types';

export interface ILookup {
  getSiType (lookupId: ICompact<INumber> | string | number): {
    def: {
      asTuple: ICompact<INumber>[]
    }
  },
  getTypeDef (lookupId: ICompact<INumber> | string | number): TypeDef;
}
