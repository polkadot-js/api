// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types-codec';
import type { TypeDef } from '@polkadot/types-create/types';
import type { PortableType } from '../interfaces/metadata';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo';

declare module '@polkadot/types-create/types/lookup' {
  export interface ILookup {
    readonly names: string[];
    readonly types: Vec<PortableType>;

    getName (lookupId: SiLookupTypeId | string | number): string | undefined;
    getSiType (lookupId: SiLookupTypeId | string | number): SiType;
    getTypeDef (lookupId: SiLookupTypeId | string | number): TypeDef;
  }
}
