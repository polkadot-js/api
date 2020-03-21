// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DigestItem } from '../interfaces/runtime';
import { AnyJson, Registry } from '../types';

import Struct from '../codec/Struct';
import Vec from '../codec/Vec';

/**
 * @name Digest
 * @description
 * A [[Header]] Digest
 */
export default class Digest extends Struct {
  constructor (registry: Registry, value: any) {
    super(registry, {
      logs: 'Vec<DigestItem>'
    }, value);
  }

  /**
   * @description The [[DigestItem]] logs
   */
  public get logs (): Vec<DigestItem> {
    return this.get('logs') as Vec<DigestItem>;
  }

  /**
   * @description The [[DigestItem]] logs, filtered, filter items included. This is useful for derive functionality where only a certain type of log is to be returned.
   */
  public logsWith (...include: string[]): Vec<DigestItem> {
    return this.logs.filter(({ type }): boolean => include.includes(type)) as Vec<DigestItem>;
  }

  /**
   * @description The [[DigestItem]] logs, filtered, filter items exluded. This is useful for stripping headers for eg. WASM runtime execution.
   */
  public logsWithout (...exclude: string[]): Vec<DigestItem> {
    return this.logs.filter(({ type }): boolean => !exclude.includes(type)) as Vec<DigestItem>;
  }

  /**
   * @desrcript The JSON representation as it goes over RPC
   */
  public toJSON (): AnyJson {
    return {
      logs: this.logs.map((log): string => log.toHex())
    };
  }
}
