// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */
import type { Definitions } from '../../types';

export default {
    rpc: {},
    types: {
      TokenId: 'u32',
      Rarity: {
          _enum:[
            'Common',
            'Uncommon',
            'Rare',
            'Mythical',
            'Legendary'
          ]
      },
      Socket: {
          _enum:[
            'Head',
            'Body',
            'LegLeft',
            'LegRight',
            'ArmLeft',
            'ArmRight',
            'Weapon'
          ]
      },
      Params: {
        strength: "u8",
        agility: "u8",
        intelligence: "u8"
      },
      Token: {
        rarity: 'Rarity',
        socket: 'Socket',
        params: 'Params'
      }
    }
  } as Definitions;