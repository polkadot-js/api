// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';

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
