// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// https://github.com/paritytech/polkadot/pull/195
// 0xff, 32-byte account id
// 0xfe, 8-byte account index
// 0xfd, 4-byte account index
// 0xfc, 2-byte account index
// [0xf0...0xfb] (invalid, reserved for future use)
// [0x00...0xef] 1-byte account index (less than 0xf0)

const bytes8 = new Uint8Array([0xfe]);
const bytes4 = new Uint8Array([0xfd]);
const bytes2 = new Uint8Array([0xfc]);
const none = new Uint8Array([]);
const publicKey = new Uint8Array([0xff]);

export default {
  bytes8,
  bytes4,
  bytes2,
  none,
  publicKey
};
