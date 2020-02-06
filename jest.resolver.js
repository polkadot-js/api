// Copyright 2017-2020 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = function resolver (file, config) {
  if (file.includes('package.json')) {
    console.error(file, config);
    return path.join(config.basedir.replace('/src', '/'), file);
  }

  return config.defaultResolver(file, config);
};
