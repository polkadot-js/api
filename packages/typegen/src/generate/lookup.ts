// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SiLookupTypeId, SiPath } from '@polkadot/types/interfaces/scaleInfo';
import type { Metadata } from '@polkadot/types/metadata/Metadata';

import Handlebars from 'handlebars';

import { stringCamelCase, stringUpperFirst } from '@polkadot/util';

import { initMeta, readTemplate, writeFile } from '../util';

const MAP_ENUMS = ['Call', 'Event', 'Error'];

const generateLookupDefs = Handlebars.compile(readTemplate('lookupDefs'));

function generateTypeName (id: SiLookupTypeId, path: SiPath): string | null {
  if (!path.length) {
    return null;
  }

  const parts = path.map((p) => stringUpperFirst(stringCamelCase(p)));

  if (parts.length >= 2 && parts[parts.length - 1] === parts[parts.length - 2]) {
    parts.pop();
  }

  return `${parts.join('')}: 'Lookup${id.toString()}'`;
}

function generateLookup (meta: Metadata, destDir: string): void {
  const { lookup } = meta.asLatest;

  writeFile(`${destDir}/definitions.ts`, (): string => {
    const filtered = lookup.types.filter(({ type: { path } }) =>
      !(
        path.length === 2 &&
        (
          path[0].toString() === 'node_runtime' ||
          path[0].toString().startsWith('pallet_')
        ) &&
        MAP_ENUMS.includes(path[1].toString())
      ) &&
      !(
        path.length === 3 &&
        path[1].toString() === 'pallet' &&
        MAP_ENUMS.includes(path[2].toString())
      )
    );

    const max = filtered.length - 1;
    const defs = filtered.map(({ id, type: { path } }, index) => {
      const typeName = generateTypeName(id, path);

      return {
        defs: [
          `Lookup${id.toString()}: {}${typeName || index !== max ? ',' : ''}`,
          typeName && `${typeName}${index !== max ? ',' : ''}`
        ].filter((d) => !!d),
        docs: path.length
          ? [path.map((p) => p.toString()).join('::')]
          : []
      };
    });

    return generateLookupDefs({
      defs
    });
  });
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types/src/augment/lookup', data?: string): void {
  const { metadata } = initMeta(data, {});

  return generateLookup(metadata, destDir);
}
