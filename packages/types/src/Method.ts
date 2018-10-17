// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import assert from '@polkadot/util/assert';
import { ExtrinsicFunction, Extrinsics } from '@polkadot/extrinsics/types';
import isObject from '@polkadot/util/is/object';
import isU8a from '@polkadot/util/is/u8a';

import Base from './codec/Base';
import { Constructor } from './types';
import { FunctionMetadata, FunctionArgumentMetadata } from './Metadata';
import { getTypeDef, getTypeClass } from './codec/createType';
import MethodIndex from './MethodIndex';
import Struct from './codec/Struct';
import isHex from '@polkadot/util/is/hex';

const FN_UNKNOWN = {
  method: 'unknown',
  section: 'unknown'
} as ExtrinsicFunction;

interface ArgsDef {
  [index: string]: Constructor<Base>;
}

interface DecodeMethodInput {
  args: any;
  methodIndex: MethodIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadata;
}

const extrinsicFns: { [index: string]: ExtrinsicFunction } = {};

/**
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Method extends Struct {
  protected _meta: FunctionMetadata;

  constructor (value: any, meta?: FunctionMetadata) {
    const decoded = Method.decodeMethod(value, meta);

    super({
      methodIndex: MethodIndex,
      args: Struct.with(decoded.argsDef)
    }, decoded);

    this._meta = decoded.meta;
  }

  /**
   * Decode input to pass into constructor.
   *
   * @param value - Value to decode, one of:
   * - hex
   * - Uint8Array
   * - {@see DecodeMethodInput}
   * @param _meta - Metadata to use, so that `injectExtrinsics` lookup is not
   * necessary.
   */
  private static decodeMethod (value: Uint8Array | string | DecodeMethodInput, _meta?: FunctionMetadata): DecodedMethod {
    if (isHex(value)) {
      return Method.decodeMethod(value, _meta);
    } else if (isU8a(value)) {
      // The first 2 bytes are the callIndex
      const callIndex = value.subarray(0, 2);

      // Find metadata with callIndex
      const meta = _meta || Method.findFunction(callIndex).meta;

      // Get Struct definition of the arguments
      const argsDef = Method.getArgsDef(meta);

      return { args: value.subarray(2), argsDef, methodIndex: callIndex, meta };
    } else if (
      isObject(value) &&
      value.methodIndex &&
      value.args
    ) {
      // Get the correct callIndex
      const callIndex = value.methodIndex instanceof MethodIndex
        ? value.methodIndex.callIndex
        : value.methodIndex;

      // Find metadata with callIndex
      const meta = _meta || Method.findFunction(callIndex).meta;

      // Get Struct definition of the arguments
      const argsDef = Method.getArgsDef(meta);

      return { ...value, argsDef, meta };
    }

    throw new Error(`Method: cannot decode value "${value}".`);
  }

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  static filterOrigin (meta?: FunctionMetadata): Array<FunctionArgumentMetadata> {
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    return meta
      ? meta.arguments.filter(({ type }) =>
        type.toString() !== 'Origin'
      )
      : [];
  }

  // We could only inject the meta (see injectExtrinsics below) and then do a
  // meta-only lookup via
  //
  //   metadata.modules[callIndex[0]].module.call.functions[callIndex[1]]
  //
  // As a convenience helper though, we return the full constructor function,
  // which includes the meta, name, section & actual interface for calling
  static findFunction (callIndex: Uint8Array): ExtrinsicFunction {
    assert(Object.keys(extrinsicFns).length > 0, 'Calling Method.findFunction before extrinsics have been injected.');
    return extrinsicFns[callIndex.toString()] || FN_UNKNOWN;
  }

  /**
   * Get a mapping of `argument name -> argument type` for the function, from
   * its metadata.
   *
   * @param meta - The function metadata used to get the definition.
   */
  private static getArgsDef (meta: FunctionMetadata): ArgsDef {
    return Method.filterOrigin(meta).reduce((result, { name, type }) => {
      const Type = getTypeClass(
        getTypeDef(type)
      );
      result[name.toString()] = Type;

      return result;
    }, {} as ArgsDef);
  }

  // This is called/injected by the API on init, allowing a snapshot of
  // the available system extrinsics to be used in lookups
  static injectExtrinsics (extrinsics: Extrinsics): void {
    Object.values(extrinsics).forEach((methods) =>
      Object.values(methods).forEach((method) =>
        extrinsicFns[method.callIndex.toString()] = method
      )
    );
  }

  get args (): Array<Base> {
    return (this.getAtIndex(1) as Struct<Base>).values();
  }

  get argsDef (): ArgsDef {
    return Method.getArgsDef(this.meta);
  }

  get callIndex (): Uint8Array {
    return (this.getAtIndex(0) as MethodIndex).callIndex;
  }

  get data (): Uint8Array {
    return (this.getAtIndex(1) as Struct<Base>).toU8a();
  }

  get meta (): FunctionMetadata {
    return this._meta;
  }
}
