// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';

import { assert } from '@polkadot/util';

export function assertDir (path: string): string {
  assert(fs.existsSync(path) && fs.lstatSync(path).isDirectory(), `${path} is not a directory`);

  return path;
}

export function assertFile (path: string): string {
  assert(fs.existsSync(path) && fs.lstatSync(path).isFile(), `${path} is not a file`);

  return path;
}
