// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionCallNamed } from '@polkadot/api-base/types';
import type { TypeRegistry } from '@polkadot/types/create';
import type { Definitions } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { objectSpread, stringCamelCase } from '@polkadot/util';

import { createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, writeFile } from '../util';

const generateCallsTypesTemplate = Handlebars.compile(readTemplate('calls'));

/** @internal */
function getDefs (defs: Record<string, Definitions>): Record<string, Record<string, DefinitionCallNamed>> {
  const named: Record<string, Record<string, DefinitionCallNamed>> = {};
  const all = Object.values(defs);

  for (let j = 0; j < all.length; j++) {
    const set = all[j].runtime;

    if (set) {
      const sections = Object.entries(set);

      for (let i = 0; i < sections.length; i++) {
        const [_section, sec] = sections[i];
        const methods = Object.entries(sec[0].methods);

        if (methods.length) {
          const section = stringCamelCase(_section);

          if (!named[section]) {
            named[section] = {};
          }

          for (let m = 0; m < methods.length; m++) {
            const [_method, def] = methods[m];
            const method = stringCamelCase(_method);

            named[section][method] = objectSpread({ method, name: `${_section}_${method}`, section }, def);
          }
        }
      }
    }
  }

  return named;
}

/** @internal */
export function generateCallTypes (registry: TypeRegistry, dest: string, extraTypes: ExtraTypes, isStrict: boolean, customLookupDefinitions?: Definitions): void {
  writeFile(dest, (): string => {
    const allTypes: ExtraTypes = {
      '@polkadot/types-augment': {
        lookup: {
          ...lookupDefinitions,
          ...customLookupDefinitions
        }
      },
      '@polkadot/types/interfaces': defaultDefs,
      ...extraTypes
    };
    const imports = createImports(allTypes);
    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const definitions = getDefs(imports.definitions as Record<string, Definitions>);
    const callKeys = Object.keys(definitions);

    const modules = callKeys.map((section) => {
      const calls = definitions[section];

      const allMethods = Object.keys(calls).sort().map((methodName) => {
        const def = calls[methodName];

        setImports(allDefs, imports, [def.type]);

        const args = def.params.map((param) => {
          const similarTypes = getSimilarTypes(registry, imports.definitions, param.type, imports);

          setImports(allDefs, imports, [param.type, ...similarTypes]);

          return `${param.name}: ${similarTypes.join(' | ')}`;
        });

        return {
          args: args.join(', '),
          docs: [def.description],
          name: methodName,
          type: formatType(registry, allDefs, def.type, imports)
        };
      }).sort((a, b) => a.name.localeCompare(b.name));

      return {
        items: allMethods,
        name: section || 'unknown'
      };
    }).sort((a, b) => a.name.localeCompare(b.name));

    imports.typesTypes.Observable = true;

    return generateCallsTypesTemplate({
      headerType: 'chain',
      imports,
      isStrict,
      modules,
      types: [
        ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
          file: packagePath.replace('@polkadot/types-augment', '@polkadot/types'),
          types: Object.keys(imports.localTypes[packagePath])
        })),
        {
          file: '@polkadot/api-base/types',
          types: ['ApiTypes']
        }
      ]
    });
  });
}

export function generateDefaultCalls (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false, customLookupDefinitions?: Definitions): void {
  const { registry } = initMeta(data, extraTypes);

  generateCallTypes(
    registry,
    dest,
    extraTypes,
    isStrict,
    customLookupDefinitions
  );
}
