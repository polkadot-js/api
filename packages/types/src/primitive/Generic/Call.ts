// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { FunctionArgumentMetadataLatest, FunctionMetadataLatest } from '../../interfaces/metadata';
import { AnyU8a, ArgsDef, CallFunction, Codec, IMethod, Registry } from '../../types';

// FIXME Here we unfortunately cannot use Decorated, because that already calls
// fromMetadata for storage, and we have then a type import ordering problem
import extrinsicsFromMeta from '@polkadot/metadata/Decorated/extrinsics/fromMetadata';
import { assert, isHex, isObject, isU8a, u8aToU8a } from '@polkadot/util';

import Metadata from '@polkadot/metadata/Metadata';
import { getTypeDef, getTypeClass } from '../../codec/create';
import Struct from '../../codec/Struct';
import U8aFixed from '../../codec/U8aFixed';

interface DecodeMethodInput {
  args: any;
  callIndex: CallIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadataLatest;
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
  constructor (registry: Registry, value?: AnyU8a) {
    super(registry, value, 16);
  }
}

/**
 * @name Call
 * @description
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Call extends Struct implements IMethod {
  protected _meta: FunctionMetadataLatest;

  constructor (registry: Registry, value: any, meta?: FunctionMetadataLatest) {
    const decoded = Call.decodeCall(value, meta);

    super(registry, {
      callIndex: CallIndex,
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
  private static decodeCall (value: DecodedMethod | Uint8Array | string = new Uint8Array(), _meta?: FunctionMetadataLatest): DecodedMethod {
    if (isHex(value) || isU8a(value)) {
      return Call.decodeCallViaU8a(u8aToU8a(value), _meta);
    } else if (isObject(value) && value.callIndex && value.args) {
      return Call.decodeCallViaObject(value, _meta);
    }

    throw new Error(`Call: Cannot decode value '${value}' of type ${typeof value}`);
  }

  private static decodeCallViaObject (value: DecodedMethod, _meta?: FunctionMetadataLatest): DecodedMethod {
    // we only pass args/methodsIndex out
    const { args, callIndex } = value;

    // Get the correct lookupIndex
    const lookupIndex = callIndex instanceof CallIndex
      ? callIndex.toU8a()
      : callIndex;

    // Find metadata with callIndex
    const meta = _meta || Call.findFunction(lookupIndex).meta;

    return {
      args,
      argsDef: Call.getArgsDef(meta),
      meta,
      callIndex
    };
  }

  private static decodeCallViaU8a (value: Uint8Array, _meta?: FunctionMetadataLatest): DecodedMethod {
    // The first 2 bytes are the callIndex
    const callIndex = value.subarray(0, 2);

    // Find metadata with callIndex
    const meta = _meta || Call.findFunction(callIndex).meta;

    return {
      args: value.subarray(2),
      argsDef: Call.getArgsDef(meta),
      callIndex,
      meta
    };
  }

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  public static filterOrigin (meta?: FunctionMetadataLatest): FunctionArgumentMetadataLatest[] {
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
  public static findFunction (callIndex: Uint8Array): CallFunction {
    assert(Object.keys(injected).length > 0, 'Calling Call.findFunction before extrinsics have been injected.');

    return injected[callIndex.toString()] || FN_UNKNOWN;
  }

  /**
   * Get a mapping of `argument name -> argument type` for the function, from
   * its metadata.
   *
   * @param meta - The function metadata used to get the definition.
   */
  private static getArgsDef (meta: FunctionMetadataLatest): ArgsDef {
    return Call.filterOrigin(meta).reduce((result, { name, type }): ArgsDef => {
      const Type = getTypeClass(this.registry, getTypeDef(type.toString()));
      result[name.toString()] = Type;

      return result;
    }, {} as unknown as ArgsDef);
  }

  // FIXME Should take the Decorated metadata (`import Metadata from '@polkadot/metadata'`)
  // instead of the Codec Metadata
  // https://github.com/polkadot-js/api/pull/1463#pullrequestreview-300618425
  public static injectMetadata (metadata: Metadata): void {
    const extrinsics = extrinsicsFromMeta(metadata);

    Object.values(extrinsics).forEach((methods): void =>
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
  public get meta (): FunctionMetadataLatest {
    return this._meta;
  }

  /**
   * @description Returns the name of the method
   */
  public get methodName (): string {
    return Call.findFunction(this.callIndex).method;
  }

  /**
   * @description Returns the module containing the method
   */
  public get sectionName (): string {
    return Call.findFunction(this.callIndex).section;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Call';
  }
}
