// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { encodeTypeDef } from './encodeTypes';
import { TypeRegistry } from './registry';

describe('encodeTypeDef', (): void => {
  const registry = new TypeRegistry();

  it('correctly encodes a complex struct', (): void => {
    expect(
      JSON.parse(encodeTypeDef(registry, {
        info: 'Struct',
        sub: [
          {
            info: 'Plain',
            name: 'a',
            type: 'u32'
          },
          {
            info: 'Struct',
            name: 'b',
            sub: [
              {
                info: 'Plain',
                name: 'c',
                type: 'u32'
              },
              {
                info: 'Vec',
                name: 'd',
                sub: {
                  info: 'Plain',
                  type: 'u32'
                },
                type: ''
              }
            ],
            type: ''
          }
        ],
        type: ''
      }))
    ).toEqual({
      a: 'u32',
      b: '{"c":"u32","d":"Vec<u32>"}'
    });
  });

  it('correctly encodes a complex struct (named)', (): void => {
    expect(
      JSON.parse(encodeTypeDef(registry, {
        info: 'Struct',
        sub: [
          {
            info: 'Plain',
            name: 'a',
            type: 'u32'
          },
          {
            info: 'Struct',
            name: 'b',
            sub: [
              {
                info: 'Plain',
                name: 'c',
                type: 'u32'
              },
              {
                displayName: 'Something',
                info: 'Vec',
                name: 'd',
                sub: {
                  info: 'Plain',
                  type: 'u32'
                },
                type: ''
              }
            ],
            type: ''
          }
        ],
        type: ''
      }))
    ).toEqual({
      a: 'u32',
      b: '{"c":"u32","d":"Something"}'
    });
  });

  it('correctly encodes a complex enum', (): void => {
    expect(
      JSON.parse(encodeTypeDef(registry, {
        info: 'Enum',
        sub: [
          {
            info: 'Plain',
            name: 'a',
            type: 'u32'
          },
          {
            info: 'Struct',
            name: 'b',
            sub: [
              {
                info: 'Plain',
                name: 'c',
                type: 'u32'
              },
              {
                info: 'Vec',
                name: 'd',
                sub: {
                  info: 'Plain',
                  type: 'u32'
                },
                type: ''
              }
            ],
            type: ''
          },
          {
            info: 'Enum',
            name: 'f',
            sub: [
              {
                info: 'Plain',
                name: 'g',
                type: 'Null'
              },
              {
                info: 'Plain',
                name: 'h',
                type: 'Null'
              }
            ],
            type: ''
          }
        ],
        type: ''
      }))
    ).toEqual({
      _enum: {
        a: 'u32',
        b: '{"c":"u32","d":"Vec<u32>"}',
        f: '{"_enum":["g","h"]}'
      }
    });
  });

  it('correctly encodes a complex enum (named)', (): void => {
    expect(
      JSON.parse(encodeTypeDef(registry, {
        info: 'Enum',
        sub: [
          {
            info: 'Plain',
            name: 'a',
            type: 'u32'
          },
          {
            displayName: 'Something',
            info: 'Struct',
            name: 'b',
            sub: [
              {
                info: 'Plain',
                name: 'c',
                type: 'u32'
              },
              {
                info: 'Vec',
                name: 'd',
                sub: {
                  info: 'Plain',
                  type: 'u32'
                },
                type: ''
              }
            ],
            type: ''
          },
          {
            displayName: 'Option',
            info: 'Option',
            name: 'e',
            sub: {
              displayName: 'Result',
              info: 'Result',
              sub: [
                {
                  info: 'Null',
                  type: ''
                },
                {
                  info: 'Plain',
                  type: 'u32'
                }
              ],
              type: ''
            },
            type: ''
          }
        ],
        type: ''
      }))
    ).toEqual({
      _enum: {
        a: 'u32',
        b: 'Something',
        e: 'Option<Result<Null, u32>>'
      }
    });
  });
});
