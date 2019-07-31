// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { getTypeDef, getTypeClass } from '../../codec/createType';
import Struct from '../../codec/Struct';
import U8aFixed from '../../codec/U8aFixed';
import Metadata from '../../Metadata';
import { FunctionMetadata as FunctionMetadataV7, FunctionArgumentMetadata } from '../../Metadata/v7/Calls';
import { AnyU8a, ArgsDef, CallFunction, Codec, IMethod, ModulesWithCalls } from '../../types';
import extrinsicsFromMetadata from '@polkadot/api-metadata/extrinsics/fromMetadata';
import { assert, isHex, isObject, isU8a, hexToU8a } from '@polkadot/util';

interface ConstructorOptions {
  meta?: Metadata;
}

interface DecodeMethodInput {
  args: any;
  callIndex: CallIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadataV7;
  method: string;
  section: string;
}

const FN_UNKNOWN: Partial<CallFunction> = {
  method: 'unknown',
  section: 'unknown'
};

const injected: Record<string, CallFunction> = {};

/**
 * @name CallIndex
 * @description
 * A wrapper around the `[sectionIndex, methodIndex]` value that uniquely identifies a method
 */
export class CallIndex extends U8aFixed {
  public constructor (value?: AnyU8a) {
    super(value, 16);
  }
}

/**
 * @name Call
 * @description
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Call extends Struct implements IMethod {
  protected _meta: FunctionMetadataV7;

  protected _method: string;

  protected _section: string;

  /**
  * Method constructor
  *
  * @param value
  * @param meta - Metadata to use, so that the `injectMethods` lookup is not
  * necessary. This argument will soon be required so as to get rid of globals.
  */
  public constructor (value: any, options: ConstructorOptions = {}) {
    const decoded = Call.decodeCall(value, options);

    super({
      callIndex: CallIndex,
      args: Struct.with(decoded.argsDef)
    }, decoded);

    this._meta = decoded.meta;
    this._method = decoded.method;
    this._section = decoded.section;
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
  private static decodeCall (value: Call | DecodedMethod | Uint8Array | string = new Uint8Array(), options: ConstructorOptions = {}): DecodedMethod {
    const _meta = options.meta;

    const unwrapMeta = (callIndex: Uint8Array, meta?: Metadata): {
      meta: FunctionMetadataV7;
      method: string;
      section: string;
    } => {
      const methodFunction = (meta && Call.findByCallIndex(callIndex, meta)) || // meta is the runtime metadata
        Call.findFunction(callIndex); // Global lookup

      return { meta: methodFunction.meta, method: methodFunction.method, section: methodFunction.section };
    };
    if (isHex(value)) {
      return Call.decodeCall(hexToU8a(value), { meta: _meta });
    } else if (isU8a(value)) {
      // The first 2 bytes are the callIndex
      const callIndex = value.subarray(0, 2);

      // Find metadata with callIndex
      const { meta, method, section } = unwrapMeta(callIndex, _meta);

      return {
        args: value.subarray(2),
        argsDef: Call.getArgsDef(meta),
        callIndex,
        meta,
        method,
        section
      };
    } else if (value instanceof Call) {
      const { args, argsDef, callIndex, meta, methodName: method, sectionName: section } = value;

      return { args, argsDef, callIndex, meta, method, section };
    } else if (isObject(value) && value.callIndex && value.args) {
      // destructure value, we only pass args/methodsIndex out
      const { args, callIndex } = value;

      // Get the correct lookupIndex
      const lookupIndex = callIndex instanceof CallIndex
        ? callIndex.toU8a()
        : callIndex;

      // Find metadata with lookupIndex
      const { meta, method, section } = unwrapMeta(lookupIndex, _meta);

      return {
        args,
        argsDef: Call.getArgsDef(meta),
        callIndex,
        meta,
        method,
        section
      };
    }

    throw new Error(`Call: Cannot decode value '${value}' of type ${typeof value}`);
  }

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  public static filterOrigin (meta?: FunctionMetadataV7): FunctionArgumentMetadata[] {
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
  //
  // @deprecated This method does a lookup in the methods' metadata stored
  // globally with injectMethods. Pass the runtime metadata to the Call
  // constructor instead.
  public static findFunction (callIndex: Uint8Array): CallFunction {
    assert(Object.keys(injected).length > 0, 'Calling Call.findFunction before extrinsics have been injected.');

    return injected[callIndex.toString()] || FN_UNKNOWN;
  }

  /**
 * Retrieves a function from the runtime metadata
 * @param callIndex Call index of the function, e.g. new Uint8Array([3, 0])
 * @param metadata Runtime metadata, e.g. api.runtimeMetadata
 */
  private static findByCallIndex (callIndex: Uint8Array, metadata: Metadata): CallFunction | undefined {
    const moduleMethods = extrinsicsFromMetadata(metadata);

    const methods: CallFunction[] = ([] as CallFunction[]).concat(
      ...Object.values(moduleMethods).map((methods): CallFunction[] => Object.values(methods))
    );

    return methods.find((method: CallFunction): boolean =>
      method.callIndex.toString() === callIndex.toString());
  }

  /**
   * Get a mapping of `argument name -> argument type` for the function, from
   * its metadata.
   *
   * @param meta - The function metadata used to get the definition.
   */
  private static getArgsDef (meta: FunctionMetadataV7): ArgsDef {
    return Call.filterOrigin(meta).reduce((result, { name, type }): ArgsDef => {
      const Type = getTypeClass(
        getTypeDef(type.toString())
      );
      result[name.toString()] = Type;

      return result;
    }, {} as unknown as ArgsDef);
  }

  /**
   * This is called/injected by the API on init, allowing a snapshot of
   * the available system extrinsics to be used in lookups
   *
   * deprecated: Instead of injecting the methods' metadata globally, call the
   * Method constructor with the function or runtime metadata.
   */
  public static injectMethods (moduleMethods: ModulesWithCalls): void {
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
   * @description The argument definitions
   */
  public get argsDef (): ArgsDef {
    return Call.getArgsDef(this.meta);
  }

  /**
   * @description The encoded `[sectionIndex, methodIndex]` identifier
   */
  public get callIndex (): Uint8Array {
    return (this.get('callIndex') as CallIndex).toU8a();
  }

  /**
   * @description The encoded data
   */
  public get data (): Uint8Array {
    return (this.get('args') as Struct).toU8a();
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
  public get meta (): FunctionMetadataV7 {
    return this._meta;
  }

  /**
   * @description Returns the name of the method
   */
  public get methodName (): string {
    return this._method;
  }

  /**
   * @description Returns the module containing the method
   */
  public get sectionName (): string {
    return this._section;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Call';
  }
}
