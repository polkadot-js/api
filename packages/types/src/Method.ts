// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import assert from '@polkadot/util/assert';
import { ExtrinsicFunction, Extrinsics } from '@polkadot/extrinsics/types';
import isObject from '@polkadot/util/is/object';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';

import { AnyU8a } from './types';
import createType from './codec/createType';
import Base from './codec/Base';
import { FunctionMetadata, FunctionArgumentMetadata } from './Metadata';
import MethodIndex from './MethodIndex';
import Struct from './codec/Struct';
import Vector from './codec/Vector';
import isHex from '@polkadot/util/is/hex';

const FN_UNKNOWN = {
  method: 'unknown',
  section: 'unknown'
} as ExtrinsicFunction;

const extrinsicFns: { [index: string]: ExtrinsicFunction } = {};

/**
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 * // FIXME This class should extend Struct({ callIndex, method })
 */
export default class Method extends Struct {
  protected _data: Uint8Array;
  protected _meta: FunctionMetadata;

  constructor (value: any, meta?: FunctionMetadata) {
    const decoded = Method.decodeMethod(value, meta);
    super({
      methodIndex: MethodIndex,
      args: Vector.with(Base)
    }, decoded);

    this._meta = decoded.meta;
    this._data =

      this._data = Method.encode(this._meta, this.raw.args);

  }

  static decodeMethod (value: AnyU8a, _meta?: FunctionMetadata): { args: any, meta: FunctionMetadata, methodIndex: AnyU8a } {
    if (isHex(value)) {
      return Method.decodeMethod(value, _meta);
    } else if (isU8a(value)) {
      // The first 2 bytes are the callIndex
      const callIndex = value.subarray(0, 2);
      // The other args are the concatenated arguments
      let offset = 2;
      const meta = _meta || Method.findFunction(callIndex).meta;

      const args = Method.filterOrigin(meta).map(({ type }) => {
        const base = createType(type, value.subarray(offset));

        offset += base.byteLength();

        return base;
      });

      return { args, methodIndex: callIndex, meta };
    } else if (isObject(value) && _meta && (value as any).methodIndex && (value as any).args) {
      return value;
    }

    throw new Error(`Method: cannot decode value "${value}".`);
  }

  static encode (meta: FunctionMetadata, args: Vector<Base>): Uint8Array {
    const encoded = Method.filterOrigin(meta).map(({ type }, index) =>
      createType(type, args.get(index)).toU8a()
    );

    return u8aConcat(...encoded);
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
    assert(Object.keys(extrinsicFns).length > 0, 'Called Method.findFunction before extrinsics have been injected.');
    return extrinsicFns[callIndex.toString()] || FN_UNKNOWN;
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

  byteLength (): number {
    return super.byteLength() + this.data.length;
  }

  get args (): Array<any> {
    return this._args;
  }

  get data (): Uint8Array {
    return this._data;
  }

  get meta (): FunctionMetadata {
    return this._meta;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      super.toU8a(isBare),
      this.data
    );
  }
}
