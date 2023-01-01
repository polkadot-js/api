// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types-create/types/lookup';

import type { Vec } from '@polkadot/types-codec';
import type { TypeDef } from '@polkadot/types-create/types';
import type { PortableType } from '../interfaces/metadata';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo';

declare module '@polkadot/types-create/types/lookup' {
  interface ILookup {
    readonly names: string[];
    readonly types: Vec<PortableType>;

    getName (lookupId: SiLookupTypeId | string | number): string | undefined;
    getSiType (lookupId: SiLookupTypeId | string | number): SiType;
    getTypeDef (lookupId: SiLookupTypeId | string | number): TypeDef;
  }
}
