// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'fs';
import path from 'path';

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
  return fs.readFileSync(path.join(__dirname, `../templates/${template}.hbs`)).toString();
}
