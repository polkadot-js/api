// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';

import { createType } from './codec';
import Extrinsic from './Extrinsic';
import ExtrinsicIndex from './ExtrinsicIndex';
import { FunctionMetadata } from './Metadata';

// Representation of an UncheckedExtrinsic in the system.
export default class UncheckedExtrinsic extends Extrinsic {
  protected _args: any[];
  protected _index: ExtrinsicIndex; // This is the extrinsic's index
  protected _meta: FunctionMetadata;

  constructor (index: ExtrinsicIndex, meta: FunctionMetadata, args: any[]) {
    super(UncheckedExtrinsic.encode(index, meta, args));
    this._args = args;
    this._index = index;
    this._meta = meta;
  }

  static encode (index: ExtrinsicIndex, meta: FunctionMetadata, args: any[]) {
    // If the extrinsic function has an argument of type `Origin`, we ignore it
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    const expectedArgs = meta.arguments.filter((arg) => arg.type.toString() !== 'Origin');

    return u8aConcat(
      index.toU8a(),
      ...expectedArgs.map((argument, index) => {
        const type = argument.type.toString(); // Argument type, as string

        return createType(type, args[index]).toU8a();
      })
    );
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
}
