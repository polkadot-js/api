// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const OFF_PARENT_HASH = 0;
const OFF_NUMBER = OFF_PARENT_HASH + 32;
const OFF_STATE_ROOT = OFF_NUMBER + 8;
const OFF_TX_ROOT = OFF_STATE_ROOT + 32;
const OFF_DIGEST = OFF_TX_ROOT + 32;

export {
  OFF_PARENT_HASH,
  OFF_NUMBER,
  OFF_STATE_ROOT,
  OFF_TX_ROOT,
  OFF_DIGEST
};
