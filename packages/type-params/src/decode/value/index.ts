// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param$Decoded, Param$Type } from '../../types';
import { Decoder } from '../types';

import defaultSizes from '@polkadot/primitives/sizes';
import toU8a from '@polkadot/util/u8a/toU8a';
import isNull from '@polkadot/util/is/null';
import isUndefined from '@polkadot/util/is/undefined';

import sizes from '../../sizes';
import accountId from './accountId';
import bool from './bool';
import bn from './bn';
import byte from './byte';
import bytes from './bytes';
import code from './code';
import digest from './digest';
import header from './header';
import keyValue from './keyValue';
import method from './method';
import misbehavior from './misbehavior';
import passThrough from './passThrough';
import string from './string';
import time from './time';
import u8a from './u8a';

export default function decodeValue (decode: Decoder, type: Param$Type, _input: Uint8Array | string | null | undefined, version: EncodingVersions, isStorage: boolean): Param$Decoded {
  const input: Uint8Array | null | undefined = isUndefined(_input) || isNull(_input)
    ? _input
    : toU8a(_input);

  try {
    switch (type) {
      // TODO Pass back the actual address, not publicKey?
      case 'AccountId':
        return accountId(input, version, isStorage);

      case 'AccountIndex':
        return bn(input, sizes.AccountIndex.get(version) || defaultSizes.AccountIndex);

      case 'Balance':
        return bn(input, sizes.Balance.get(version) || defaultSizes.Balance);

      case 'BlockNumber':
      case 'Gas':
      case 'SessionKey':
      case 'u64':
        return bn(input, 64);

      case 'bool':
        return bool(input);

      case 'Bytes':
      case 'StorageKey':
        return bytes(input);

      case 'Call':
      case 'Proposal':
        return method(decode, input, type === 'Call', version, isStorage);

      case 'Code':
        return code(input);

      case 'CandidateReceipt':
        return passThrough(input);

      case 'Digest':
        return digest(input);

      case 'Header':
        return header(input);

      case 'Hash':
        return u8a(input, 256, 0);

      case 'KeyValue':
      case 'StorageKeyValue':
        return keyValue(input);

      // HACKY, but a stopgap...
      case 'Metadata':
        return u8a(input, (input as Uint8Array).length * 8, 0);

      case 'MisbehaviorReport':
        return misbehavior(input);

      case 'ParachainId':
      case 'PropIndex':
      case 'ReferendumIndex':
      case 'u32':
      case 'VoteIndex':
        return bn(input, 32);

      case 'RuntimeVersion':
        return u8a(input, 256, 0);

      case 'Signature':
        return u8a(input, 512, 0);

      case 'String':
        return string(input);

      case 'Timestamp':
        return time(input);

      case 'u128':
        return bn(input, 128);

      case 'VoteThreshold':
        return byte(input);

      case 'StorageData':
      case 'StorageChangeSet':
      default:
        // tslint:disable-next-line
        (type as never);
        throw new Error(`No value decoder for type='${type}'`);
    }
  } catch (error) {
    console.error('Failed decoding', type, 'encoded as', input, error);

    throw error;
  }
}
