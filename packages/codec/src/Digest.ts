// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import BaseArray from './base/Array';
import BaseVector from './base/Vector';

export type DigestValue = {
  logs: DigestLogs
};

export class DigestLog extends BaseVector {
}

export class DigestLogs extends BaseArray<DigestLog> {
  constructor (value: Array<DigestLog> = [] as Array<DigestLog>) {
    super(DigestLog, value);
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
