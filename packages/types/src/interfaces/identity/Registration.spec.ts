// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry, createType } from '../../create';

const registry = new TypeRegistry();

describe('Registration', (): void => {
  it('decodes a Registration', (): void => {
    expect(
      createType(
        registry, 'Registration',
        '0x' +
        '00' + // no judgements
        '00a0724e180900000000000000000000' + // balance
        '00' + // no length
        '039911039922039944039955039933000003996600'
      ).toJSON()
    ).toEqual({
      deposit: 10000000000000,
      info: {
        additional: [],
        display: { Raw: '0x9911' },
        email: { Raw: '0x9933' },
        image: { None: null },
        legal: { Raw: '0x9922' },
        pgpFingerprint: null,
        riot: { Raw: '0x9955' },
        twitter: { Raw: '0x9966' },
        web: { Raw: '0x9944' }
      },
      judgements: []
    });
  });
});
