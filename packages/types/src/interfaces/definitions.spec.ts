// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionCall, DefinitionRpc, DefinitionsCall, DefinitionsCallEntry, DefinitionsRpc, DefinitionsTypes, RegistryTypes } from '../types/index.js';

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { getTypeDef, TypeRegistry } from '../create/index.js';
import { Metadata } from '../metadata/index.js';
import * as all from './definitions.js';

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
      for (let i = 0, count = sub.length; i < count; i++) {
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
  const allTypes = Object.entries(all).filter((v): v is [string, CheckDef] =>
    !!v[1].types &&
    Object.keys(v[1].types).length !== 0 &&
    v[0] === 'benchmark'
  );

  for (const [key, { types }] of allTypes) {
    describe(`${key}`, (): void => {
      const typesKeys = Object.keys(types).filter((type) =>
        // meant to fail
        type !== 'ExtrinsicUnknown' &&
        type !== 'ExtrinsicPayloadUnknown' &&
        // injected at runtime
        type !== 'Origin' &&
        // it will fail of MetadataV0
        type !== 'MetadataAll'
      );

      for (const type of typesKeys) {
        it(`${type} is known`, (): void => {
          expect(() => inspectType(type)).not.toThrow();
        });
      }
    });
  }
});

describe('rpc definitions', (): void => {
  const rpcs = Object.entries(all).filter((v): v is [string, CheckDef] =>
    !!v[1].rpc &&
    Object.keys(v[1].rpc).length !== 0
  );

  for (const [section, { rpc }] of rpcs) {
    describe(`${section}`, (): void => {
      const methodsEntries = Object.entries<DefinitionRpc>(rpc);

      for (const [method, { params, type }] of methodsEntries) {
        describe(`${method}`, (): void => {
          // We cannot constuct V0, so just ignore
          if (section !== 'state' || method !== 'getMetadata') {
            it(`output ${type} is known`, (): void => {
              expect(() => inspectType(type)).not.toThrow();
            });
          }

          if (params.length) {
            describe('params', (): void => {
              for (const { name, type } of params) {
                it(`${name}: ${type} is known`, (): void => {
                  expect(() => inspectType(type)).not.toThrow();
                });
              }
            });
          }
        });
      }
    });
  }
});

describe('runtime definitions', (): void => {
  const runtimes = Object.entries(all).filter((v): v is [string, CheckDef] =>
    !!v[1].runtime &&
    Object.keys(v[1].runtime).length !== 0
  );

  for (const [key, { runtime }] of runtimes) {
    describe(`${key}`, (): void => {
      const versionsEntries = Object.entries<DefinitionsCallEntry[]>(runtime);

      for (const [key, versions] of versionsEntries) {
        describe(`${key}`, (): void => {
          for (const { methods, version } of versions) {
            describe(`version ${version}`, (): void => {
              const methodsEntries = Object.entries<DefinitionCall>(methods);
              const skipInspectTypes = ['StagingXcmV3MultiLocation', 'StagingXcmV4Location', 'Result<Vec<XcmV3MultiAsset>, FungiblesAccessError>', 'Result<XcmVersionedAssets, FungiblesAccessError>', 'XcmVersionedLocation', 'XcmVersionedAssetId', 'XcmVersionedXcm', 'Result<Vec<XcmVersionedAssetId>, XcmPaymentApiError>'];

              for (const [key, { params, type }] of methodsEntries) {
                describe(`${key}`, (): void => {
                  // Applied from runtime, used in Fungibles
                  const skipInspectType = skipInspectTypes.includes(type);

                  if (!skipInspectType) {
                    it(`output ${type} is known`, (): void => {
                      expect(() => inspectType(type)).not.toThrow();
                    });
                  }

                  if (params.length) {
                    describe('params', (): void => {
                      for (const { name, type } of params) {
                        if (skipInspectTypes.includes(type)) {
                          continue;
                        }

                        it(`${name}: ${type} is known`, (): void => {
                          expect(() => inspectType(type)).not.toThrow();
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
