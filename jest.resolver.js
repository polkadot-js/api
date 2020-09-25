// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const path = require('path');

module.exports = function resolver (file, config) {
  if (file.includes('package.json')) {
    return path.join(config.basedir.replace('/src', '/'), file);
  }

  return config.defaultResolver(file, config);
};
