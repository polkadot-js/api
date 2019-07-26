// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthorityId } from '../../interfaces/consensus';
import { Hash } from '../../interfaces/runtime';
import { Consensus, PreRuntime, Seal, SealV0 } from '../../interfaces/rpc';

import { assert } from '@polkadot/util';

import { ClassOf } from '../../codec/createType';
import Enum from '../../codec/Enum';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Bytes from '../Bytes';

/**
 * @name DigestItem
 * @description
 * A [[Enum]] the specifies the specific item in the logs of a [[Digest]]
 */
export class DigestItem extends Enum {
  public constructor (value: any) {
    super({
      Other: ClassOf('Bytes'), // 0
      AuthoritiesChange: ClassOf('Vec<AuthorityId>'), // 1
      ChangesTrieRoot: ClassOf('Hash'), // 2
      SealV0: ClassOf('SealV0'), // 3
      Consensus: ClassOf('Consensus'), // 4
      Seal: ClassOf('Seal'), // 5
      PreRuntime: ClassOf('PreRuntime') // 6
    }, value);
  }

  /**
   * @description Returns the item as a [[Vec<AuthorityId>]]
   */
  public get asAuthoritiesChange (): Vec<AuthorityId> {
    assert(this.isAuthoritiesChange, `Cannot convert '${this.type}' via asAuthoritiesChange`);

    return this.value as Vec<AuthorityId>;
  }

  /**
   * @description Returns the item as a [[ChangesTrieRoot]]
   */
  public get asChangesTrieRoot (): Hash {
    assert(this.isChangesTrieRoot, `Cannot convert '${this.type}' via asChangesTrieRoot`);

    return this.value as Hash;
  }

  /**
   * @desciption Retuns the item as a [[Consensus]]
   */
  public get asConsensus (): Consensus {
    assert(this.isConsensus, `Cannot convert '${this.type}' via asConsensus`);

    return this.value as Consensus;
  }

  /**
   * @description Returns the item as a [[Bytes]]
   */
  public get asOther (): Bytes {
    assert(this.isOther, `Cannot convert '${this.type}' via asOther`);

    return this.value as Bytes;
  }

  /**
   * @description Returns the item as a [[PreRuntime]]
   */
  public get asPreRuntime (): PreRuntime {
    assert(this.isPreRuntime, `Cannot convert '${this.type}' via asPreRuntime`);

    return this.value as PreRuntime;
  }

  /**
   * @description Returns the item as a [[Seal]]
   */
  public get asSeal (): Seal {
    assert(this.isSeal, `Cannot convert '${this.type}' via asSeal`);

    return this.value as Seal;
  }

  /**
   * @description Returns the item as a [[SealV0]]
   */
  public get asSealV0 (): SealV0 {
    assert(this.isSealV0, `Cannot convert '${this.type}' via asSealV0`);

    return this.value as SealV0;
  }

  /**
   * @description Returns true on [[AuthoritiesChange]]
   */
  public get isAuthoritiesChange (): boolean {
    return this.type === 'AuthoritiesChange';
  }

  /**
   * @description Returns true on [[ChangesTrieRoot]]
   */
  public get isChangesTrieRoot (): boolean {
    return this.type === 'ChangesTrieRoot';
  }

  /**
   * @description Returns true on [[Consensus]]
   */
  public get isConsensus (): boolean {
    return this.type === 'Consensus';
  }

  /**
   * @description Returns true on [[Other]]
   */
  public get isOther (): boolean {
    return this.type === 'Other';
  }

  /**
   * @description Returns true on [[PreRuntime]]
   */
  public get isPreRuntime (): boolean {
    return this.type === 'PreRuntime';
  }

  /**
   * @description Returns true on [[Seal]]
   */
  public get isSeal (): boolean {
    return this.type === 'Seal';
  }

  /**
   * @description Returns true on [[SealV0]]
   */
  public get isSealV0 (): boolean {
    return this.type === 'SealV0';
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers. For logs, we overrides to produce the hex version (sligning with substrate gives in actual JSON responses)
   */
  public toJSON (): string {
    return this.toHex();
  }

  /**
   * @description Returns the type of engine
   */
  public get type (): string {
    return super.type;
  }
}

/**
 * @name Digest
 * @description
 * A [[Header]] Digest
 */
export default class Digest extends Struct {
  public constructor (value: any) {
    super({
      logs: Vec.with(DigestItem)
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
}
