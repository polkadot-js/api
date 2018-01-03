// ISC, Copyright 2017-2018 Jaco Greeff
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
