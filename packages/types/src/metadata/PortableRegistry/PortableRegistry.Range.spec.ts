// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '../../create/index.js';
import { PortableRegistry } from './index.js';

const registry = new TypeRegistry();
const types = [
  {
    id: 0,
    type: {
      def: {
        composite: {
          fields: [
            {
              name: 'start',
              type: 1,
              typeName: 'Idx'
            },
            {
              name: 'end',
              type: 1,
              typeName: 'Idx'
            }
          ]
        }
      },
      params: [
        {
          name: 'Idx',
          type: 1
        }
      ],
      path: ['Range']
    }
  },
  {
    id: 1,
    type: {
      def: {
        primitive: 'U32'
      }
    }
  }
];

describe('PortableRegistry/Range', (): void => {
  it('decodes a Range type', (): void => {
    expect(
      // override here is fine, Structs will decode correctly
      new PortableRegistry(registry, { types } as unknown as Uint8Array)
        .getTypeDef(0)
        .type
    ).toEqual('Range<u32>');
  });
});
