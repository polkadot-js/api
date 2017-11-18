// ISC, Copyright 2017 Jaco Greeff
// @flow

function addHexPrefix (value: ?string): string {
  if (value && hasHexPrefix(value)) {
    return value;
  }

  return `0x${value || ''}`;
}

function hasHexPrefix (value: ?string): boolean {
  return !!(value && value.substr(0, 2) === '0x');
}

function stripHexPrefix (value: ?string): string {
  if (value && hasHexPrefix(value)) {
    return value.substr(2);
  }

  return value || '';
}

module.exports = {
  addHexPrefix,
  hasHexPrefix,
  stripHexPrefix
};
