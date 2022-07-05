// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/types-codec/types/registry';

import type { Codec, CodecClass, ICompact, INumber } from '@polkadot/types-codec/types';
import type { ILookup, TypeDef } from '@polkadot/types-create/types';

declare module '@polkadot/types-codec/types/registry' {
  interface Registry {
    readonly lookup: ILookup;

    createLookupType (lookupId: ICompact<INumber> | number): string;
    setLookup (lookup: ILookup): void;

    getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined;
  }
}
