// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry, createType } from '../../codec/create';

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
        '0399110399220399440399550399330000'
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
        web: { Raw: '0x9944' }
      },
      judgements: []
    });
  });
});
