// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { FunctionArgumentMetadataLatest, FunctionMetadataLatest } from '../interfaces/metadata';
import { AnyJson, AnyU8a, ArgsDef, CallFunction, Codec, Constructor, IMethod, Registry } from '../types';

import { isHex, isObject, isU8a, logger, u8aToHex, u8aToU8a } from '@polkadot/util';

import { getTypeDef, getTypeClass } from '../create';
import { Struct } from '../codec/Struct';
import { U8aFixed } from '../codec/U8aFixed';

const l = logger('type/Call');

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

function extractMeta (registry: Registry, callIndex: Uint8Array, _meta?: FunctionMetadataLatest): FunctionMetadataLatest {
  try {
    return _meta || registry.findMetaCall(callIndex).meta;
  } catch (error) {
    l.error(`Returning invalid: ${(error as Error).message}`);

    return registry.createType('FunctionMetadataLatest', {
      args: [],
      documentation: [`Unable to decode invalid ${u8aToHex(callIndex)}`],
      name: 'unknown'
    });
  }
}

function extractArgs (registry: Registry, meta: FunctionMetadataLatest): Record<string, Constructor<Codec>> {
  try {
    return getArgsDef(registry, meta);
  } catch (error) {
    l.error(`Returning invalid arguments: ${(error as Error).message}`);

    return {};
  }
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
  const meta = extractMeta(registry, lookupIndex, _meta);

  return {
    args,
    argsDef: extractArgs(registry, meta),
    callIndex,
    meta
  };
}

/** @internal */
function decodeCallViaU8a (registry: Registry, value: Uint8Array, _meta?: FunctionMetadataLatest): DecodedMethod {
  // We need 2 bytes for the callIndex
  const callIndex = new Uint8Array(2);

  callIndex.set(value.subarray(0, 2), 0);

  const meta = extractMeta(registry, callIndex, _meta);

  return {
    args: value.subarray(2),
    argsDef: extractArgs(registry, meta),
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
export class GenericCall extends Struct implements IMethod {
  protected _meta: FunctionMetadataLatest;

  constructor (registry: Registry, value: unknown, meta?: FunctionMetadataLatest) {
    const decoded = decodeCall(registry, value, meta);

    super(registry, {
      callIndex: GenericCallIndex,
      // eslint-disable-next-line sort-keys
      args: Struct.with(decoded.argsDef)
    }, decoded);

    this._meta = decoded.meta;
  }

  // If the extrinsic function has an argument of type `Origin`, we ignore it
  public static filterOrigin (meta?: FunctionMetadataLatest): FunctionArgumentMetadataLatest[] {
    return meta
      ? meta.args.filter(({ type }) => type.toString() !== 'Origin')
      : [];
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
    return this.registry.findMetaCall(this.callIndex).method;
  }

  /**
   * @description Returns the name of the method
   */
  public get method (): string {
    return this.methodName;
  }

  /**
   * @description Returns the module containing the method
   */
  public get sectionName (): string {
    return this.registry.findMetaCall(this.callIndex).section;
  }

  /**
   * @description Returns the module containing the method
   */
  public get section (): string {
    return this.sectionName;
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
      method: call?.method || 'unknown',
      section: call?.section || 'unknown',
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
