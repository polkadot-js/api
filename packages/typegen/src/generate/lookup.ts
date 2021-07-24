// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SiPath, SiTypeParameter } from '@polkadot/types/interfaces/scaleInfo';
import type { Metadata } from '@polkadot/types/metadata/Metadata';

import Handlebars from 'handlebars';

import { Registry } from '@polkadot/types/types';
import { isString, stringify } from '@polkadot/util';

import { initMeta, readTemplate, writeFile } from '../util';

const MAP_ENUMS = ['Call', 'Event', 'Error', 'RawEvent'];
const WITH_TYPEDEF = false;

const generateLookupDefs = Handlebars.compile(readTemplate('lookupDefs'));

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

function expandObject (parsed: Record<string, string | Record<string, string>>): string[] {
  const lines = Object.entries(parsed).reduce<string[]>((all, [k, v]) => {
    const inner = isString(v)
      ? expandType(v)
      : Array.isArray(v)
        ? [`[${(v as string[]).map((e) => `'${e}'`).join(', ')}]`]
        : expandObject(v);

    inner.forEach((l, index): void => {
      all.push(`${
        index === 0
          ? `${k}: ${l}`
          : `${l}`
      }`);
    });

    return all;
  }, []);
  const max = lines.length - 1;

  return [
    '{',
    ...lines.map((l, index) =>
      (l.endsWith(',') || l.endsWith('{') || index === max)
        ? l
        : `${l},`
    ),
    '}'
  ];
}

function expandType (encoded: string): string[] {
  if (!encoded.startsWith('{')) {
    return [`'${encoded}'`];
  }

  return expandObject(JSON.parse(encoded) as Record<string, string | Record<string, string>>);
}

function expandTypeToString (encoded: string): string {
  const lines = expandType(encoded);
  let inc = 0;

  return lines.map((l, index) => {
    let r: string;

    if (l.endsWith('{')) {
      r = index === 0
        ? l
        : `${' '.padStart(4 + inc)}${l}`;
      inc += 2;
    } else {
      if (l.endsWith('},') || l.endsWith('}')) {
        inc -= 2;
      }

      r = index === 0
        ? l
        : `${' '.padStart(4 + inc)}${l}`;
    }

    return r;
  }).join('\n');
}

function generateLookup (meta: Metadata, destDir: string): void {
  const { lookup, registry } = meta.asLatest;

  writeFile(`${destDir}/definitions.ts`, (): string => {
    lookup.types.forEach(({ id }) => registry.lookup.getTypeDef(id));

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
      const typeDef = registry.lookup.getTypeDef(id);
      const typeLookup = registry.createLookupType(id);
      const typeName = typeDef.lookupName;
      const def = expandTypeToString(typeDef.type);

      return {
        docs: [
          path.length
            ? generateTypeDocs(registry, path, params)
            : null,
          WITH_TYPEDEF
            ? `@typeDef ${stringify(typeDef)}`
            : null
        ].filter((d): d is string => !!d),
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

  // initially
  process.exit(1);
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types/src/augment/lookup', data?: string): void {
  const { metadata } = initMeta(data, {});

  return generateLookup(metadata, destDir);
}
