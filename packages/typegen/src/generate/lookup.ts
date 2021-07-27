// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry, PortableType, SiLookupTypeId, SiPath, SiTypeParameter } from '@polkadot/types/interfaces';
import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { TypeDef } from '@polkadot/types/types';

import Handlebars from 'handlebars';
import path from 'path';

import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import { Registry } from '@polkadot/types/types';
import { isString, stringify } from '@polkadot/util';

import { createImports, exportType, initMeta, readTemplate, writeFile } from '../util';
import { typeEncoders } from './tsDef';

const MAP_ENUMS = ['Call', 'Event', 'Error', 'RawEvent'];
const WITH_TYPEDEF = false;

const generateLookupDefsTmpl = Handlebars.compile(readTemplate('lookup/defs'));
const generateLookupIndexTmpl = Handlebars.compile(readTemplate('lookup/index'));
const generateLookupTypesTmpl = Handlebars.compile(readTemplate('lookup/types'));

function generateParamType (registry: Registry, { name, type }: SiTypeParameter): string {
  if (type.isSome) {
    const link = registry.lookup.types[type.unwrap().toNumber()];

    if (link.type.path.length) {
      return generateTypeDocs(registry, null, link.type.path, link.type.params);
    }
  }

  return name.toString();
}

function generateTypeDocs (registry: Registry, id: SiLookupTypeId | null, path: SiPath, params: SiTypeParameter[]): string {
  return `${id ? `${registry.createLookupType(id)}${path.length ? ': ' : ''}` : ''}${path.map((p) => p.toString()).join('::')}${params.length ? `<${params.map((p) => generateParamType(registry, p)).join(', ')}>` : ''}`;
}

function formatObject (lines: string[]): string[] {
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

function expandSet (parsed: Record<string, number>): string[] {
  return formatObject(
    Object.entries(parsed).reduce<string[]>((all, [k, v]) => {
      all.push(`${k}: ${v}`);

      return all;
    }, [])
  );
}

function expandObject (parsed: Record<string, string | Record<string, string>>): string[] {
  if (parsed._set) {
    return expandSet(parsed._set as unknown as Record<string, number>);
  }

  return formatObject(
    Object.entries(parsed).reduce<string[]>((all, [k, v]) => {
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
    }, [])
  );
}

function expandType (encoded: string): string[] {
  if (!encoded.startsWith('{')) {
    return [`'${encoded}'`];
  }

  return expandObject(JSON.parse(encoded) as Record<string, string | Record<string, string>>);
}

function expandDefToString ({ lookupNameRoot, type }: TypeDef): string {
  if (lookupNameRoot) {
    return `'${lookupNameRoot}'`;
  }

  const lines = expandType(type);
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

function getFilteredTypes (lookup: PortableRegistry): PortableType[] {
  return lookup.types.filter(({ id, type: { path } }) => {
    const typeDef = lookup.getTypeDef(id);

    return (
      // We actually only want those with lookupName set
      !!typeDef.lookupName &&
      !(
        path.length === 2 &&
        (
          (
            path[0].toString() === 'node_runtime' &&
            !['Call', 'Event'].includes(path[1].toString())
          ) ||
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
  });
}

function generateLookupDefs (meta: Metadata, destDir: string): void {
  const { lookup, registry } = meta.asLatest;

  writeFile(path.join(destDir, 'definitions.ts'), (): string => {
    const all = getFilteredTypes(lookup).map(({ id, type: { params, path } }) => {
      const typeDef = lookup.getTypeDef(id);
      const typeLookup = registry.createLookupType(id);
      const def = expandDefToString(typeDef);

      return {
        docs: [
          generateTypeDocs(registry, id, path, params),
          WITH_TYPEDEF
            ? `@typeDef ${stringify(typeDef)}`
            : null
        ].filter((d): d is string => !!d),
        type: { def, typeLookup, typeName: typeDef.lookupName }
      };
    });
    const max = all.length - 1;

    return generateLookupDefsTmpl({
      defs: all.map(({ docs, type }, i) => {
        const { def, typeLookup, typeName } = type;

        return {
          defs: [
            [typeName || typeLookup, `${def}${i !== max ? ',' : ''}`]
          ].map(([n, t]) => `${n}: ${t}`),
          docs
        };
      })
    });
  });
}

function generateLookupTypes (meta: Metadata, destDir: string): void {
  const { lookup, registry } = meta.asLatest;
  const imports = {
    ...createImports(
      { '@polkadot/types/interfaces': defaultDefinitions },
      { types: {} }
    ),
    interfaces: []
  };
  const items = getFilteredTypes(lookup).map(({ id }) => {
    const typeDef = lookup.getTypeDef(id);

    typeDef.name = typeDef.lookupName;

    return typeDef.lookupNameRoot && typeDef.lookupName
      ? exportType(typeDef.lookupIndex, typeDef.lookupName, typeDef.lookupNameRoot)
      : typeEncoders[typeDef.info](registry, imports.definitions, typeDef, imports);
  }).filter((t): t is string => !!t);

  writeFile(path.join(destDir, 'types.ts'), () => generateLookupTypesTmpl({
    headerType: 'defs',
    imports,
    items,
    types: [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ]
  }), true);
  writeFile(path.join(destDir, 'index.ts'), () => generateLookupIndexTmpl({ headerType: 'defs' }), true);
}

function generateLookup (meta: Metadata, destDir: string): void {
  generateLookupDefs(meta, destDir);
  generateLookupTypes(meta, destDir);
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types/src/augment/lookup', data?: string): void {
  const { metadata } = initMeta(data, {});

  return generateLookup(metadata, destDir);
}
