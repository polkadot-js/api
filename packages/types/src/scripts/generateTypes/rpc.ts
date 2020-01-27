// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';

import interfaces from '../../../../type-jsonrpc/src';
import * as definitions from '../../interfaces/definitions';
import { TypeRegistry } from '../../codec/create';
import { createImportCode, createImports, FOOTER, getSimilarTypes, HEADER, setImports } from '../util';

// Generate `packages/rpc-core/jsonrpc.types.ts`
/** @internal */
export default function generateRpcTypes (): void {
  console.log('Writing packages/rpc-core/jsonrpc.types.ts');

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
          return '    getStorage<T = Codec>(key: any, block?: Hash | Uint8Array | string): Observable<T>;';
        } else if (method.method === 'subscribeStorage') {
          return '    subscribeStorage<T = Codec[]>(keys: any[]): Observable<T>;';
        }
      }

      const args = method.params.map((param): string => {
        const similarTypes = getSimilarTypes(definitions, registry, param.type, imports);
        setImports(definitions, imports, [param.type, ...similarTypes]);

        return `${param.name}${param.isOptional ? '?' : ''}: ${similarTypes.join(' | ')}`;
      });

      return `    ${method.method}(${args.join(', ')}): Observable<${method.type}>;`;
    });

    return allSections.concat(
      [
        `  ${section}: {`,
        ...allMethods,
        '  };'
      ].join('\n')
    );
  }, []).join('\n');

  const header = createImportCode(HEADER, [
    {
      file: 'rxjs',
      types: ['Observable']
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
      file: `@polkadot/types/interfaces/${moduleName}`,
      types: Object.keys(imports.localTypes[moduleName])
    })),
    {
      file: '@polkadot/types/types',
      types: Object.keys(imports.typesTypes)
    }
  ]);
  const interfaceStart = 'export interface RpcInterface {\n';
  const interfaceEnd = '\n}';

  fs.writeFileSync(
    'packages/rpc-core/src/jsonrpc.types.ts',
    header.concat(interfaceStart).concat(body).concat(interfaceEnd).concat(FOOTER)
    , { flag: 'w' }
  );
}
