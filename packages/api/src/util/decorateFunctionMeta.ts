// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type MetaDecoration = {
  callIndex?: Uint8Array,
  meta: any,
  method: string,
  section: string,
  toJSON: () => any
};

export default function decorateFunctionMeta (input: MetaDecoration, output: MetaDecoration): MetaDecoration {
  output.meta = input.meta;
  output.method = input.method;
  output.section = input.section;
  output.toJSON = input.toJSON;

  if (input.callIndex) {
    output.callIndex = input.callIndex;
  }

  return output;
}
