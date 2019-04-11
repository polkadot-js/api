// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import isUndefined from '../is/undefined';
import { SI, SI_MID, SiDef, calcSi, findSi } from './si';
import formatDecimal from './formatDecimal';

type Defaults = {
  decimals: number,
  unit: string
};

interface BalanceFormatter {
  (input?: number | string | BN, withSi?: boolean, decimals?: number): string;
  calcSi (text: string, decimals?: number): SiDef;
  findSi (type: string): SiDef;
  getDefaults (): Defaults;
  getOptions (decimals?: number): Array<SiDef>;
  setDefaults (defaults: Partial<Defaults>): void;
}

const DEFAULT_DECIMALS = 0;
const DEFAULT_UNIT = SI[SI_MID].text;

let defaultDecimals = DEFAULT_DECIMALS;
let defaultUnit = DEFAULT_UNIT;

// Formats a string/number with <prefix>.<postfix><type> notation
function _formatBalance (input?: number | string | BN, withSi: boolean = true, decimals: number = defaultDecimals): string {
  const text = (input || '').toString();

  if (text.length === 0 || text === '0') {
    return '0';
  }

  // NOTE We start at midpoint (8) minus 1 - this means that values display as
  // 123.456 instead of 0.123k (so always 6 relevant). Additionally we us ceil
  // so there are at most 3 decimal before the decimal seperator
  const si = calcSi(text, decimals);
  const mid = text.length - (decimals + si.power);
  const prefix = text.substr(0, mid);
  const postfix = `${text.substr(mid)}000`.substr(0, 3);
  const units = withSi
    ? (
      si.value === '-'
        ? ` ${si.text}`
        : `${si.value} ${SI[SI_MID].text}`
    )
    : '';

  return `${formatDecimal(prefix || '0')}.${postfix}${units}`;
}

const formatBalance = _formatBalance as BalanceFormatter;

formatBalance.calcSi = (text: string, decimals: number = defaultDecimals): SiDef =>
  calcSi(text, decimals);
formatBalance.findSi = findSi;

formatBalance.getDefaults = (): Defaults => {
  return {
    decimals: defaultDecimals,
    unit: defaultUnit
  };
};

// get allowable options to display in a dropdown
formatBalance.getOptions = (decimals: number = defaultDecimals): Array<SiDef> => {
  return SI.filter(({ power }) =>
    power < 0
      ? (decimals + power) >= 0
      : true
  );
};

// Sets the default decimals to use for formatting (ui-wide)
formatBalance.setDefaults = ({ decimals, unit }: Partial<Defaults>): void => {
  defaultDecimals = isUndefined(decimals) ? defaultDecimals : decimals;
  defaultUnit = isUndefined(unit) ? defaultUnit : unit;

  SI[SI_MID].text = defaultUnit;
};

export default formatBalance;
