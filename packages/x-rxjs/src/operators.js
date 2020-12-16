// Copyright 2017-2020 @polkadot/x-rxjs authors & contributors
// SPDX-License-Identifier: Apache-2.0

const operators = require('rxjs/operators');

Object.keys(operators).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === operators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return operators[key];
    }
  });
});
