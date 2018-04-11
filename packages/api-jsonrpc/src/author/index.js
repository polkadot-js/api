// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition } from '../types';

const submitExtrinsic = require('./submitExtrinsic');

/**
  @summary Methods to work with authors.
*/
module.exports = ({
  methods: {
    submitExtrinsic
  }
}: InterfaceDefinition);
