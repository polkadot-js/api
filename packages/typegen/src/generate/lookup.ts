// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SiLookupTypeId, SiPath, SiTypeParameter } from '@polkadot/types/interfaces/scaleInfo';
import type { Metadata } from '@polkadot/types/metadata/Metadata';

import Handlebars from 'handlebars';

import { Registry, TypeDefInfo } from '@polkadot/types/types';
import { stringCamelCase, stringUpperFirst } from '@polkadot/util';

import { initMeta, readTemplate, writeFile } from '../util';

const MAP_ENUMS = ['Call', 'Event', 'Error', 'RawEvent'];

const generateLookupDefs = Handlebars.compile(readTemplate('lookupDefs'));

function generateTypeName (id: SiLookupTypeId, path: SiPath, extra: string): string[] | null {
  if (!path.length) {
    return null;
  }

  const parts = path.map((p) => stringUpperFirst(stringCamelCase(p)));

  if (parts.length >= 2 && parts[parts.length - 1] === parts[parts.length - 2]) {
    parts.pop();
  }

  const typeName = parts.join('');

  return ['BTreeMap', 'Option'].includes(typeName) || ['frame_support'].includes(path[0].toString())
    ? null
    : [typeName, `'Lookup${id.toString()}'${extra}`];
}

function generateParamType (registry: Registry, { name, type }: SiTypeParameter): string {
  if (type.isSome) {
    const link = registry.lookup.types[type.unwrap().toNumber()];

    if (link.type.path.length) {
      return generateTypeDocs(registry, link.type.path, link.type.params);
    }
  }

  return name.toString();
}

function generateTypeDocs (registry: Registry, path: SiPath, params: SiTypeParameter[]): string {
  return `${path.map((p) => p.toString()).join('::')}${params.length ? `<${params.map((p) => generateParamType(registry, p)).join(', ')}>` : ''}`;
}

function generateLookup (meta: Metadata, destDir: string): void {
  const { lookup, registry } = meta.asLatest;

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
    const all = filtered.map(({ id, type: { params, path } }, index) => {
      const typeName = generateTypeName(id, path, index !== max ? ',' : '');
      const typeDef = lookup.getTypeDef(id);
      const def = typeDef.info === TypeDefInfo.Si || typeDef.isFromSi
        ? `'${typeDef.type}'`
        : '{}';

      return {
        defs: [
          [`Lookup${id.toString()}`, `${def}${typeName || index !== max ? ',' : ''}`],
          typeName
        ].filter((d): d is string[] => !!d),
        docs: path.length
          ? [generateTypeDocs(registry, path, params)]
          : []
      };
    });

    return generateLookupDefs({
      defs: all.map(({ defs, docs }, i) => ({
        defs: defs
          .filter(([n], count) =>
            count === 0
              ? true
              // ensure we don't already have one of these
              : !all.some(({ defs }, j) => i !== j && defs.map(([n]) => n).includes(n))
          )
          .map(([n, d]) => `${n}: ${d}`),
        docs
      }))
    });
  });
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types/src/augment/lookup', data?: string): void {
  const { metadata } = initMeta(data, {});

  return generateLookup(metadata, destDir);
}
