// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec, Registry } from '@polkadot/types/types';

import { Option, Vec } from '@polkadot/types/codec';
import { Text, Type } from '@polkadot/types/primitive';

import flattenUniq from './flattenUniq';
import validateTypes from './validateTypes';

type Arg = { type: Type } & Codec;

type Item = {
  type: {
    isDoubleMap?: boolean;
    isMap: boolean;
    isPlain: boolean;
    asDoubleMap?: {
      key1: Text;
      key2: Text;
      value: Text;
    };
    asMap: {
      key: Text;
      value: Text;
    };
    asPlain: Text;
  };
} & Codec;

type Storage = Option<Vec<Item> | {
  // v0
  functions?: Vec<Item>;
  // V7+
  items?: Vec<Item>;
} & Codec>;

type Call = { args: Vec<Arg> } & Codec;

type Calls = Option<Vec<Call>>;

type Event = { args: Vec<Type> } & Codec;

type Events = Option<Vec<Event>>;

type Module = {
  // V0
  module?: {
    call: {
      functions: Vec<Call>;
    };
  };
  // V1+
  calls?: Calls;
  // V6+
  constants?: Vec<{ type: Text } & Codec>;
  events?: Events;
  storage?: Storage;
} & Codec;

interface ExtractionMetadata {
  modules: Vec<Module>;

  // V0
  outerEvent?: {
    events: Vec<[Text, Vec<Event>] & Codec>;
  };
}

/** @internal */
function unwrapCalls (mod: Module): Call[] {
  return mod.calls
    ? mod.calls.unwrapOr([])
    // V0
    : mod.module
      ? mod.module.call.functions
      : [];
}

/** @internal */
function getCallNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map((mod): string[][] =>
    unwrapCalls(mod).map(({ args }): string[] =>
      args.map((arg): string =>
        arg.type.toString()
      )
    )
  );
}

/** @internal */
function getConstantNames ({ modules }: ExtractionMetadata): string[][] {
  return modules.map(({ constants }): string[] =>
    constants
      ? constants.map((constant): string =>
        constant.type.toString()
      )
      : []
  );
}

/** @internal */
function unwrapEvents (events?: Events): Event[] {
  if (!events) {
    return [];
  }

  return events.unwrapOr([]);
}

/** @internal */
function getEventNames ({ modules, outerEvent }: ExtractionMetadata): string[][][] {
  const mapArg = ({ args }: Event): string[] =>
    args.map((arg): string =>
      arg.toString()
    );

  // V0
  if (outerEvent) {
    return outerEvent.events.map(([, events]): string[][] =>
      events.map(mapArg)
    );
  }

  // V1+
  return modules.map(({ events }): string[][] =>
    unwrapEvents(events).map(mapArg)
  );
}

/** @internal */
function unwrapStorage (storage?: Storage): Item[] {
  if (!storage) {
    return [];
  }

  const data = storage.unwrapOr([]);

  return Array.isArray(data)
    ? data
    : (data.items || data.functions) as Item[];
}

/** @internal */
function getStorageNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ storage }): string[][] =>
    unwrapStorage(storage).map(({ type }): string[] => {
      if (type.isDoubleMap && type.asDoubleMap) {
        return [
          type.asDoubleMap.key1.toString(),
          type.asDoubleMap.key2.toString(),
          type.asDoubleMap.value.toString()
        ];
      } else if (type.isMap) {
        return [
          type.asMap.key.toString(),
          type.asMap.value.toString()
        ];
      } else {
        return [
          type.asPlain.toString()
        ];
      }
    })
  );
}

/** @internal */
export default function getUniqTypes (registry: Registry, meta: ExtractionMetadata, throwError: boolean): string[] {
  const types = flattenUniq([
    getCallNames(meta),
    getConstantNames(meta),
    getEventNames(meta),
    getStorageNames(meta)
  ]);

  validateTypes(registry, types, throwError);

  return types;
}
