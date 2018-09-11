// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import BaseArray from './base/Array';

export type DigestValue = {
  logs: DigestLogs
};

export class DigestLog implements Base<Uint8Array> {
  value: Uint8Array;

  constructor () {
    this.value = new Uint8Array();
  }

  byteLength (): number {
    return this.value.length;
  }

  fromJSON (input: any): DigestLog {
    throw new Error('Unimplemented');
  }

  fromU8a (input: Uint8Array): DigestLog {
    throw new Error('Unimplemented');
  }

  toJSON (): any {
    throw new Error('Unimplemented');
  }

  toU8a (): Uint8Array {
    throw new Error('Unimplemented');
  }

  toString (): string {
    throw new Error('Unimplemented');
  }
}

export class DigestLogs extends BaseArray<DigestLog> {
  constructor (value: Array<DigestLog> = [] as Array<DigestLog>) {
    super(DigestLog);
  }
}

export default class Digest implements Base<DigestValue> {
  value: DigestValue;

  constructor ({ logs = new DigestLogs() }: DigestValue = {} as DigestValue) {
    this.value = {
      logs
    };
  }

  byteLength (): number {
    return this.value.logs.byteLength();
  }

  fromJSON (input: any): Digest {
    this.value = {
      logs: new DigestLogs().fromJSON(input)
    };

    return this;
  }

  fromU8a (input: Uint8Array): Digest {
    this.value = {
      logs: new DigestLogs().fromU8a(input)
    };

    return this;
  }

  toJSON (): any {
    return {
      logs: this.value.logs.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return this.value.logs.toU8a();
  }

  toString (): string {
    return JSON.stringify({
      logs: this.value.logs.toString()
    });
  }
}
