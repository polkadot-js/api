// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, ArgsDef, Codec, Constructor, IMethod } from '../types';

import extrinsicsFromMetadata from '@polkadot/extrinsics/fromMetadata';
import Metadata from '@polkadot/types/Metadata';
import { assert, isHex, isObject, isU8a, hexToU8a } from '@polkadot/util';

import { getTypeDef, getTypeClass } from '../codec/createType';
import Struct from '../codec/Struct';
import U8aFixed from '../codec/U8aFixed';
import { FunctionMetadata as FunctionMetadataV5, FunctionArgumentMetadata } from '../Metadata/v5/Calls';

interface ConstructorOptions {
  meta?: MetaLike;
}

interface DecodeMethodInput {
  args: any;
  callIndex: MethodIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadataV5;
  method: string;
  section: string;
}

export type MetaLike = FunctionMetadataV5 | MethodFunction | Metadata;

export interface MethodFunction {
  callIndex: Uint8Array;
  meta: FunctionMetadataV5;
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
export default class Method extends Struct implements IMethod {
  protected _meta: FunctionMetadataV5;

  // The method name is already in _meta but we're storing it here for
  // convenience and (?) case consistency
  protected _method: string;

  protected _section: string;

  /**
   * Method constructor
   *
   * @param value
   * @param meta - Metadata to use, so that the `injectMethods` lookup is not
   * necessary. This argument will soon be required so as to get rid of globals.
   */
  constructor (value: any, options: ConstructorOptions = {}) {
    const decoded = Method.decodeMethod(value, options.meta);

    super({
      callIndex: MethodIndex,
      args: Struct.with(decoded.argsDef)
    }, decoded);

    this._meta = decoded.meta;
    this._method = decoded.method;
    this._section = decoded.section;
  }

  static withMeta (meta: MetaLike): Constructor<Method> {
    return class extends Method {
      constructor (value?: any) {
        super(value, { meta });
      }
    };
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
  private static decodeMethod (value: DecodedMethod | Uint8Array | string = new Uint8Array(), _meta?: MetaLike): DecodedMethod {

    const unwrapMeta = (callIndex: Uint8Array, meta?: MetaLike): {
      meta: FunctionMetadataV5;
      method: string;
      section: string;
    } => {
      if (meta instanceof FunctionMetadataV5) {
        return { meta } as MethodFunction;
      }

      const methodFunction = (!meta
        ? Method.findFunction(callIndex) // Global lookup
        : meta instanceof Metadata
          ? Method.findByCallIndex(callIndex, meta) // meta is the runtime metadata
          : meta) as MethodFunction;

      return { meta: methodFunction.meta, method: methodFunction.method, section: methodFunction.section };
    };

    if (isHex(value)) {
      return Method.decodeMethod(hexToU8a(value), _meta);
    } else if (isU8a(value)) {
      // The first 2 bytes are the callIndex
      const callIndex = value.subarray(0, 2);

      // Find metadata with callIndex
      const { meta, method, section } = unwrapMeta(callIndex, _meta);

      return {
        args: value.subarray(2),
        argsDef: Method.getArgsDef(meta),
        callIndex,
        meta,
        method,
        section
      };
    } else if (isObject(value) && value.callIndex && value.args) {
      // destructure value, we only pass args/methodsIndex out
      const { args, callIndex } = value;

      // Get the correct lookupIndex
      const lookupIndex = callIndex instanceof MethodIndex
        ? callIndex.toU8a()
        : callIndex;

      // Find metadata with lookupIndex
      const { meta, method, section } = unwrapMeta(lookupIndex, _meta);

      return {
        args,
        argsDef: Method.getArgsDef(meta),
        callIndex,
        meta,
        method,
        section
      };
    }

    throw new Error(`Method: Cannot decode value '${value}' of type ${typeof value}`);
  }

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  static filterOrigin (meta?: FunctionMetadataV5): Array<FunctionArgumentMetadata> {
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    return meta
      ? meta.args.filter(({ type }) =>
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
  //
  // @deprecated This method does a lookup in the methods' metadata stored
  // globally with injectMethods. Pass the metadata to the Method constructor
  // instead.
  static findFunction (callIndex: Uint8Array): MethodFunction {
    assert(Object.keys(injected).length > 0, 'Calling Method.findFunction before extrinsics have been injected.');

    return injected[callIndex.toString()] || FN_UNKNOWN;
  }

  /**
   * Retrieves a function from the runtime metadata
   * @param callIndex Call index of the function, e.g. new Uint8Array([3, 0])
   * @param metadata Runtime metadata, e.g. api.runtimeMetadata
   */
  static findByCallIndex (callIndex: Uint8Array, metadata: Metadata): MethodFunction | undefined {
    const moduleMethods = extrinsicsFromMetadata(metadata);

    const methods: MethodFunction[] = ([] as MethodFunction[]).concat(
      ...Object.values(moduleMethods).map(methods => Object.values(methods))
    );

    return methods.find((method: MethodFunction) =>
      method.callIndex.toString() === callIndex.toString());
  }

  /**
   * Get a mapping of `argument name -> argument type` for the function, from
   * its metadata.
   *
   * @param meta - The function metadata used to get the definition.
   */
  private static getArgsDef (meta: FunctionMetadataV5): ArgsDef {
    return Method.filterOrigin(meta).reduce((result, { name, type }) => {
      const Type = getTypeClass(
        getTypeDef(type)
      );
      result[name.toString()] = Type;

      return result;
    }, {} as ArgsDef);
  }

  /**
   * This is called/injected by the API on init, allowing a snapshot of
   * the available system extrinsics to be used in lookups
   *
   * deprecated: Instead of injecting the methods' metadata globally, call the
   * Method constructor with the function or runtime metadata.
   */
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
   * @description The argument definitions
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
    const firstArg = this.meta.args[0];

    return !!firstArg && firstArg.type.toString() === 'Origin';
  }

  /**
   * @description The [[FunctionMetadata]]
   */
  get meta (): FunctionMetadataV5 {
    return this._meta;
  }

  /**
   * @description Returns the name of the method
   */
  get methodName (): string | undefined {
    return this._method;
  }

  /**
   * @description Returns the module containing the method
   */
  get sectionName (): string | undefined {
    return this._section;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return 'Call';
  }
}
