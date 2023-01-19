// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Metadata } from '@polkadot/types/metadata/Metadata';
import type { DefinitionCallNamed, Definitions } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtraTypes } from './types';

import Handlebars from 'handlebars';

import * as defaultDefs from '@polkadot/types/interfaces/definitions';
import lookupDefinitions from '@polkadot/types-augment/lookup/definitions';
import { objectSpread, stringCamelCase } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';

import { createImports, formatType, getSimilarTypes, initMeta, readTemplate, setImports, writeFile } from '../util';

type Apis = [HexString, number][];

const generateCallsTypesTemplate = Handlebars.compile(readTemplate('calls'));

/** @internal */
function getDefs (apis: Apis | null, defs: Record<string, Definitions>): Record<string, Record<string, DefinitionCallNamed>> {
  const named: Record<string, Record<string, DefinitionCallNamed>> = {};
  const all = Object.values(defs);

  for (let j = 0; j < all.length; j++) {
    const set = all[j].runtime;

    if (set) {
      const sections = Object.entries(set);

      for (let i = 0; i < sections.length; i++) {
        const [_section, sec] = sections[i];
        const sectionHash = blake2AsHex(_section, 64);
        const api = apis && apis.find(([h]) => h === sectionHash);

        if (api) {
          const ver = sec.find(({ version }) => version === api[1]);

          if (ver) {
            const methods = Object.entries(ver.methods);

            if (methods.length) {
              const section = stringCamelCase(_section);

              if (!named[section]) {
                named[section] = {};
              }

              for (let m = 0; m < methods.length; m++) {
                const [_method, def] = methods[m];
                const method = stringCamelCase(_method);

                named[section][method] = objectSpread({ method, name: `${_section}_${method}`, section, sectionHash, version: ver.version }, def);
              }
            }
          } else {
            console.warn(`Unable to find matching version for runtime ${_section}, expected ${api[1]}`);
          }
        }
      }
    }
  }

  return named;
}

/** @internal */
export function generateCallTypes (meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean, customLookupDefinitions?: Definitions): void {
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

    // find the system.Version in metadata
    let apis: Apis | null = null;
    const { $registry: registry, pallets } = meta.asLatest;
    const sysp = pallets.find(({ name }) => name.eq('System'));

    if (sysp) {
      const verc = sysp.constants.find(({ name }) => name.eq('Version'));

      if (verc) {
        apis = registry.createType('RuntimeVersion', verc.value).apis.map(([k, v]): [HexString, number] => [k.toHex(), v.toNumber()]);
      } else {
        console.error('Unable to find System.Version pallet, skipping API extraction');
      }
    } else {
      console.error('Unable to find System pallet, skipping API extraction');
    }

    const allDefs = Object.entries(allTypes).reduce((defs, [path, obj]) => {
      return Object.entries(obj).reduce((defs, [key, value]) => ({ ...defs, [`${path}/${key}`]: value }), defs);
    }, {});
    const definitions = getDefs(apis, imports.definitions as Record<string, Definitions>);
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
          sectionHash: def.sectionHash,
          sectionName: def.section,
          sectionVersion: def.version,
          type: formatType(registry, allDefs, def.type, imports)
        };
      }).sort((a, b) => a.name.localeCompare(b.name));

      return {
        items: allMethods,
        name: section || 'unknown',
        sectionHash: allMethods.length && allMethods[0].sectionHash,
        sectionName: allMethods.length && allMethods[0].sectionName,
        sectionVersion: allMethods.length && allMethods[0].sectionVersion
      };
    }).filter(({ items }) => items.length).sort((a, b) => a.name.localeCompare(b.name));

    if (modules.length) {
      imports.typesTypes.Observable = true;
    }

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
          types: ['ApiTypes', 'AugmentedCall', 'DecoratedCallBase']
        }
      ]
    });
  });
}

export function generateDefaultCalls (dest: string, data: HexString, extraTypes: ExtraTypes = {}, isStrict = false, customLookupDefinitions?: Definitions): void {
  const { metadata } = initMeta(data, extraTypes);

  generateCallTypes(
    metadata,
    dest,
    extraTypes,
    isStrict,
    customLookupDefinitions
  );
}
