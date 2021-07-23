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

function generateTypeName (path: SiPath): string | null {
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
    : typeName;
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

function generateDefinition (registry: Registry, id: SiLookupTypeId): string {
  const { info, isFromSi, type } = registry.lookup.getTypeDef(id);

  if ([TypeDefInfo.Null, TypeDefInfo.Option, TypeDefInfo.Plain, TypeDefInfo.Si].includes(info) || isFromSi) {
    return `'${type}'`;
  }

  return `{ /* TODO: ${info} */ }`;
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

    const all = filtered.map(({ id, type: { params, path } }) => {
      const typeName = generateTypeName(path);
      const typeLookup = `Lookup${id.toString()}`;
      const def = generateDefinition(registry, id);

      return {
        docs: path.length
          ? [generateTypeDocs(registry, path, params)]
          : [],
        type: { def, typeLookup, typeName }
      };
    });
    const max = all.length - 1;

    return generateLookupDefs({
      defs: all.map(({ docs, type }, i) => {
        const { def, typeLookup, typeName } = type;
        const hasConflict = !!typeName && all.some(({ type }, j) => i !== j && type.typeName === typeName);

        return {
          defs: (
            (!typeName || (i !== 0 && hasConflict))
              ? [[typeLookup, `${def}${i !== max ? ',' : ''}`]]
              : [
                [typeName, `${def},`],
                [typeLookup, `'${typeName}'${i !== max ? ',' : ''}`]
              ]
          ).map(([n, t]) => `${n}: ${t}`),
          docs
        };
      })
    });
  });
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types/src/augment/lookup', data?: string): void {
  const { metadata } = initMeta(data, {});

  return generateLookup(metadata, destDir);
}
