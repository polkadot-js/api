// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest } from '@polkadot/types/interfaces/metadata';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';

import staticData from '@polkadot/metadata/Metadata/static';
import Metadata from '@polkadot/metadata/Metadata';
import { stringCamelCase } from '@polkadot/util';

import { TypeRegistry } from '@polkadot/types/create';
import { FOOTER, HEADER, TypeImports, createDocComments, createImportCode, createImports, indent, setImports, writeFile } from '../util';

// Generate types for one module
/** @internal */
function generateModule (allDefs: object, { constants, name }: ModuleMetadataLatest, imports: TypeImports, isStrict: boolean): string[] {
  if (!constants.length) {
    return [];
  }

  setImports(allDefs, imports, ['Codec']);

  return [indent(4)(`${stringCamelCase(name.toString())}: {`)]
    .concat(isStrict ? '' : indent(6)('[index: string]: Codec;'))
    .concat(constants.map(({ documentation, name, type }): string => {
      setImports(allDefs, imports, [type.toString()]);

      return createDocComments(6, documentation) +
        indent(6)(`${stringCamelCase(name.toString())}: AugmentedConst<${type}>;`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (meta: Metadata, dest: string, extraTypes: Record<string, Record<string, object>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, object>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [key]: value }), defs);
    }, {});
    const body = meta.asLatest.modules.reduce((acc, mod): string[] => {
      return acc.concat(generateModule(allDefs, mod, imports, isStrict));
    }, [] as string[]);
    const header = createImportCode(HEADER, imports, [
      ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
        file: `${imports.moduleToPackage[moduleName]}/${moduleName}`,
        types: Object.keys(imports.localTypes[moduleName])
      }))
    ]);
    const interfaceStart = [
      "declare module '@polkadot/metadata/Decorated/consts/types' {",
      indent(2)('export interface Constants {\n')
    ].join('\n');
    const interfaceEnd = `\n${indent(2)('}')}\n}`;

    return header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(FOOTER);
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateConsts (dest = 'packages/api/src/types/augment/consts.ts', data = staticData, extraTypes: Record<string, Record<string, object>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  return generateForMeta(new Metadata(registry, data), dest, extraTypes, isStrict);
}
