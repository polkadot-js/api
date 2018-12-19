// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, Codec, Constructor } from './types';

import { assert, isHex, isObject, isU8a, hexToU8a } from '@polkadot/util';

import { getTypeDef, getTypeClass } from './codec/createType';
import Struct from './codec/Struct';
import U8aFixed from './codec/U8aFixed';
import { FunctionMetadata, FunctionArgumentMetadata } from './Metadata/Modules';

interface ArgsDef {
  [index: string]: Constructor;
}

interface DecodeMethodInput {
  args: any;
  callIndex: MethodIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadata;
}

export interface MethodFunction {
  (...args: any[]): Method;
  callIndex: Uint8Array;
  meta: FunctionMetadata;
  method: string;
  section: string;
  toJSON: () => any;
}

export interface Methods {
  [key: string]: MethodFunction;
}

export interface ModulesWithMethods {
  [key: string]: Methods; // Will hold modules returned by state_getMetadata
}

const FN_UNKNOWN = {
  method: 'unknown',
  section: 'unknown'
} as MethodFunction;

const injected: { [index: string]: MethodFunction } = {};

/**
 * @name MethodIndex
 * @description
 * A wrapper around the `[sectionIndex, methodIndex]` value that uniquely identifies a method
 */
export class MethodIndex extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 16);
  }
}

/**
 * @name Method
 * @description
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Method extends Struct {
  protected _meta: FunctionMetadata;

  constructor (value: any, meta?: FunctionMetadata) {
    const decoded = Method.decodeMethod(value, meta);

    super({
      callIndex: MethodIndex,
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
   * @param _meta - Metadata to use, so that `injectMethods` lookup is not
   * necessary.
   */
  private static decodeMethod (value: DecodedMethod | Uint8Array | string, _meta?: FunctionMetadata): DecodedMethod {
    if (isHex(value)) {
      return Method.decodeMethod(hexToU8a(value), _meta);
    } else if (isU8a(value)) {
      // The first 2 bytes are the callIndex
      const callIndex = value.subarray(0, 2);

      // Find metadata with callIndex
      const meta = _meta || Method.findFunction(callIndex).meta;

      return {
        args: value.subarray(2),
        argsDef: Method.getArgsDef(meta),
        callIndex,
        meta
      };
    } else if (isObject(value) && value.callIndex && value.args) {
      // destructure value, we only pass args/methodsIndex out
      const { args, callIndex } = value;

      // Get the correct lookupIndex
      const lookupIndex = callIndex instanceof MethodIndex
        ? callIndex.toU8a()
        : callIndex;

      // Find metadata with callIndex
      const meta = _meta || Method.findFunction(lookupIndex).meta;

      return {
        args,
        argsDef: Method.getArgsDef(meta),
        meta,
        callIndex
      };
    }

    throw new Error(`Method: cannot decode value '${value}' or type ${typeof value}`);
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

  // We could only inject the meta (see injectMethods below) and then do a
  // meta-only lookup via
  //
  //   metadata.modules[callIndex[0]].module.call.functions[callIndex[1]]
  //
  // As a convenience helper though, we return the full constructor function,
  // which includes the meta, name, section & actual interface for calling
  static findFunction (callIndex: Uint8Array): MethodFunction {
    assert(Object.keys(injected).length > 0, 'Calling Method.findFunction before extrinsics have been injected.');

    return injected[callIndex.toString()] || FN_UNKNOWN;
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
  static injectMethods (moduleMethods: ModulesWithMethods): void {
    Object.values(moduleMethods).forEach((methods) =>
      Object.values(methods).forEach((method) =>
        injected[method.callIndex.toString()] = method
      )
    );
  }

  /**
   * @description The arguments for the function call
   */
  get args (): Array<Codec> {
    // FIXME This should return a Struct instead of an Array
    return [...(this.get('args') as Struct).values()];
  }

  /**
   * @description Thge argument defintions
   */
  get argsDef (): ArgsDef {
    return Method.getArgsDef(this.meta);
  }

  /**
   * @description The encoded `[sectionIndex, methodIndex]` identifier
   */
  get callIndex (): Uint8Array {
    return (this.get('callIndex') as MethodIndex).toU8a();
  }

  /**
   * @description The encoded data
   */
  get data (): Uint8Array {
    return (this.get('args') as Struct).toU8a();
  }

  /**
   * @description `true` if the `Origin` type is on the method (extrinsic method)
   */
  get hasOrigin (): boolean {
    const firstArg = this.meta.arguments[0];

    return !!firstArg && firstArg.type.toString() === 'Origin';
  }

  /**
   * @description The [[FunctionMetadata]]
   */
  get meta (): FunctionMetadata {
    return this._meta;
  }
}
