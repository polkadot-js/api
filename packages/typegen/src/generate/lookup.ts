// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableType, SiLookupTypeId, SiPath, SiTypeParameter } from '@polkadot/types/interfaces';
import type { PortableRegistry } from '@polkadot/types/metadata';
import type { TypeDef } from '@polkadot/types-create/types';
import type { HexString } from '@polkadot/util/types';

import Handlebars from 'handlebars';
import path from 'path';

import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import { Registry } from '@polkadot/types/types';
import staticKusama from '@polkadot/types-support/metadata/static-kusama';
import staticPolkadot from '@polkadot/types-support/metadata/static-polkadot';
import staticSubstrate from '@polkadot/types-support/metadata/static-substrate';
import { isString, stringify } from '@polkadot/util';

import { createImports, exportType, initMeta, readTemplate, writeFile } from '../util';
import { typeEncoders } from './tsDef';

const WITH_TYPEDEF = false;

const generateLookupDefsTmpl = Handlebars.compile(readTemplate('lookup/defs'));
const generateLookupDefsNamedTmpl = Handlebars.compile(readTemplate('lookup/defs-named'));
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
      (l.endsWith(',') || l.endsWith('{') || index === max || lines[index + 1].endsWith('}') || lines[index + 1].endsWith('}'))
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

function expandDefToString ({ lookupNameRoot, type }: TypeDef, indent: number): string {
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
        : `${' '.padStart(indent + inc)}${l}`;
      inc += 2;
    } else {
      if (l.endsWith('},') || l.endsWith('}')) {
        inc -= 2;
      }

      r = index === 0
        ? l
        : `${' '.padStart(indent + inc)}${l}`;
    }

    return r;
  }).join('\n');
}

function getFilteredTypes (lookup: PortableRegistry, exclude: string[] = []): [PortableType, TypeDef][] {
  const named = lookup.types.filter(({ id }) => !!lookup.getTypeDef(id).lookupName);
  const names = named.map(({ id }) => lookup.getName(id));

  return named
    .filter((_, index) =>
      !names.some((n, iindex) =>
        index > iindex &&
        n === names[index]
      )
    )
    .map((p): [PortableType, TypeDef] => [p, lookup.getTypeDef(p.id)])
    .filter(([, typeDef]) => !exclude.includes(typeDef.lookupName || '<invalid>'));
}

function generateLookupDefs (registry: Registry, filtered: [PortableType, TypeDef][], destDir: string, subPath?: string): void {
  writeFile(path.join(destDir, `${subPath || 'definitions'}.ts`), (): string => {
    const all = filtered.map(([{ id, type: { params, path } }, typeDef]) => {
      const typeLookup = registry.createLookupType(id);
      const def = expandDefToString(typeDef, subPath ? 2 : 4);

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

    return (subPath ? generateLookupDefsNamedTmpl : generateLookupDefsTmpl)({
      defs: all.map(({ docs, type }, i) => {
        const { def, typeLookup, typeName } = type;

        return {
          defs: [
            [typeName || typeLookup, `${def}${i !== max ? ',' : ''}`]
          ].map(([n, t]) => `${n}: ${t}`),
          docs
        };
      }),
      headerType: 'defs'
    });
  });
}

function generateLookupTypes (registry: Registry, filtered: [PortableType, TypeDef][], destDir: string, subPath?: string): void {
  const imports = {
    ...createImports(
      { '@polkadot/types/interfaces': defaultDefinitions },
      { types: {} }
    ),
    interfaces: []
  };
  const items = filtered.map(([, typeDef]) => {
    typeDef.name = typeDef.lookupName;

    return typeDef.lookupNameRoot && typeDef.lookupName
      ? exportType(typeDef.lookupIndex, typeDef.lookupName, typeDef.lookupNameRoot)
      : typeEncoders[typeDef.info](registry, imports.definitions, typeDef, imports);
  }).filter((t): t is string => !!t);

  writeFile(path.join(destDir, `types${subPath ? `-${subPath}` : ''}.ts`), () => generateLookupTypesTmpl({
    headerType: 'defs',
    imports,
    items: items.map((l) =>
      l
        .split('\n')
        .map((l) => l.length ? `  ${l}` : '')
        .join('\n')
    ),
    types: [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ]
  }), true);
  writeFile(path.join(destDir, 'index.ts'), () => generateLookupIndexTmpl({ headerType: 'defs' }), true);
}

function generateLookup (destDir: string, entries: [string | undefined, HexString][]): void {
  entries.reduce<string[]>((exclude, [subPath, staticMeta]): string[] => {
    const { lookup, registry } = initMeta(staticMeta).metadata.asLatest;
    const filtered = getFilteredTypes(lookup, exclude);

    generateLookupDefs(registry as Registry, filtered, destDir, subPath);
    generateLookupTypes(registry as Registry, filtered, destDir, subPath);

    return exclude.concat(
      ...filtered
        .map(([, typeDef]) => typeDef.lookupName)
        .filter((n): n is string => !!n)
    );
  }, []);
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types-augment-lookup/src/augment', staticData?: HexString): void {
  generateLookup(
    destDir,
    staticData
      ? [['lookup', staticData]]
      : [
        ['substrate', staticSubstrate],
        ['polkadot', staticPolkadot],
        ['kusama', staticKusama]
      ]
  );
}
