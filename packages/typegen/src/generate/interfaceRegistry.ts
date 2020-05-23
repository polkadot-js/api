// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Handlebars from 'handlebars';

import Raw from '@polkadot/types/codec/Raw';
import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';
import * as defaultPrimitives from '@polkadot/types/primitive';

import { createImports, getDerivedTypes, readTemplate, setImports, writeFile } from '../util';
import { ModuleTypes } from '../util/imports';

const primitiveClasses = {
  ...defaultPrimitives,
  Raw
};

const template = readTemplate('interfaceRegistry');
const generateInterfaceTypesTemplate = Handlebars.compile(template);

/** @internal */
export function generateInterfaceTypes (importDefinitions: { [importPath: string]: Record<string, ModuleTypes> }, dest: string): void {
  writeFile(dest, (): string => {
    Object.entries(importDefinitions).reduce((acc, def) => Object.assign(acc, def), {});

    const imports = createImports(importDefinitions);
    const definitions = imports.definitions;

    const items: string[] = [];

    Object
      .keys(primitiveClasses)
      .filter((name): boolean => !!name.indexOf('Generic'))
      .forEach((primitiveName) => {
        setImports(definitions, imports, [primitiveName]);

        items.push(...getDerivedTypes(definitions, primitiveName, primitiveName, imports));
      });

    const existingTypes: Record<string, boolean> = {};

    Object.entries(definitions).forEach(([, { types }]) => {
      setImports(definitions, imports, Object.keys(types));

      const uniqueTypes = Object.keys(types).filter((type) => !existingTypes[type]);

      uniqueTypes.forEach((type) => {
        existingTypes[type] = true;

        items.push(...getDerivedTypes(definitions, type, types[type] as string, imports));
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
