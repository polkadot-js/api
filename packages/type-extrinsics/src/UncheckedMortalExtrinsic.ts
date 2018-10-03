// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Address, Extrinsic, Index } from '@polkadot/types/index';
import { AnyNumber } from '@polkadot/types/types';
import isUndefined from '@polkadot/util/is/undefined';
import { KeyringPair } from '@polkadot/util-keyring/types';
import u8aConcat from '@polkadot/util/u8a/concat';

import Descriptor from './Descriptor';

const EMPTY_U8A = new Uint8Array();
const DEFAULT_ERA = new Uint8Array([0, 0]);

/**
 * Unchecked mortal extrinsic, as defined here:
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class UncheckedMortalExtrinsic extends Extrinsic {
  protected _descriptor: Descriptor;
  protected _isSigned = false;

  constructor (descriptor: Descriptor) {
    super();
    this._descriptor = descriptor;
    this.raw = UncheckedMortalExtrinsic.encode(false, descriptor);
  }

  static encode (isSigned: boolean, descriptor: Descriptor, keyring?: KeyringPair, _nonce?: AnyNumber): Uint8Array {
    // Version Information.
    // 1 byte: version information:
    // - 7 low bits: version identifier (should be 0b0000001).
    // - 1 high bit: signed flag: 1 if this is a transaction (e.g. contains a signature).
    const highBit = isSigned ? 0b10000000 : 0;
    const version = 0b00000001;
    const versionInformation = new Uint8Array([highBit | version]);

    // Signature Information.
    // 1/3/5/9/33 bytes: The signing account identity, in Address format:
    // 64 bytes: The Ed25519 signature of the Signing Payload (detailed below).
    // 8 bytes: The Transaction Index of the signing account (number of signed transactions from the account preceeding this one).
    // 2 bytes: The Transaction Era (detailed below).
    let signatureInformation = EMPTY_U8A;

    if (isSigned) {
      if (isUndefined(keyring) || isUndefined(_nonce)) {
        throw new Error('Please provide a keyring and a nonce if you want to sign an Extrinsic.');
      }

      const address = new Address(keyring.publicKey());
      const nonce = new Index(_nonce);
      // TODO Allow era specificcation
      const era = DEFAULT_ERA;

      // Signing Payload.
      // 8 bytes: The Transaction Index as provided in the transaction itself.
      // 2+ bytes: The Function Descriptor as provided in the transaction itself.
      // 2 bytes: The Transaction Era as provided in the transaction itself.
      // 32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
      // @ts-ignore keyring -> "Object is possibly undefined", no it's not
      const signingPayload = keyring.sign(
        u8aConcat(
          nonce.toU8a(),
          descriptor.toU8a(),
          era
        )
      );

      signatureInformation = u8aConcat(
        address.toU8a(),
        signingPayload,
        nonce.toU8a(),
        era
      );
    }

    return u8aConcat(
      versionInformation,
      signatureInformation,
      descriptor.toU8a()
    );
  }

  get isSigned () {
    return this._isSigned;
  }

  sign (keyring: KeyringPair, nonce: AnyNumber) {
    this.raw = UncheckedMortalExtrinsic.encode(true, this._descriptor, keyring, nonce);
    this._isSigned = true;
  }
}
