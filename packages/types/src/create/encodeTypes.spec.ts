// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeDefInfo } from '@polkadot/types-create';

import { TypeRegistry } from './registry';
import { encodeTypeDef } from '.';

describe('encodeTypeDef', (): void => {
  const registry = new TypeRegistry();

  it('correctly encodes a complex struct', (): void => {
    expect(
      JSON.parse(encodeTypeDef(registry, {
        info: TypeDefInfo.Struct,
        sub: [
          {
            info: TypeDefInfo.Plain,
            name: 'a',
            type: 'u32'
          },
          {
            info: TypeDefInfo.Struct,
            name: 'b',
            sub: [
              {
                info: TypeDefInfo.Plain,
                name: 'c',
                type: 'u32'
              },
              {
                info: TypeDefInfo.Vec,
                name: 'd',
                sub: {
                  info: TypeDefInfo.Plain,
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
        info: TypeDefInfo.Struct,
        sub: [
          {
            info: TypeDefInfo.Plain,
            name: 'a',
            type: 'u32'
          },
          {
            info: TypeDefInfo.Struct,
            name: 'b',
            sub: [
              {
                info: TypeDefInfo.Plain,
                name: 'c',
                type: 'u32'
              },
              {
                displayName: 'Something',
                info: TypeDefInfo.Vec,
                name: 'd',
                sub: {
                  info: TypeDefInfo.Plain,
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
        info: TypeDefInfo.Enum,
        sub: [
          {
            info: TypeDefInfo.Plain,
            name: 'a',
            type: 'u32'
          },
          {
            info: TypeDefInfo.Struct,
            name: 'b',
            sub: [
              {
                info: TypeDefInfo.Plain,
                name: 'c',
                type: 'u32'
              },
              {
                info: TypeDefInfo.Vec,
                name: 'd',
                sub: {
                  info: TypeDefInfo.Plain,
                  type: 'u32'
                },
                type: ''
              }
            ],
            type: ''
          },
          {
            info: TypeDefInfo.Enum,
            name: 'f',
            sub: [
              {
                info: TypeDefInfo.Plain,
                name: 'g',
                type: 'Null'
              },
              {
                info: TypeDefInfo.Plain,
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
        info: TypeDefInfo.Enum,
        sub: [
          {
            info: TypeDefInfo.Plain,
            name: 'a',
            type: 'u32'
          },
          {
            displayName: 'Something',
            info: TypeDefInfo.Struct,
            name: 'b',
            sub: [
              {
                info: TypeDefInfo.Plain,
                name: 'c',
                type: 'u32'
              },
              {
                info: TypeDefInfo.Vec,
                name: 'd',
                sub: {
                  info: TypeDefInfo.Plain,
                  type: 'u32'
                },
                type: ''
              }
            ],
            type: ''
          },
          {
            displayName: 'Option',
            info: TypeDefInfo.Option,
            name: 'e',
            sub: {
              displayName: 'Result',
              info: TypeDefInfo.Result,
              sub: [
                {
                  info: TypeDefInfo.Null,
                  type: ''
                },
                {
                  info: TypeDefInfo.Plain,
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
