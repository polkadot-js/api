// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import interfaces from '@polkadot/jsonrpc';
import * as definitions from '@polkadot/types/interfaces/definitions';
import { TypeRegistry } from '@polkadot/types/create';

import { FOOTER, HEADER, createDocComments, createImportCode, createImports, getSimilarTypes, setImports, writeFile, indent } from '../util';

const StorageKeyTye = 'StorageKey | string | Uint8Array | any';

/** @internal */
export default function generateRpcTypes (dest = 'packages/api/src/augment/rpc.ts'): void {
  writeFile(dest, (): string => {
    const registry = new TypeRegistry();
    const allTypes = { '@polkadot/types/interfaces': definitions };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const body = Object.keys(interfaces).sort().reduce<string[]>((allSections, section): string[] => {
      const allMethods = Object.keys(interfaces[section].methods).sort().map((key): string => {
        const method = interfaces[section].methods[key];

        // These are too hard to type with generics, do manual overrides
        if (section === 'state') {
          setImports(allDefs, imports, ['Codec', 'Hash', 'StorageKey', 'Vec']);

          if (method.method === 'getStorage') {
            return createDocComments(6, [method.description]) + indent(6)(`getStorage: AugmentedRpc<<T = Codec>(key: ${StorageKeyTye}, block?: Hash | Uint8Array | string) => Observable<T>>;`);
          } else if (method.method === 'queryStorage') {
            return createDocComments(6, [method.description]) + indent(6)(`queryStorage: AugmentedRpc<<T = Codec[]>(keys: Vec<StorageKey> | (${StorageKeyTye})[], fromBlock?: Hash | Uint8Array | string, toBlock?: Hash | Uint8Array | string) => Observable<[Hash, T][]>>;`);
          } else if (method.method === 'subscribeStorage') {
            return createDocComments(6, [method.description]) + indent(6)(`subscribeStorage: AugmentedRpc<<T = Codec[]>(keys: Vec<StorageKey> | (${StorageKeyTye})[]) => Observable<T>>;`);
          }
        }

        setImports(allDefs, imports, [method.type]);

        const args = method.params.map((param): string => {
          const similarTypes = getSimilarTypes(definitions, registry, param.type, imports);

          setImports(allDefs, imports, [param.type, ...similarTypes]);

          return `${param.name}${param.isOptional ? '?' : ''}: ${similarTypes.join(' | ')}`;
        });

        return createDocComments(6, [method.description]) + indent(6)(`${method.method}: AugmentedRpc<(${args.join(', ')}) => Observable<${method.type}>>;`);
      });

      return allSections.concat(
        [
          `    ${section}: {`,
          ...allMethods,
          '    };'
        ].join('\n')
      );
    }, []).join('\n');

    const header = createImportCode(HEADER('chain'), imports, [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      })),
      {
        file: 'rxjs',
        types: ['Observable']
      }
    ]);
    const interfaceStart = "declare module '@polkadot/rpc-core/types.jsonrpc' {\n  export interface RpcInterface {\n";
    const interfaceEnd = '\n  }\n}';

    return header
      .concat(interfaceStart)
      .concat(body)
      .concat(interfaceEnd)
      .concat(FOOTER);
  });
}
