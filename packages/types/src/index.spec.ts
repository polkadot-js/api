// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from './types/index.js';

import metadataStatic from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from './create/index.js';
import * as definitions from './interfaces/definitions.js';
import { Metadata } from './metadata/index.js';
import * as exported from './index.types.js';

// NOTE This is not a shortcut to implementing types incorrectly. This is here
// specifically for the types that _should_ throw in the constrtuctor, i.e
// `usize` is not allowed (runtime incompat) and `origin` is not passed through
// to any calls. All other types _must_ pass and allow for empty defaults
const UNCONSTRUCTABLE = [
  'ExtrinsicPayloadUnknown', 'GenericExtrinsicPayloadUnknown',
  'ExtrinsicUnknown', 'GenericExtrinsicUnknown',
  'DoNotConstruct',
  'MetadataAll',
  'Origin',
  'isize',
  'usize'
].map((v): string => v.toLowerCase());

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

function testTypes (type: string, typeNames: string[]): void {
  describe(type, (): void => {
    describe(`${type}:: default creation`, (): void => {
      typeNames.forEach((name): void => {
        it(`creates an empty ${name}`, (): void => {
          const constructFn = (): Codec =>
            registry.createType(name);

          if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
            expect(constructFn).toThrow();
          } else {
            expect(constructFn).not.toThrow();
          }
        });
      });
    });

    describe(`${type}:: default creation (empty bytes)`, (): void => {
      typeNames.forEach((name): void => {
        it(`creates an empty ${name} (from empty bytes)`, (): void => {
          const constructFn = (): Codec =>
            registry.createType(name, registry.createType('Bytes'));

          if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
            expect(constructFn).toThrow();
          } else {
            expect(constructFn).not.toThrow();
          }
        });
      });
    });
  });
}

describe('type creation', (): void => {
  testTypes('exported', Object.keys(exported));

  Object
    .entries(definitions)
    .forEach(([name, { types }]): void =>
      testTypes(`${name} (injected)`, Object.keys(types))
    );
});
