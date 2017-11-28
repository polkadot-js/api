// ISC, Copyright 2017 Jaco Greeff
// @flow

const { formatH160 } = require('./hex');

// TODO: Currently the format assumes 160-bit values (like Ethereum)
// this will probably change along the way as things get firmed up
module.exports = function format (value: ?string): string {
  return formatH160(value);
};
