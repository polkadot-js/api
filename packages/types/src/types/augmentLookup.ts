// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types-create/types/lookup';

import type { Vec } from '@polkadot/types-codec';
import type { LookupString } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { PortableType } from '../interfaces/metadata/index.js';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo/index.js';

declare module '@polkadot/types-create/types/lookup' {
  interface ILookup {
    readonly names: string[];
    readonly types: Vec<PortableType>;

    getName (lookupId: SiLookupTypeId | LookupString | number): string | undefined;
    getSiType (lookupId: SiLookupTypeId | LookupString | number): SiType;
    getTypeDef (lookupId: SiLookupTypeId | LookupString | number): TypeDef;
  }
}
