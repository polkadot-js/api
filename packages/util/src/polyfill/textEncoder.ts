// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// tslint:disable-next-line
if (typeof TextEncoder === 'undefined') {
  try {
    // @ts-ignore For the Node.js case
    global.TextEncoder = require('util').TextEncoder;
  } catch (error) {
    // noop
  }
}
