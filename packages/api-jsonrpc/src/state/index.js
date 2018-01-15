// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition } from '../types';

const call = require('./call');
const getStorage = require('./getStorage');

/**
  @summary Query the state and state storage.
*/
module.exports = ({
  methods: {
    call,
    getStorage
  }
}: InterfaceDefinition);
