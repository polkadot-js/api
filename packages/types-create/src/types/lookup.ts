// Copyright 2017-2023 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, Text } from '@polkadot/types-codec';
import type { ICompact, INumber, LookupString } from '@polkadot/types-codec/types';
import type { TypeDef } from './types.js';

// A simplified SiType without the need for an interface import
// (while type interfaces are still in @polkadot/types). This provides
// the minimum interface allowing us to work with it here
interface SiTypeBase {
  def: {
    asTuple: ICompact<INumber>[]
  }
}

export interface ILookup {
  getSiType (lookupId: ICompact<INumber> | LookupString | number): SiTypeBase;
  getTypeDef (lookupId: ICompact<INumber> | LookupString | number): TypeDef;
  sanitizeField (name: Option<Text>): [string | null, string | null];
}
