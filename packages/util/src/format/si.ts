// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type SiDef = {
  power: number,
  text: string,
  value: string
};

export const SI_MID = 8;

export const SI: Array<SiDef> = [
  { power: -24, value: 'y', text: 'yocto' },
  { power: -21, value: 'z', text: 'zepto' },
  { power: -18, value: 'a', text: 'atto' },
  { power: -15, value: 'f', text: 'femto' },
  { power: -12, value: 'p', text: 'pico' },
  { power: -9, value: 'n', text: 'nano' },
  { power: -6, value: 'µ', text: 'micro' },
  { power: -3, value: 'm', text: 'milli' },
  { power: 0, value: '-', text: 'Unit' }, // position 8
  { power: 3, value: 'k', text: 'Kilo' },
  { power: 6, value: 'M', text: 'Mega' },
  { power: 9, value: 'G', text: 'Giga' },
  { power: 12, value: 'T', text: 'Tera' },
  { power: 15, value: 'P', text: 'Peta' },
  { power: 18, value: 'E', text: 'Exa' },
  { power: 21, value: 'Z', text: 'Zeta' },
  { power: 24, value: 'Y', text: 'Yotta' }
];

export function calcSi (text: string, decimals: number): SiDef {
  return SI[(SI_MID - 1) + Math.ceil((text.length - decimals) / 3)] || SI[SI.length - 1];
}

// Given a SI type (e.g. k, m, Y) find the SI definition
export function findSi (type: string): SiDef {
  // use a loop here, better RN support (which doesn't have [].find)
  for (let i = 0; i < SI.length; i++) {
    if (SI[i].value === type) {
      return SI[i];
    }
  }

  return SI[SI_MID];
}
