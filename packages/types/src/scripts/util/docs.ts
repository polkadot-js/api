// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Text } from '@polkadot/types';

type Arg = [Text | string, Text | string];

export function createDocComments (docs: Text[], args: Arg[] = []): string[] {
  const contents = [
    ...(docs.length ? [` * ${docs.map((d): string => d.toString().trim()).join(' ')}`] : []),
    ...args.map(([name, type]): string => ` * @param ${name} ${type}`)
  ];

  return contents.length
    ? [
      '/**',
      ...contents,
      ' **/\n'
    ]
    : [];
}
