// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { UncheckedRaw } from '../../extrinsic';

import uncheckedLength from '@polkadot/extrinsics/codec/encode/length';
import trieRootOrdered from '@polkadot/trie-hash/rootOrdered';

export default function extrinsicsRootRaw (extrinsics: Array<UncheckedRaw> = []): Uint8Array {
  return trieRootOrdered(
    extrinsics.map((extrinsic) =>
      uncheckedLength(extrinsic)
    )
  );
}
