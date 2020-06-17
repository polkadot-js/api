// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Handlebars from 'handlebars';

import staticData from '@polkadot/metadata/Metadata/static';
import Metadata from '@polkadot/metadata/Metadata';
import { TypeRegistry } from '@polkadot/types/create';
import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import { stringCamelCase } from '@polkadot/util';

import { createImports, compareName, readTemplate, registerDefinitions, setImports, writeFile } from '../util';

const template = readTemplate('consts');
const generateForMetaTemplate = Handlebars.compile(template);

/** @internal */
function generateForMeta (meta: Metadata, dest: string, extraTypes: Record<string, Record<string, { types: Record<string, any> }>>, isStrict: boolean): void {
  writeFile(dest, (): string => {
    const allTypes: Record<string, Record<string, { types: Record<string, unknown> }>> = { '@polkadot/types/interfaces': defaultDefs, ...extraTypes };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});

    const modules = meta.asLatest.modules
      .sort(compareName)
      .filter((mod) => mod.constants.length > 0)
      .map(({ constants, name }) => {
        if (!isStrict) {
          setImports(allDefs, imports, ['Codec']);
        }

        const items = constants
          .sort(compareName)
          .map(({ documentation, name, type }) => {
            setImports(allDefs, imports, [type.toString()]);

            return {
              docs: documentation,
              name: stringCamelCase(name.toString()),
              type: type.toString()
            };
          });

        return {
          items,
          name: stringCamelCase(name.toString())
        };
      });

    const types = [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ];

    return generateForMetaTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types
    });
  });
}

// Call `generateForMeta()` with current static metadata
/** @internal */
export default function generateConsts (dest = 'packages/api/src/augment/consts.ts', data = staticData, extraTypes: Record<string, Record<string, { types: Record<string, any> }>> = {}, isStrict = false): void {
  const registry = new TypeRegistry();

  registerDefinitions(registry, extraTypes);

  return generateForMeta(new Metadata(registry, data), dest, extraTypes, isStrict);
}
