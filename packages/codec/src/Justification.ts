// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import BaseArray from './base/Array';
import AccountId from './AccountId';
import H256 from './H256';
import U32 from './U32';
import Signature from './Signature';

type SignatureValue = {
  accountId: AccountId,
  signature: Signature
};

type JustificationValue = {
  hash: H256,
  roundLength: U32,
  signatures: JustificationSignatures
};

export class JustificationSignature implements Base<SignatureValue> {
  value: SignatureValue;

  constructor ({ accountId = new AccountId(), signature = new Signature() }: SignatureValue = {} as SignatureValue) {
    this.value = {
      accountId,
      signature
    };
  }

  byteLength (): number {
    return this.value.accountId.byteLength() +
      this.value.signature.byteLength();
  }

  fromJSON (input: any): JustificationSignature {
    this.value = {
      accountId: new AccountId().fromJSON(input.accountId),
      signature: new Signature().fromJSON(input.signature)
    };

    return this;
  }

  fromU8a (input: Uint8Array): JustificationSignature {
    const accountId = new AccountId().fromU8a(input);
    const signature = new Signature().fromU8a(input.subarray(accountId.byteLength()));

    this.value = {
      accountId,
      signature
    };

    return this;
  }

  toJSON (): any {
    return {
      accountId: this.value.accountId.toJSON(),
      signature: this.value.signature.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.value.accountId.toU8a(),
      this.value.signature.toU8a()
    );
  }

  toString (): string {
    return JSON.stringify({
      accountId: this.value.accountId.toString(),
      signature: this.value.signature.toString()
    });
  }
}

export class JustificationSignatures extends BaseArray<JustificationSignature> {
  constructor (value: Array<JustificationSignature> = [] as Array<JustificationSignature>) {
    super(JustificationSignature, value);
  }
}

export default class Justification implements Base<JustificationValue> {
  value: JustificationValue;

  constructor ({ hash = new H256(), roundLength = new U32(), signatures = new JustificationSignatures() }: JustificationValue = {} as JustificationValue) {
    this.value = {
      hash,
      roundLength,
      signatures
    };
  }

  byteLength (): number {
    return this.value.hash.byteLength() +
      this.value.roundLength.byteLength() +
      this.value.signatures.byteLength();
  }

  fromJSON (input: any): Justification {
    this.value = {
      hash: new H256().fromJSON(input.hash),
      roundLength: new U32().fromJSON(input.roundLength),
      signatures: new JustificationSignatures().fromJSON(input.signatures)
    };

    return this;
  }

  fromU8a (input: Uint8Array): Justification {
    const roundLength = new U32().fromU8a(input);
    let offset = roundLength.byteLength();
    const hash = new H256().fromU8a(input.subarray(offset));

    offset += hash.byteLength();

    const signatures = new JustificationSignatures().fromU8a(input.subarray(offset));

    this.value = {
      hash,
      roundLength,
      signatures
    };

    return this;
  }

  toJSON (): any {
    return {
      hash: this.value.hash.toJSON(),
      roundLength: this.value.roundLength.toJSON(),
      signatures: this.value.signatures.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.value.roundLength.toU8a(),
      this.value.hash.toU8a(),
      this.value.signatures.toU8a()
    );
  }

  toString (): string {
    return JSON.stringify({
      hash: this.value.hash.toString(),
      roundLength: this.value.roundLength.toString(),
      signatures: this.value.signatures.toString()
    });
  }
}
