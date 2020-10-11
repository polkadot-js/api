// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SubmittableResult } from '@polkadot/api';
import { EventRecord } from '@polkadot/types/interfaces';
import { Codec, CodecArg, Registry, TypeDef } from '@polkadot/types/types';
import { AbiConstructor, AbiMessage } from './types';

import { Raw, createClass, createTypeUnsafe, encodeTypeDef } from '@polkadot/types';

import { assert, compactAddLength } from '@polkadot/util';

export function formatData (registry: Registry, data: Raw, { type }: TypeDef): Codec {
  return createTypeUnsafe(registry, type, [data], true);
}

export function applyOnEvent <T> (result: SubmittableResult, type: 'CodeStored' | 'Instantiated', fn: (record: EventRecord) => T): T | undefined {
  if (result.isInBlock || result.isFinalized) {
    const record = result.findRecord('contract', 'CodeStored');

    if (record) {
      return fn(record);
    }
  }

  return undefined;
}

export function encodeMessage (registry: Registry, message: AbiMessage | AbiConstructor, params: CodecArg[]): Uint8Array {
  assert(message, 'Attempted to call an invalid contract message');
  assert(params.length === message.args.length, `Expected ${message.args.length} arguments to contract message '${message.identifier}', found ${params.length}`);

  const Clazz = createClass(registry, JSON.stringify(
    message.args.reduce((base: Record<string, any>, { name, type }): Record<string, any> => {
      base[name] = type.displayName || encodeTypeDef(type);

      return base;
    }, { __selector: 'u32' })
  ));

  return compactAddLength(
    new Clazz(registry, message.args.reduce((mapped: Record<string, CodecArg>, { name }, index): Record<string, CodecArg> => {
      mapped[name] = params[index];

      return mapped;
    }, { __selector: registry.createType('u32', message.selector) })).toU8a()
  );
}
