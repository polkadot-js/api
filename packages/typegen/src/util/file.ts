// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

import { assert } from '@polkadot/util';

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
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // NOTE With cjs in a subdir, search one lower as well
  const file = ['../templates', '../../templates']
    .map((p) => path.join(__dirname, p, `${template}.hbs`))
    .find((p) => fs.existsSync(p));

  assert(file, `Unable to locate ${template}.hbs from ${__dirname}`);

  return fs.readFileSync(file).toString();
}
