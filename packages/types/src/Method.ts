// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import createType from './codec/createType';
import Base from './codec/Base';
import MethodIndex from './MethodIndex';
import { FunctionMetadata, FunctionArgumentMetadata } from './Metadata';

/**
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Method extends MethodIndex {
  protected _args: Array<Base>;
  protected _data: Uint8Array;
  protected _meta: FunctionMetadata;

  constructor (index: Method | AnyU8a, meta: FunctionMetadata, args: Array<any>) {
    super(index);

    if (index instanceof Method) {
      this._args = args || index.args;
      this._meta = meta || index.meta;
    } else {
      this._args = args;
      this._meta = meta;
    }

    this._data = Method.encode(this._meta, this._args);
  }

  static decode (meta: FunctionMetadata, data: Uint8Array): Array<Base> {
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

  byteLength (): number {
    return super.byteLength() + this.data.length;
  }

  get args (): Array<any> {
    return this._args;
  }

  get data (): Uint8Array {
    return this._data;
  }

  get index (): Uint8Array {
    return this.raw;
  }

  get meta (): FunctionMetadata {
    return this._meta;
  }

  fromU8a (input: Uint8Array): Method {
    super.fromU8a(input);

    this._data = input.subarray(super.byteLength());

    return this;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      super.toU8a(isBare),
      this.data
    );
  }
}
