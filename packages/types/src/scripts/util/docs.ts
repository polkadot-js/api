// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Text } from '@polkadot/types';

import { indent } from './formatting';

type AnyString = Text | string;
type Arg = [AnyString, AnyString];

export function createDocComments (spaces: number, docs: AnyString[], args: Arg[] = []): string {
  const contents = [
    ...docs.map((doc): string => doc.toString().trim()).filter((doc): boolean => !!doc),
    ...args.map(([name, type]): string => `@param ${name} ${type}`)
  ].map((d): string => ` * ${d}`);

  return contents.length
    ? ['/**', ...contents, ' **/\n']
      .map((s): string => indent(spaces)(s))
      .join('\n')
    : '';
}
