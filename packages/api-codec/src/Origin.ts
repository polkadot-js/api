// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './codec/Base';

// Where Origin occurs, it should be ignored, so it should never actually be constructed
export default class Origin extends Base {
  constructor () {
    super();

    throw new Error('Origin should not be constructed, it is only a placeholder for compatibility');
  }
}
