// ISC, Copyright 2017 Jaco Greeff
// @flow

const { addHexPrefix, hasHexPrefix, stripHexPrefix } = require('@polkadot/util/lib/hex');

const H64_ZERO: string = '00000000000000000000000000000000';
const H128_ZERO: string = `${H64_ZERO}${H64_ZERO}`;
const H256_ZERO: string = `${H128_ZERO}${H128_ZERO}`;
// const H512_ZERO: string = `${H256_ZERO}${H256_ZERO}`;

function leftHexPad (value: ?string, bitLength: number): string {
  const length = 2 * bitLength / 8;

  if (hasHexPrefix(value)) {
    value = stripHexPrefix(value);
  }

  return addHexPrefix(`${H256_ZERO}${value || ''}`.slice(-length));
}

function formatH160 (value: ?string): string {
  return leftHexPad(value, 160);
}

function formatH256 (value: ?string): string {
  return leftHexPad(value, 256);
}

module.exports = {
  leftHexPad,
  formatH160,
  formatH256
};
