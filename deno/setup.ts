// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { stringCamelCase } from 'https://deno.land/x/polkadot/util/mod.ts';

const exports: string[] = [];
const imports: Record<string, string> = {};

for await (const entry of Deno.readDir('packages')) {
  if (entry.isDirectory) {
    try {
      await Deno.readTextFile(`packages/${entry.name}/src/mod.ts`);

      exports.push(`export * as ${stringCamelCase(entry.name)} from 'https://deno.land/x/polkadot/${entry.name}/mod.ts';`);

      imports[`https://deno.land/x/polkadot/${entry.name}/`] = `../packages/${entry.name}/build-deno/`;
    } catch {
      // ignore
    }
  }
}

await Deno.writeTextFile('deno/check.ts', `// Copyright 2017-${new Date().getFullYear()} @polkadot/api authors & contributors\n// SPDX-License-Identifier: Apache-2.0\n\n// auto-generated via deno/setup.ts, do not edit\n\n${exports.sort().join('\n')}\n`);

await Deno.writeTextFile('deno/import_map.json', `${JSON.stringify({ imports }, null, 2)}\n`);
