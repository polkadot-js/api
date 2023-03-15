// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import { createType, TypeRegistry } from '../../create/index.js';

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
      deposit: 10000000000000, // '0x0000000000000000000009184e72a000',
      info: {
        additional: [],
        display: { raw: '0x9911' },
        email: { raw: '0x9933' },
        image: { none: null },
        legal: { raw: '0x9922' },
        pgpFingerprint: null,
        riot: { raw: '0x9955' },
        twitter: { raw: '0x9966' },
        web: { raw: '0x9944' }
      },
      judgements: []
    });
  });
});
