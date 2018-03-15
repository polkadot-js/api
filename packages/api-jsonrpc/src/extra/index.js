// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition } from '../types';

const getBlockNumber = require('./getBlockNumber');
const getClientTime = require('./getClientTime');

/**
  @summary Extended methods not available in all clients.
*/
module.exports = ({
  methods: {
    getBlockNumber,
    getClientTime
  }
}: InterfaceDefinition);
