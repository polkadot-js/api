// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
import BN from 'bn.js';
import { Param, Params } from '@polkadot/params/types';
import { Storage$Key$Value } from '../types';

import sizes from '@polkadot/primitives/sizes';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aToU8a from '@polkadot/util/u8a/toU8a';
import u8aFromString from '@polkadot/util/u8a/fromString';
import addressDecode from '@polkadot/util-keyring/address/decode';

export default function formatParams (params: Params, values: Storage$Key$Value[] = []): Array<Uint8Array> {
  const paramTypes = Object.values(params).map(({ type }: Param) => type);

  return values.map(
    (value: any, index: number): Uint8Array => {
      try {
        if (Array.isArray(paramTypes[index])) {
          throw new Error('Unable to handle Array type');
        }

        const type = paramTypes[index];

        switch (type) {
          case 'AccountId':
            return addressDecode(value as Uint8Array);

          case 'Balance':
            return bnToU8a(value as BN, sizes.Balance, true);

          case 'u128':
            return bnToU8a(value as BN, 128, true);

          case 'BlockNumber':
          case 'Gas':
          case 'u64':
            return bnToU8a(value as BN, 64, true);

          case 'bool':
            return new Uint8Array([value ? 1 : 0]);

          case 'Bytes':
          case 'Call':
          case 'CandidateReceipt':
          case 'Code':
          case 'Digest':
          case 'Hash':
          case 'Header':
          case 'KeyValue':
          case 'StorageKey':
          case 'StorageKeyValue':
          case 'StorageResult':
          case 'StorageResultSet':
          case 'MisbehaviorReport':
          case 'Proposal':
          case 'Signature':
            return u8aToU8a(value as Uint8Array);

          case 'AccountIndex':
            return bnToU8a(value as BN, sizes.AccountIndex, true);

          case 'ParachainId':
          case 'PropIndex':
          case 'ReferendumIndex':
          case 'SessionKey':
          case 'VoteIndex':
          case 'VoteThreshold':
          case 'u32':
            return bnToU8a(value as BN, 32, true);

          case 'String':
            return u8aFromString(value as string);

          case 'Timestamp':
            return bnToU8a((value as Date).getTime(), 64, true);

          default:
            throw new Error('Unable to find handler');
        }
      } catch (error) {
        console.error('formatParams', value, index, paramTypes[index], error);

        throw error;
      }
    }
  );
}
