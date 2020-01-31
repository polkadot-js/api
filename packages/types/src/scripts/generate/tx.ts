// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest } from '../../interfaces/metadata';
import * as defaultDefs from '../../interfaces/definitions';
import { Registry } from '../../types';

import fs from 'fs';
import staticData from '@polkadot/metadata/Metadata/static';
import { Text } from '@polkadot/types';
import { stringCamelCase } from '@polkadot/util';

import { Metadata, TypeRegistry } from '../..';
import { FOOTER, HEADER, TypeImports, createImportCode, createImports, formatType, getSimilarTypes, indent, setImports } from '../util';

const MAPPED_NAMES: Record<string, string> = {
  new: 'updated'
};

function mapName (_name: Text): string {
  const name = stringCamelCase(_name.toString());

  return MAPPED_NAMES[name] || name;
}

// Generate types for one module
/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateModule (registry: Registry, allDefs: object, { calls, name }: ModuleMetadataLatest, imports: TypeImports): string[] {
  const allCalls = calls.unwrapOr(null);

  if (!allCalls?.length) {
    return [];
  }

  setImports(allDefs, imports, ['SubmittableExtrinsic']);

  return [indent(4)(`${stringCamelCase(name.toString())}: {`)]
    // .concat(indent(6)('[index: string]: Codec;'))
    .concat(allCalls.map(({ args, name }): string => {
      const params = args.map(({ name, type }): string => {
        const typeStr = type.toString();
        const similarTypes = getSimilarTypes(allDefs, registry, typeStr, imports).map((type): string =>
          type.startsWith('(')
            ? type
            : formatType(allDefs, type, imports)
        );

        setImports(allDefs, imports, [...similarTypes.filter((type): boolean => !type.startsWith('(')), typeStr]);

        return `${mapName(name)}: ${similarTypes.length ? similarTypes.join(' | ') : formatType(allDefs, typeStr, imports)}`;
      });

      return indent(6)(`${stringCamelCase(name.toString())}: (${params.join(', ')}) => SubmittableExtrinsic<ApiType>;`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, object>>): void {
  console.log(`${dest}\n\tGenerating`);

  const allTypes: Record<string, Record<string, object>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
  const imports = createImports(allTypes);
  const allDefs = Object.entries(allTypes).reduce((defs, [, obj]) => {
    return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [key]: value }), defs);
  }, {});
  const body = meta.asLatest.modules.reduce((acc, mod): string[] => {
    return acc.concat(generateModule(registry, allDefs, mod, imports));
  }, [] as string[]);
  const header = createImportCode(HEADER, [
    {
      file: '@polkadot/api/submittable/types',
      types: ['SubmittableExtrinsic']
    },
    {
      file: '@polkadot/types/codec',
      types: Object.keys(imports.codecTypes).filter((name): boolean => name !== 'Tuple')
    },
    {
      file: '@polkadot/types',
      types: Object.keys(imports.primitiveTypes)
    },
    ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
      file: `${imports.moduleToPackage[moduleName]}/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    })),
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    }
  ]);
  const interfaceStart = [
    "declare module '@polkadot/api/types/submittable' {",
    indent(2)('export interface AugmentedSubmittables<ApiType> {\n')
  ].join('\n');
  const interfaceEnd = `\n${indent(2)('}')}\n}`;

  console.log('\tWriting');

  fs.writeFileSync(
    dest,
    header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER)
    , { flag: 'w' }
  );

  console.log('');
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateTx (dest = 'packages/api/src/types/augment/tx.ts', data = staticData, extraTypes: Record<string, Record<string, object>> = {}): void {
  const registry = new TypeRegistry();

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes);
}
