// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Handlebars from 'handlebars';

import { TypeRegistry } from '@polkadot/types/create';
import { Definitions } from '@polkadot/types/types';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';

import { createImports, getSimilarTypes, formatType, readTemplate, setImports, writeFile } from '../util';

const StorageKeyTye = 'StorageKey | string | Uint8Array | any';

const template = readTemplate('rpc');
const generateRpcTypesTemplate = Handlebars.compile(template);

/** @internal */
export function generateRpcTypes (importDefinitions: { [importPath: string]: Record<string, Definitions> }, dest: string): void {
  writeFile(dest, (): string => {
    const registry = new TypeRegistry();

    const imports = createImports(importDefinitions);
    const definitions = imports.definitions as Record<string, Definitions>;

    const allDefs = Object.entries(importDefinitions).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});

    const rpcKeys = Object
      .keys(definitions)
      .filter((key) => Object.keys(definitions[key].rpc || {}).length !== 0)
      .sort();

    const modules = rpcKeys.map((sectionFullName) => {
      const rpc = definitions[sectionFullName].rpc;
      const section = sectionFullName.split('/').pop();

      const allMethods = Object.keys(rpc).sort().map((methodName) => {
        const def = rpc[methodName];

        let args;
        let type;
        let generic;

        // These are too hard to type with generics, do manual overrides
        if (section === 'state') {
          setImports(allDefs, imports, ['Codec', 'Hash', 'StorageKey', 'Vec']);

          if (methodName === 'getStorage') {
            generic = 'T = Codec';
            args = [`key: ${StorageKeyTye}, block?: Hash | Uint8Array | string`];
            type = 'T';
          } else if (methodName === 'queryStorage') {
            generic = 'T = Codec[]';
            args = [`keys: Vec<StorageKey> | (${StorageKeyTye})[], fromBlock?: Hash | Uint8Array | string, toBlock?: Hash | Uint8Array | string`];
            type = '[Hash, T][]';
          } else if (methodName === 'queryStorageAt') {
            generic = 'T = Codec[]';
            args = [`keys: Vec<StorageKey> | (${StorageKeyTye})[], at?: Hash | Uint8Array | string`];
            type = 'T';
          } else if (methodName === 'subscribeStorage') {
            generic = 'T = Codec[]';
            args = [`keys?: Vec<StorageKey> | (${StorageKeyTye})[]`];
            type = 'T';
          }
        }

        if (args === undefined) {
          setImports(allDefs, imports, [def.type]);

          args = def.params.map((param) => {
            const similarTypes = getSimilarTypes(definitions, registry, param.type, imports);

            setImports(allDefs, imports, [param.type, ...similarTypes]);

            return `${param.name}${param.isOptional ? '?' : ''}: ${similarTypes.join(' | ')}`;
          });

          type = formatType(allDefs, def.type, imports);
          generic = '';
        }

        return {
          args: args.join(', '),
          docs: [def.description],
          generic,
          name: methodName,
          type
        };
      });

      return {
        items: allMethods,
        name: section
      };
    });

    imports.typesTypes.Observable = true;

    const types = [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ];

    return generateRpcTypesTemplate({
      headerType: 'chain',
      imports,
      modules,
      types
    });
  });
}

export default function generateDefaultRpcTypes (): void {
  generateRpcTypes(
    { '@polkadot/types/interfaces': defaultDefinitions },
    'packages/api/src/augment/rpc.ts'
  );
}
