// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest } from '../../interfaces/metadata';
import * as defaultDefs from '../../interfaces/definitions';

import fs from 'fs';
import staticData from '@polkadot/metadata/Metadata/static';
import { stringCamelCase } from '@polkadot/util';

import { Metadata, TypeRegistry } from '../..';
import { createDocComments, createImportCode, createImports, FOOTER, HEADER, indent, setImports, TypeImports } from '../util';

// Generate types for one module
/** @internal */
function generateModule (allDefs: object, { constants, name }: ModuleMetadataLatest, imports: TypeImports): string[] {
  if (!constants.length) {
    return [];
  }

  setImports(allDefs, imports, ['Codec']);

  return [indent(4)(`${stringCamelCase(name.toString())}: {`)]
    .concat(indent(6)('[index: string]: Codec;'))
    .concat(constants.map(({ documentation, name, type }): string => {
      setImports(allDefs, imports, [type.toString()]);

      return createDocComments(documentation).map((d): string => indent(6)(d)).join('\n') +
        indent(6)(`${stringCamelCase(name.toString())}: AugmentedConst<${type}>;`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (meta: Metadata, dest: string, extraTypes: Record<string, Record<string, object>>): void {
  console.log(`${dest}\n\tGenerating`);

  const allTypes: Record<string, Record<string, object>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
  const imports = createImports(allTypes);
  const allDefs = Object.entries(allTypes).reduce((defs, [, obj]) => {
    return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [key]: value }), defs);
  }, {});
  const body = meta.asLatest.modules.reduce((acc, mod): string[] => {
    return acc.concat(generateModule(allDefs, mod, imports));
  }, [] as string[]);
  const header = createImportCode(HEADER, [
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
    "declare module '@polkadot/metadata/Decorated/types' {",
    indent(2)('export interface Constants {\n')
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
export default function generateConsts (dest = 'packages/api/src/types/augment/consts.ts', data = staticData, extraTypes: Record<string, Record<string, object>> = {}): void {
  const registry = new TypeRegistry();

  return generateForMeta(new Metadata(registry, data), dest, extraTypes);
}
