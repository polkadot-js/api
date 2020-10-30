// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Handlebars from 'handlebars';

import Json from '@polkadot/types/codec/Json';
import Raw from '@polkadot/types/codec/Raw';
import { TypeRegistry } from '@polkadot/types/create';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import * as defaultPrimitives from '@polkadot/types/primitive';

import { createImports, getDerivedTypes, readTemplate, setImports, writeFile } from '../util';
import { ModuleTypes } from '../util/imports';

const primitiveClasses = {
  ...defaultPrimitives,
  Json,
  Raw
};

const template = readTemplate('interfaceRegistry');
const generateInterfaceTypesTemplate = Handlebars.compile(template);

/** @internal */
export function generateInterfaceTypes (importDefinitions: { [importPath: string]: Record<string, ModuleTypes> }, dest: string): void {
  const registry = new TypeRegistry();

  writeFile(dest, (): string => {
    Object.entries(importDefinitions).reduce((acc, def) => Object.assign(acc, def), {});

    const imports = createImports(importDefinitions);
    const definitions = imports.definitions;
    const items: string[] = [];

    // first we create imports for our known classes from the API
    Object
      .keys(primitiveClasses)
      .filter((name) => !name.includes('Generic'))
      .forEach((primitiveName) => {
        setImports(definitions, imports, [primitiveName]);

        items.push(...getDerivedTypes(registry, definitions, primitiveName, primitiveName, imports));
      });

    const existingTypes: Record<string, boolean> = {};

    // ensure we have everything registered since we will get the definition
    // form the available types (so any unknown should show after this)
    Object.values(definitions).forEach(({ types }) => {
      registry.register(types as Record<string, string>);
    });

    // create imports for everything that we have available
    Object.values(definitions).forEach(({ types }) => {
      setImports(definitions, imports, Object.keys(types));

      const uniqueTypes = Object.keys(types).filter((type) => !existingTypes[type]);

      uniqueTypes.forEach((type) => {
        existingTypes[type] = true;

        items.push(...getDerivedTypes(registry, definitions, type, types[type] as string, imports));
      });
    });

    const types = [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ];

    return generateInterfaceTypesTemplate({
      headerType: 'defs',
      imports,
      items,
      types
    });
  });
}

// Generate `packages/types/src/interfaceRegistry.ts`, the registry of all interfaces
export default function generateDefaultInterfaceTypes (): void {
  generateInterfaceTypes(
    { '@polkadot/types/interfaces': defaultDefinitions },
    'packages/types/src/augment/registry.ts'
  );
}
