// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsRpc, DefinitionsTypes, RegistryTypes } from '../types';

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { getTypeDef, TypeRegistry } from '../create';
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

registry.register(types as RegistryTypes);
registry.setMetadata(new Metadata(registry, rpcMetadata));

function inspectType (type: string): void {
  try {
    // get the definition
    const { sub } = getTypeDef(registry.createType(type).toRawType());

    // inspect the subs
    if (Array.isArray(sub)) {
      for (let i = 0; i < sub.length; i++) {
        inspectType(sub[i].type);
      }
    } else if (sub) {
      inspectType(sub.type);
    }
  } catch (error) {
    throw new Error(`${type}:: ${(error as Error).message}`);
  }
}

describe('type definitions', (): void => {
  const types = Object.entries(all).filter((v): v is [string, CheckDef] =>
    !!v[1].types &&
    Object.keys(v[1].types).length !== 0 &&
    v[0] === 'benchmark'
  );

  describe.each(types)('%s', (_, { types }): void => {
    const typesKeys = Object.keys(types).filter((type) =>
      // meant to fail
      type !== 'ExtrinsicUnknown' &&
      type !== 'ExtrinsicPayloadUnknown' &&
      // injected at runtime
      type !== 'Origin' &&
      // it will fail of MetadataV0
      type !== 'MetadataAll'
    );

    it.each(typesKeys)('%s is known', (type): void => {
      expect(() => inspectType(type)).not.toThrow();
    });
  });
});

describe('rpc definitions', (): void => {
  const rpcs = Object.entries(all).filter((v): v is [string, CheckDef] =>
    !!v[1].rpc &&
    Object.keys(v[1].rpc).length !== 0
  );

  describe.each(rpcs)('%s', (section, { rpc }): void => {
    const methodsEntries = Object.entries(rpc);

    describe.each(methodsEntries)('%s', (method, { params, type }): void => {
      // We cannot constuct V0, so just ignore
      if (section !== 'state' || method !== 'getMetadata') {
        it(`output ${type} is known`, (): void => {
          expect(() => inspectType(type)).not.toThrow();
        });
      }

      if (params.length) {
        describe('params', (): void => {
          it.each(params)('$name: $type is known', ({ type }): void => {
            expect(() => inspectType(type)).not.toThrow();
          });
        });
      }
    });
  });
});

describe('runtime definitions', (): void => {
  const runtimes = Object.entries(all).filter((v): v is [string, CheckDef] =>
    !!v[1].runtime &&
    Object.keys(v[1].runtime).length !== 0
  );

  describe.each(runtimes)('%s', (_, { runtime }): void => {
    const versionsEntries = Object.entries(runtime);

    describe.each(versionsEntries)('%s', (_, versions): void => {
      describe.each(versions)('version $version', ({ methods }): void => {
        const methodsEntries = Object.entries(methods);

        describe.each(methodsEntries)('%s', (_, { params, type }): void => {
          it(`output ${type} is known`, (): void => {
            expect(() => inspectType(type)).not.toThrow();
          });

          if (params.length) {
            describe('params', (): void => {
              it.each(params)('$name: $type is known', ({ type }): void => {
                expect(() => inspectType(type)).not.toThrow();
              });
            });
          }
        });
      });
    });
  });
});
