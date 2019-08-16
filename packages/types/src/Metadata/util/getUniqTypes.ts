// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../../types';

import { Option, Vec } from '../../codec';
import { Text, Type } from '../../primitive';

import flattenUniq from './flattenUniq';
import validateTypes from './validateTypes';

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

type Storage = Option<
Vec<Item> |
{ items: Vec<Item> } & Codec |
{ functions: Vec<Item> } & Codec
>;

type Module = {
  calls?: Option<Vec<{ args: Vec<{ type: Type } & Codec> } & Codec>>;
  constants?: Vec<{ type: Text } & Codec>;
  events?: Option<Vec<{ args: Vec<Type> } & Codec>>;
  storage?: Storage;
} & Codec;

interface ExtractionMetadata {
  modules: Vec<Module>;
}

function getCallNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ calls }): string[][] =>
    calls && calls.isSome
      ? calls.unwrap().map(({ args }): string[] =>
        args.map((arg): string => arg.type.toString())
      )
      : []
  );
}

function getConstantNames ({ modules }: ExtractionMetadata): string[][] {
  return modules.map(({ constants }): string[] =>
    constants
      ? constants.map((constant): string => constant.type.toString())
      : []
  );
}

function getEventNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ events }): string[][] =>
    events && events.isSome
      ? events.unwrap().map(({ args }): string[] =>
        args.map((arg): string => arg.toString())
      )
      : []
  );
}

function unwrapStorageItems (storage?: Storage): Item[] {
  if (storage && storage.isSome) {
    const data = storage.unwrap();

    return Array.isArray(data)
      ? data
      : (data as any).items
        ? (data as any).items
        : (data as any).functions;
  }

  return [];
}

function getStorageNames ({ modules }: ExtractionMetadata): string[][][] {
  return modules.map(({ storage }): string[][] =>
    unwrapStorageItems(storage).map(({ type }): string[] => {
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
