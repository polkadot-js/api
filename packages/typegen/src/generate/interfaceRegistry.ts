// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ModuleTypes } from '../util/imports.js';

import Handlebars from 'handlebars';

import { Json, Raw } from '@polkadot/types/codec';
import { TypeRegistry } from '@polkadot/types/create';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import * as defaultPrimitives from '@polkadot/types/primitive';

import { createImports, readTemplate, setImports, writeFile } from '../util/index.js';

const primitiveClasses = {
  ...defaultPrimitives,
  Json,
  Raw
};

const generateInterfaceTypesTemplate = Handlebars.compile(readTemplate('interfaceRegistry'));

/** @internal */
export function generateInterfaceTypes (importDefinitions: Record<string, Record<string, ModuleTypes>>, dest: string): void {
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
      .forEach((primitiveName): void => {
        setImports(definitions, imports, [primitiveName]);

        items.push(primitiveName);
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

      uniqueTypes.forEach((type): void => {
        existingTypes[type] = true;

        items.push(type);
      });
    });

    return generateInterfaceTypesTemplate({
      headerType: 'defs',
      imports,
      items: items.sort((a, b) => a.localeCompare(b)),
      types: [
        ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
          file: packagePath,
          types: Object.keys(imports.localTypes[packagePath])
        }))
      ]
    });
  });
}

// Generate `packages/types/src/interfaceRegistry.ts`, the registry of all interfaces
export function generateDefaultInterface (): void {
  generateInterfaceTypes(
    { '@polkadot/types/interfaces': defaultDefinitions },
    'packages/types-augment/src/registry/interfaces.ts'
  );
}
