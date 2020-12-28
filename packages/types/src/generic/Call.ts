// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { FunctionArgumentMetadataLatest, FunctionMetadataLatest } from '../interfaces/metadata';
import type { AnyJson, AnyTuple, AnyU8a, ArgsDef, CallBase, CallFunction, IMethod, Registry } from '../types';

import { isHex, isObject, isU8a, u8aToU8a } from '@polkadot/util';

import { Struct } from '../codec/Struct';
import { U8aFixed } from '../codec/U8aFixed';
import { getTypeClass } from '../create/createClass';
import { getTypeDef } from '../create/getTypeDef';

interface DecodeMethodInput {
  args: unknown;
  // eslint-disable-next-line no-use-before-define
  callIndex: GenericCallIndex | Uint8Array;
}

interface DecodedMethod extends DecodeMethodInput {
  argsDef: ArgsDef;
  meta: FunctionMetadataLatest;
}

/**
 * Get a mapping of `argument name -> argument type` for the function, from
 * its metadata.
 *
 * @param meta - The function metadata used to get the definition.
 * @internal
 */
function getArgsDef (registry: Registry, meta: FunctionMetadataLatest): ArgsDef {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return GenericCall.filterOrigin(meta).reduce((result, { name, type }): ArgsDef => {
    const Type = getTypeClass(registry, getTypeDef(type));

    result[name.toString()] = Type;

    return result;
  }, {} as ArgsDef);
}

/** @internal */
function decodeCallViaObject (registry: Registry, value: DecodedMethod, _meta?: FunctionMetadataLatest): DecodedMethod {
  // we only pass args/methodsIndex out
  const { args, callIndex } = value;

  // Get the correct lookupIndex
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const lookupIndex = callIndex instanceof GenericCallIndex
    ? callIndex.toU8a()
    : callIndex;

  // Find metadata with callIndex
  const meta = _meta || registry.findMetaCall(lookupIndex).meta;

  return {
    args,
    argsDef: getArgsDef(registry, meta),
    callIndex,
    meta
  };
}

/** @internal */
function decodeCallViaU8a (registry: Registry, value: Uint8Array, _meta?: FunctionMetadataLatest): DecodedMethod {
  // We need 2 bytes for the callIndex
  const callIndex = new Uint8Array(2);

  callIndex.set(value.subarray(0, 2), 0);

  // Find metadata with callIndex
  const meta = _meta || registry.findMetaCall(callIndex).meta;

  return {
    args: value.subarray(2),
    argsDef: getArgsDef(registry, meta),
    callIndex,
    meta
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
 * @internal
 */
function decodeCall (registry: Registry, value: unknown | DecodedMethod | Uint8Array | string = new Uint8Array(), _meta?: FunctionMetadataLatest): DecodedMethod {
  if (isHex(value) || isU8a(value)) {
    return decodeCallViaU8a(registry, u8aToU8a(value as string), _meta);
  } else if (isObject(value) && value.callIndex && value.args) {
    return decodeCallViaObject(registry, value as DecodedMethod, _meta);
  }

  throw new Error(`Call: Cannot decode value '${value as string}' of type ${typeof value}`);
}

/**
 * @name GenericCallIndex
 * @description
 * A wrapper around the `[sectionIndex, methodIndex]` value that uniquely identifies a method
 */
export class GenericCallIndex extends U8aFixed {
  constructor (registry: Registry, value?: AnyU8a) {
    super(registry, value, 16);
  }
}

/**
 * @name GenericCall
 * @description
 * Extrinsic function descriptor
 */
export class GenericCall<A extends AnyTuple = AnyTuple> extends Struct implements CallBase<A> {
  protected _meta: FunctionMetadataLatest;

  constructor (registry: Registry, value: unknown, meta?: FunctionMetadataLatest) {
    const decoded = decodeCall(registry, value, meta);

    try {
      super(registry, {
        callIndex: GenericCallIndex,
        // eslint-disable-next-line sort-keys
        args: Struct.with(decoded.argsDef)
      }, decoded);
    } catch (error) {
      let method = 'unknown.unknown';

      try {
        const c = registry.findMetaCall(decoded.callIndex);

        method = `${c.section}.${c.method}`;
      } catch (error) {
        // ignore
      }

      throw new Error(`Call: failed decoding ${method}:: ${(error as Error).message}`);
    }

    this._meta = decoded.meta;
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

  /**
   * @description The arguments for the function call
   */
  public get args (): A {
    // FIXME This should return a Struct instead of an Array
    return [...(this.get('args') as Struct).values()] as A;
  }

  /**
   * @description The argument definitions
   */
  public get argsDef (): ArgsDef {
    return getArgsDef(this.registry, this.meta);
  }

  /**
   * @description The encoded `[sectionIndex, methodIndex]` identifier
   */
  public get callIndex (): Uint8Array {
    return (this.get('callIndex') as GenericCallIndex).toU8a();
  }

  /**
   * @description The encoded data
   */
  public get data (): Uint8Array {
    return (this.get('args') as Struct).toU8a();
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
  public get method (): string {
    return this.registry.findMetaCall(this.callIndex).method;
  }

  /**
   * @description Returns the module containing the method
   */
  public get section (): string {
    return this.registry.findMetaCall(this.callIndex).section;
  }

  /**
   * @description Checks if the source matches this in type
   */
  public is (other: IMethod<AnyTuple>): other is IMethod<A> {
    return other.callIndex[0] === this.callIndex[0] && other.callIndex[1] === this.callIndex[1];
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExpanded?: boolean): Record<string, AnyJson> {
    let call: CallFunction | undefined;

    try {
      call = this.registry.findMetaCall(this.callIndex);
    } catch (error) {
      // swallow
    }

    return {
      args: this.args.map((arg) => arg.toHuman(isExpanded)),
      // args: this.args.map((arg, index) => call
      //   ? { [call.meta.args[index].name.toString()]: arg.toHuman(isExpanded) }
      //   : arg.toHuman(isExpanded)
      // ),
      // callIndex: u8aToHex(this.callIndex),
      method: call?.method,
      section: call?.section,
      ...(isExpanded && call
        ? { documentation: call.meta.documentation.map((d) => d.toString()) }
        : {}
      )
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Call';
  }
}
