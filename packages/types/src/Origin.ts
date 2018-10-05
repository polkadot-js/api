// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// Where Origin occurs, it should be ignored, so it should never actually be constructed
export default class Origin {
  constructor () {
    throw new Error('Origin should not be constructed, it is only a placeholder for compatibility');
  }
}
