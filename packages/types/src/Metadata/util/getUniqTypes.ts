// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../../types';

import { Option, Vec } from '../../codec';
import { Text, Type } from '../../primitive';

import flattenUniq from './flattenUniq';
import validateTypes from './validateTypes';

// NOTE This does not support V0 unique conversions, conversion works, however
// due to the different nature of the types, the actual checking is not included
// here completely

type Item = {
  type: {
    isDoubleMap?: boolean;
    isMap: boolean;
    asDoubleMap?: {
      key1: Text;
      key2: Text;
      value: Text;
    };
    asMap: {
      key: Text;
      value: Text;
    };
    asType: Text;
  };
} & Codec;

type Storage = Option<Vec<Item> | {
  // V7
  items?: Vec<Item>;
} & Codec>;

type Call = { args: Vec<{ type: Type } & Codec> } & Codec;

type Calls = Option<Vec<Call>>;

type Module = {
  // V1+
  calls?: Calls;
  // V6+
  constants?: Vec<{ type: Text } & Codec>;
  events?: Option<Vec<{ args: Vec<Type> } & Codec>>;
  storage?: Storage;
} & Codec;

interface ExtractionMetadata {
  modules: Vec<Module>;
}

function unwrapCalls (calls?: Calls): Call[] {
  if (!calls) {
    return [];
  }

  return calls.unwrapOr([]);
}

function getCallNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ calls }): string[][] =>
    unwrapCalls(calls).map(({ args }): string[] =>
      args.map((arg): string =>
        arg.type.toString()
      )
    )
  );
}

function getConstantNames ({ modules }: ExtractionMetadata): string[][] {
  return modules.map(({ constants }): string[] =>
    constants
      ? constants.map((constant): string =>
        constant.type.toString()
      )
      : []
  );
}

function getEventNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ events }): string[][] =>
    events && events.isSome
      ? events.unwrap().map(({ args }): string[] =>
        args.map((arg): string =>
          arg.toString()
        )
      )
      : []
  );
}

function unwrapStorage (storage?: Storage): Item[] {
  if (!storage) {
    return [];
  }

  const data = storage.unwrapOr([]);

  return Array.isArray(data)
    ? data
    : data.items as Item[];
}

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
          type.asType.toString()
        ];
      }
    })
  );
}

export default function getUniqTypes (meta: ExtractionMetadata, throwError: boolean): string[] {
  const types = flattenUniq([
    getCallNames(meta),
    getConstantNames(meta),
    getEventNames(meta),
    getStorageNames(meta)
  ]);

  validateTypes(types, throwError);

  return types;
}
