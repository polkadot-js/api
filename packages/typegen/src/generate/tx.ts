// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import staticData from '@polkadot/metadata/Metadata/static';
import Metadata from '@polkadot/metadata/Metadata';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { Text } from '@polkadot/types/primitive';
import { TypeRegistry } from '@polkadot/types/create';
import { stringCamelCase } from '@polkadot/util';

import { FOOTER, HEADER, TypeImports, createDocComments, createImportCode, createImports, formatType, getSimilarTypes, indent, registerDefinitions, setImports, writeFile } from '../util';

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
function generateModule (registry: Registry, allDefs: object, { calls, name }: ModuleMetadataLatest, imports: TypeImports, isStrict: boolean): string[] {
  const allCalls = calls.unwrapOr(null);

  if (!allCalls?.length) {
    return [];
  }

  setImports(allDefs, imports, ['Call', 'Extrinsic', 'SubmittableExtrinsic']);

  return [indent(4)(`${stringCamelCase(name.toString())}: {`)]
    .concat(isStrict ? '' : indent(6)('[index: string]: SubmittableExtrinsicFunction<ApiType>;'))
    .concat(allCalls.sort((a, b) => a.name.localeCompare(b.name.toString())).map(({ args, documentation, name }): string => {
      const params = args
        .map(({ name, type }): [string, string, string] => {
          const typeStr = type.toString();
          const similarTypes = getSimilarTypes(allDefs, registry, typeStr, imports).map((type): string => formatType(allDefs, type, imports));
          const nameStr = mapName(name);

          setImports(allDefs, imports, [...similarTypes.filter((type): boolean => !type.startsWith('(') && !type.startsWith('{')), typeStr]);

          return [`${nameStr}: ${similarTypes.join(' | ')}`, nameStr, typeStr];
        })
        .map(([full]): string => full)
        .join(', ');

      return createDocComments(6, documentation) +
      indent(6)(`${stringCamelCase(name.toString())}: AugmentedSubmittable<(${params}) => SubmittableExtrinsic<ApiType>>;`);
    }))
    .concat([indent(4)('};')]);
}

/** @internal */
function generateForMeta (registry: Registry, meta: Metadata, dest: string, extraTypes: Record<string, Record<string, { types: Record<string, any> }>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, { types: Record<string, any> }>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const body = meta.asLatest.modules.sort((a, b) => a.name.localeCompare(b.name.toString())).reduce((acc, mod): string[] => {
      return acc.concat(generateModule(registry, allDefs, mod, imports, isStrict));
    }, [] as string[]);
    const header = createImportCode(HEADER('chain'), imports, [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      })),
      {
        file: '@polkadot/api/types',
        types: ['ApiTypes', 'SubmittableExtrinsic']
      }
    ]);
    const interfaceStart = [
      "declare module '@polkadot/api/types/submittable' {",
      indent(2)('export interface AugmentedSubmittables<ApiType> {\n')
    ].join('\n');
    const interfaceEnd = `\n${indent(2)('}')}\n\n`;
    const submittableExtrinsicsInterface = indent(2)('export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {')
      .concat('\n')
      .concat(indent(4)('(extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;\n'))
      .concat(isStrict ? '' : indent(4)('[index: string]: SubmittableModuleExtrinsics<ApiType>;\n'))
      .concat(indent(2)('}\n'));

    return header
      .concat(interfaceStart)
      .concat(body.join('\n'))
      .concat(interfaceEnd)
      .concat(submittableExtrinsicsInterface)
      .concat('}')
      .concat(FOOTER);
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateTx (dest = 'packages/api/src/augment/tx.ts', data = staticData, extraTypes: Record<string, Record<string, { types: Record<string, any> }>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  return generateForMeta(registry, new Metadata(registry, data), dest, extraTypes, isStrict);
}
