// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import interfaces from '@polkadot/jsonrpc';
import * as definitions from '../../interfaces/definitions';
import { TypeRegistry } from '../../create';
import { FOOTER, HEADER, createDocComments, createImportCode, createImports, getSimilarTypes, setImports, writeFile, indent } from '../util';

/** @internal */
export default function generateRpcTypes (dest = 'packages/api/src/types/augment/rpc.ts'): void {
  writeFile(dest, (): string => {
    const registry = new TypeRegistry();
    const imports = createImports({ '@polkadot/types/interfaces': definitions });
    const body = Object.keys(interfaces).sort().reduce<string[]>((allSections, section): string[] => {
      const allMethods = Object.keys(interfaces[section].methods).sort().map((key): string => {
        const method = interfaces[section].methods[key];

        setImports(definitions, imports, [method.type]);

        // FIXME These 2 are too hard to type, I give up
        if (section === 'state') {
          if (method.method === 'getStorage') {
            setImports(definitions, imports, ['Codec']);
            return '      getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;';
          } else if (method.method === 'subscribeStorage') {
            return '      subscribeStorage<T = Codec[]>(keys: any[]): Observable<T>;';
          }
        }

        const args = method.params.map((param): string => {
          const similarTypes = getSimilarTypes(definitions, registry, param.type, imports);
          setImports(definitions, imports, [param.type, ...similarTypes]);

          return `${param.name}${param.isOptional ? '?' : ''}: ${similarTypes.join(' | ')}`;
        });

        return createDocComments(6, [method.description]) + indent(6)(`${method.method}(${args.join(', ')}): Observable<${method.type}>;`);
      });

      return allSections.concat(
        [
          `    ${section}: {`,
          ...allMethods,
          '    };'
        ].join('\n')
      );
    }, []).join('\n');

    const header = createImportCode(HEADER, imports, [
      ...Object.keys(imports.localTypes).map((moduleName): { file: string; types: string[] } => ({
        file: `@polkadot/types/interfaces/${moduleName}`,
        types: Object.keys(imports.localTypes[moduleName])
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
