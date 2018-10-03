// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Address, Extrinsic, Hash, Index, TransactionSignature, TransactionEra } from '@polkadot/types/index';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { KeyringPair } from '@polkadot/util-keyring/types';
import u8aConcat from '@polkadot/util/u8a/concat';

import Descriptor from './Descriptor';

const EMPTY_U8A = new Uint8Array();
const IMMORTAL_ERA = new Uint8Array([0]);

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
    this.raw = UncheckedMortalExtrinsic.encode(descriptor);
  }

  static encode (descriptor: Descriptor, signature?: TransactionSignature): Uint8Array {
    // Version Information.
    // 1 byte: version information:
    // - 7 low bits: version identifier (should be 0b0000001).
    // - 1 high bit: signed flag: 1 if this is a transaction (e.g. contains a signature).
    const highBit = signature ? 0b10000000 : 0;
    const version = 0b00000001;

    return u8aConcat(
      new Uint8Array([highBit | version]),
      signature
        ? signature.toU8a()
        : EMPTY_U8A,
      descriptor.toU8a()
    );
  }

  get isSigned () {
    return this._isSigned;
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash: AnyU8a) {
    const signature = this.createSignature(this._descriptor, signerPair, nonce, blockHash);

    this.raw = UncheckedMortalExtrinsic.encode(this._descriptor, signature);
    this._isSigned = true;
  }

  private createSignature (descriptor: Descriptor, signerPair: KeyringPair, _nonce: AnyNumber, _blockHash: AnyU8a, _era: Uint8Array = IMMORTAL_ERA): TransactionSignature {
    const signer = new Address(signerPair.publicKey());
    const index = new Index(_nonce);
    const blockHash = new Hash(_blockHash);
    const era = new TransactionEra(_era);

    // Signing Payload.
    //   8 bytes: The Transaction Index as provided in the transaction itself.
    //   2+ bytes: The Function Descriptor as provided in the transaction itself.
    //   2 bytes: The Transaction Era as provided in the transaction itself.
    //   32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
    // FIXME Add this as a type to types as well (struct, no need to .toU8a() all)
    const signingPayload = u8aConcat(
      index.toU8a(),
      descriptor.toU8a(),
      era.toU8a(),
      blockHash.toU8a()
    );
    const signature = signerPair.sign(signingPayload);

    return new TransactionSignature({
      era,
      index,
      signer,
      signature
    });
  }
}
