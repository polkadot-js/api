// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

export const AllHashers = {
  Blake2_128: null, // eslint-disable-line camelcase
  Blake2_256: null, // eslint-disable-line camelcase
  Blake2_128Concat: null, // eslint-disable-line camelcase
  Twox128: null,
  Twox256: null,
  Twox64Concat: null,
  // new in v11
  Identity: null
} as const;
