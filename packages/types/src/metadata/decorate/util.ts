// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '../../primitive';

import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

export function objectNameFirstLower ({ name }: { name: string | Text }): string {
  return stringLowerFirst(name);
}

export function objectNameToCamel ({ name }: { name: string | Text }): string {
  return stringCamelCase(name);
}

export function objectNameToString ({ name }: { name: string | Text }): string {
  return name.toString();
}
