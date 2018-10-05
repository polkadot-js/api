// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import createType from './codec/createType';
import Base from './codec/Base';
import MethodIndex from './MethodIndex';
import { FunctionMetadata } from './Metadata';

/**
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Method extends MethodIndex {
  protected _args: Array<Base>;
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
  }

  get args () {
    return this._args;
  }

  get index () {
    return this.raw;
  }

  get meta () {
    return this._meta;
  }

  toU8a (isBare?: boolean): Uint8Array {
    // FIXME Even when decoded, we will need access to the meta
    const args = this.meta
      ? this.meta.arguments
        .filter((arg) =>
          arg.type.toString() !== 'Origin'
        )
        .map((argument, index) =>
          createType(argument.type, this.args[index]).toU8a(isBare)
        )
      : [];

    return u8aConcat(
      super.toU8a(isBare),
      ...args
    );
  }
}
