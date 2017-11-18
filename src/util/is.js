// ISC, Copyright 2017 Jaco Greeff
// @flow

function isFunction (value: any): boolean {
  return typeof value === 'function';
}

function isNumber (value: any): boolean {
  return typeof value === 'number';
}

function isUndefined (value: any): boolean {
  return typeof value === 'undefined';
}

module.exports = {
  isFunction,
  isNumber,
  isUndefined
};
