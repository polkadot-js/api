// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';
import path from 'node:path';

import { packageInfo } from '../packageInfo';

export function writeFile (dest: string, generator: () => string, noLog?: boolean): void {
  !noLog && console.log(`${dest}\n\tGenerating`);

  let generated = generator();

  while (generated.includes('\n\n\n')) {
    generated = generated.replace(/\n\n\n/g, '\n\n');
  }

  !noLog && console.log('\tWriting');

  fs.writeFileSync(dest, generated, { flag: 'w' });

  !noLog && console.log('');
}

export function readTemplate (template: string): string {
  // Inside the api repo itself, it will be 'auto'
  const rootDir = packageInfo.path === 'auto'
    ? path.join(__dirname, '..')
    : packageInfo.path;

  // NOTE With cjs in a subdir, search one lower as well
  const file = ['./templates', '../templates']
    .map((p) => path.join(rootDir, p, `${template}.hbs`))
    .find((p) => fs.existsSync(p));

  if (!file) {
    throw new Error(`Unable to locate ${template}.hbs from ${rootDir}`);
  }

  return fs.readFileSync(file).toString();
}
