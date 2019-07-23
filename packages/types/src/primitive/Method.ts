// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, ArgsDef, Codec, IMethod } from '../types';

import { assert, isHex, isObject, isU8a, hexToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { getTypeDef, getTypeClass } from '../codec/createType';
import Struct from '../codec/Struct';
import U8aFixed from '../codec/U8aFixed';
import { FunctionMetadata as FunctionMetadataV6, FunctionArgumentMetadata } from '../Metadata/v6/Calls';
import Hash from './Hash';

interface DecodeMethodInput {
  args: any;
  callIndex: MethodIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadataV6;
}

export interface MethodFunction {
  (...args: any[]): Method;
  callIndex: Uint8Array;
  meta: FunctionMetadataV6;
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

const FN_UNKNOWN: Partial<MethodFunction> = {
  method: 'unknown',
  section: 'unknown'
};

const injected: Record<string, MethodFunction> = {};

/**
 * @name MethodIndex
 * @description
 * A wrapper around the `[sectionIndex, methodIndex]` value that uniquely identifies a method
 */
export class MethodIndex extends U8aFixed {
  public constructor (value?: AnyU8a) {
    super(value, 16);
  }
}

/**
 * @name Method
 * @description
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Method extends Struct implements IMethod {
  protected _meta: FunctionMetadataV6;

  public constructor (value: any, meta?: FunctionMetadataV6) {
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
  private static decodeMethod (value: DecodedMethod | Uint8Array | string = new Uint8Array(), _meta?: FunctionMetadataV6): DecodedMethod {
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

    throw new Error(`Method: Cannot decode value '${value}' of type ${typeof value}`);
  }

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  public static filterOrigin (meta?: FunctionMetadataV6): FunctionArgumentMetadata[] {
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    return meta
      ? meta.args.filter(({ type }): boolean =>
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
  public static findFunction (callIndex: Uint8Array): MethodFunction {
    assert(Object.keys(injected).length > 0, 'Calling Method.findFunction before extrinsics have been injected.');

    return injected[callIndex.toString()] || FN_UNKNOWN;
  }

  /**
   * Get a mapping of `argument name -> argument type` for the function, from
   * its metadata.
   *
   * @param meta - The function metadata used to get the definition.
   */
  private static getArgsDef (meta: FunctionMetadataV6): ArgsDef {
    return Method.filterOrigin(meta).reduce((result, { name, type }): ArgsDef => {
      const Type = getTypeClass(
        getTypeDef(type)
      );
      result[name.toString()] = Type;

      return result;
    }, {} as unknown as ArgsDef);
  }

  // This is called/injected by the API on init, allowing a snapshot of
  // the available system extrinsics to be used in lookups
  public static injectMethods (moduleMethods: ModulesWithMethods): void {
    Object.values(moduleMethods).forEach((methods): void =>
      Object.values(methods).forEach((method): void => {
        injected[method.callIndex.toString()] = method;
      })
    );
  }

  /**
   * @description The arguments for the function call
   */
  public get args (): Codec[] {
    // FIXME This should return a Struct instead of an Array
    return [...(this.get('args') as Struct).values()];
  }

  /**
   * @description Thge argument defintions
   */
  public get argsDef (): ArgsDef {
    return Method.getArgsDef(this.meta);
  }

  /**
   * @description The encoded `[sectionIndex, methodIndex]` identifier
   */
  public get callIndex (): Uint8Array {
    return (this.get('callIndex') as MethodIndex).toU8a();
  }

  /**
   * @description The encoded data
   */
  public get data (): Uint8Array {
    return (this.get('args') as Struct).toU8a();
  }

  /**
   * @description Convenience function, encodes the Method and returns the actual hash
   */
  public get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  /**
   * @description `true` if the `Origin` type is on the method (extrinsic method)
   */
  public get hasOrigin (): boolean {
    const firstArg = this.meta.args[0];

    return !!firstArg && firstArg.type.toString() === 'Origin';
  }

  /**
   * @description The [[FunctionMetadata]]
   */
  public get meta (): FunctionMetadataV6 {
    return this._meta;
  }

  /**
   * @description Returns the name of the method
   */
  public get methodName (): string {
    return Method.findFunction(this.callIndex).method;
  }

  /**
   * @description Returns the module containing the method
   */
  public get sectionName (): string {
    return Method.findFunction(this.callIndex).section;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Call';
  }
}
