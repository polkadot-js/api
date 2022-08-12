// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsRpc, DefinitionsTypes, RegistryTypes } from '../types';

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create';
import { Metadata } from '../metadata';
import * as all from './definitions';

interface CheckDef {
  rpc: DefinitionsRpc;
  runtime: DefinitionsCall;
  types: DefinitionsTypes;
}

const registry = new TypeRegistry();
const types = Object.values(all).reduce<Record<string, unknown>>((r, { types = {} }) => {
  Object.entries(types).forEach(([k, v]) => {
    r[k] = v;
  });

  return r;
}, {});
const runtimes = Object.entries(all).filter((v): v is [string, CheckDef] => !!v[1].runtime);

registry.register(types as RegistryTypes);
registry.setMetadata(new Metadata(registry, rpcMetadata));

describe('runtime types', (): void => {
  describe.each(runtimes)('%s', (_, { runtime }): void => {
    const versionsEntries = Object.entries(runtime);

    describe.each(versionsEntries)('%s', (_, versions): void => {
      describe.each(versions)('version $version', ({ methods }): void => {
        const methodsEntries = Object.entries(methods);

        describe.each(methodsEntries)('%s', (_, { params, type }): void => {
          it(`output ${type} is known`, (): void => {
            expect(() => registry.createType(type)).not.toThrow();
          });

          if (params.length) {
            describe('params', (): void => {
              it.each(params)('$name: $type is known', ({ type }): void => {
                expect(() => registry.createType(type)).not.toThrow();
              });
            });
          }
        });
      });
    });
  });
});
