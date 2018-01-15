// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition } from '../types';

const getHeader = require('./getHeader');

/**
  @summary Methods to retrieve chain data.
*/
module.exports = ({
  methods: {
    getHeader
  }
}: InterfaceDefinition);
