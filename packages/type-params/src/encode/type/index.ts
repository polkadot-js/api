// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param$Type } from '../../types';

import addrPrefixes from '@polkadot/extrinsics/codec/encode/prefixes';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aFromString from '@polkadot/util/u8a/fromString';
import u8aToU8a from '@polkadot/util/u8a/toU8a';
import addressDecode from '@polkadot/util-keyring/address/decode';
import defaultSizes from '@polkadot/primitives/sizes';

import sizes from '../../sizes';
import keyValue from './keyValue';
import storageKey from './storageKey';

export default function encodeType (type: Param$Type, value: any, version: EncodingVersions): Uint8Array {
  try {
    switch (type) {
      case 'AccountId':
        return u8aConcat(
          version === 'poc-1'
            ? addrPrefixes.none
            : addrPrefixes.publicKey,
          addressDecode(value)
        );

      case 'Balance':
        return bnToU8a(value, sizes.Balance.get(version) || defaultSizes.Balance, true);

      case 'BlockNumber':
      case 'Gas':
      case 'SessionKey':
      case 'u64':
        return bnToU8a(value, 64, true);

      case 'bool':
        return bnToU8a(value ? 1 : 0, 8, true);

      case 'Bytes':
      case 'Code':
        return u8aToU8a(value);

      // FIXME Here we should pass through the actual objects
      case 'Call':
      case 'CandidateReceipt':
      case 'Digest':
      case 'Header':
      case 'MisbehaviorReport':
      case 'Proposal':
        return u8aToU8a(value);

      // TODO Here we should do actual length conversions, i.e. 256/512
      case 'Hash':
      case 'Signature':
        return u8aToU8a(value);

      case 'AccountIndex':
        return bnToU8a(value, sizes.AccountIndex.get(version) || defaultSizes.Balance, true);

      case 'KeyValue':
      case 'StorageKeyValue':
        return keyValue(value);

      case 'ParachainId':
      case 'PropIndex':
      case 'ReferendumIndex':
      case 'VoteIndex':
      case 'u32':
        return bnToU8a(value, 32, true);

      case 'StorageKey':
        return storageKey(value);

      case 'String':
        return (() => {
          const u8a = u8aFromString(value);

          return u8aConcat(
            bnToU8a(u8a.length, 32, true),
            u8a
          );
        })();

      case 'Timestamp':
        if (value instanceof Date) {
          value = Math.ceil(value.getTime() / 1000);
        }

        return bnToU8a(value, 64, true);

      case 'u128':
        return bnToU8a(value, 128, true);

      // TODO enums?
      case 'VoteThreshold':
        return bnToU8a(value || 0, 8, true);

      default:
        // tslint:disable-next-line
        (type as never);
        throw new Error(`No formatter for ${type}`);
    }
  } catch (error) {
    console.error('Failed encoding', type, 'with', value, error);

    throw error;
  }
}
