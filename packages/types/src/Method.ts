// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import { ExtrinsicFunction, Extrinsics } from '@polkadot/extrinsics/types';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import createType from './codec/createType';
import Base from './codec/Base';
import MethodIndex from './MethodIndex';
import { FunctionMetadata, FunctionArgumentMetadata } from './Metadata';

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
export default class Method extends MethodIndex {
  protected _args: Array<Base>;
  protected _data: Uint8Array;
  protected _meta: FunctionMetadata;

  constructor (index: Method | AnyU8a, meta?: FunctionMetadata, args?: Array<any>) {
    super(index);

    if (index instanceof Method) {
      this._args = args || index.args;
      this._meta = meta || index.meta;
    } else {
      this._args = args || [];
      this._meta = meta || Method.findFunction(this.callIndex).meta;
    }

    this._data = Method.encode(this._meta, this._args);

    // FIXME this is really not clean, we're saying that if the callIndex is
    // longer than 2 bytes, then we need to decode the rest too.
    if (isU8a(index) && index.length > 2) {
      this.fromU8a(index);
    }

  }

  static decodeMethod (meta: FunctionMetadata, data: Uint8Array): Array<Base> {
    let offset = 0;

    return Method.filterOrigin(meta).map(({ type }) => {
      const base = createType(type).fromU8a(data.subarray(offset));

      offset += base.byteLength();

      return base;
    });
  }

  static encode (meta: FunctionMetadata, args: Array<any>): Uint8Array {
    const encoded = Method.filterOrigin(meta).map(({ type }, index) =>
      createType(type, args[index]).toU8a()
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

  fromU8a (input: Uint8Array): Method {
    super.fromU8a(input);

    const startData = super.byteLength();

    this._meta = Method.findFunction(this.callIndex).meta;
    this._args = Method.decodeMethod(this._meta, input.subarray(startData));

    const argsLength = this._args.reduce((length, arg) => length + arg.byteLength(), 0);

    this._data = input.subarray(startData, startData + argsLength);

    return this;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      super.toU8a(isBare),
      this.data
    );
  }
}
