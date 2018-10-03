// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createType from '@polkadot/types/codec/createType';
import { ExtrinsicIndex } from '@polkadot/types/index';
import { FunctionMetadata } from '@polkadot/types/Metadata';
import u8aConcat from '@polkadot/util/u8a/concat';

/**
 * Extrinsic function descriptor, as defined in
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 */
export default class Descriptor {
  protected _args: any[];
  protected _index: ExtrinsicIndex; // This is the extrinsic's index
  protected _meta: FunctionMetadata;

  constructor (index: ExtrinsicIndex, meta: FunctionMetadata, args: any[]) {
    this._args = args;
    this._index = index;
    this._meta = meta;
  }

  get args () {
    return this._args;
  }

  get index () {
    return this._index;
  }

  get meta () {
    return this._meta;
  }

  toU8a () {
    // If the extrinsic function has an argument of type `Origin`, we ignore it
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    const expectedArgs = this._meta.arguments.filter((arg) => arg.type.toString() !== 'Origin');

    return u8aConcat(
      this._index.toU8a(),
      ...expectedArgs.map((argument, index) =>
        createType(argument.type, this._args[index]).toU8a()
      )
    );
  }
}
