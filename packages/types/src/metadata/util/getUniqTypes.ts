// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, Vec } from '@polkadot/types/codec';
import type { Text, Type } from '@polkadot/types/primitive';
import type { Codec, Registry } from '@polkadot/types/types';

import { flattenUniq } from './flattenUniq';
import { validateTypes } from './validateTypes';

type Arg = { type: Type } & Codec;

type Item = {
  type: {
    isDoubleMap: boolean;
    isMap: boolean;
    isNMap: boolean;
    isPlain: boolean;
    asDoubleMap: {
      key1: Text;
      key2: Text;
      value: Text;
    };
    asMap: {
      key: Text;
      value: Text;
    };
    asNMap: {
      keyVec: Text[];
      value: Text;
    },
    asPlain: Text;
  };
} & Codec;

type Storage = Option<{ items: Vec<Item> } & Codec>;

type Call = { args: Vec<Arg> } & Codec;

type Calls = Option<Vec<Call>>;

type Event = { args: Vec<Type> } & Codec;

type Events = Option<Vec<Event>>;

type Module = {
  // V1+
  calls?: Calls;
  // V6+
  constants?: Vec<{ type: Text } & Codec>;
  events?: Events;
  storage?: Storage;
} & Codec;

interface ExtractionMetadata {
  modules: Vec<Module>;
}

/** @internal */
function unwrapCalls (mod: Module): Call[] {
  return mod.calls
    ? mod.calls.unwrapOr([])
    : [];
}

/** @internal */
function typeToString ({ type }: Arg): string {
  return type.toString();
}

/** @internal */
function getCallNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map((mod): string[][] =>
    unwrapCalls(mod).map(({ args }): string[] =>
      args.map(typeToString)
    )
  );
}

/** @internal */
function getConstantNames ({ modules }: ExtractionMetadata): string[][] {
  return modules.map(({ constants }): string[] =>
    (constants || []).map(typeToString)
  );
}

/** @internal */
function unwrapEvents (events?: Events): Event[] {
  return events
    ? events.unwrapOr([])
    : [];
}

/** @internal */
function getEventNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ events }): string[][] =>
    unwrapEvents(events).map(({ args }: Event): string[] =>
      args.map((a) => a.toString())
    )
  );
}

/** @internal */
function unwrapStorage (storage?: Storage): Item[] {
  return storage
    ? storage.unwrapOr({ items: [] }).items
    : [];
}

/** @internal */
function getStorageNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ storage }): string[][] =>
    unwrapStorage(storage).map(({ type }) =>
      type.isPlain
        ? [
          type.asPlain.toString()
        ]
        : type.isMap
          ? [
            type.asMap.value.toString(),
            type.asMap.key.toString()
          ]
          : type.isDoubleMap
            ? [
              type.asDoubleMap.value.toString(),
              type.asDoubleMap.key1.toString(),
              type.asDoubleMap.key2.toString()
            ]
            : [
              type.asNMap.value.toString(),
              ...type.asNMap.keyVec.map((k) => k.toString())
            ]
    )
  );
}

/** @internal */
export function getUniqTypes (registry: Registry, meta: ExtractionMetadata, throwError: boolean): string[] {
  return validateTypes(registry, throwError, flattenUniq([
    getCallNames(meta),
    getConstantNames(meta),
    getEventNames(meta),
    getStorageNames(meta)
  ]));
}
