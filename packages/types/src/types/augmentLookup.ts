// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types-codec';
import type { PortableType } from '../interfaces/metadata';

declare module '@polkadot/types-create/types/lookup' {
  export interface ILookup {
    readonly names: string[];
    readonly types: Vec<PortableType>;
  }
}
