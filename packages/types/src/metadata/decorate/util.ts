// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types-codec';

import { stringCamelCase } from '@polkadot/util';

type Name = string | Text;

interface Named {
  name: Name;
}

function convert (fn: (n: Name) => string): (n: Named) => string {
  return ({ name }: Named) => fn(name);
}

export const objectNameToCamel = convert(stringCamelCase);
export const objectNameToString = convert((n) => n.toString());
