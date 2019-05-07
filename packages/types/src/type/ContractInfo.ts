// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Bytes from '../primitive/Bytes';
import EnumType from '../codec/EnumType';
import Struct from '../codec/Struct';
import U64 from '../primitive/U64';
import Balance from './Balance';
import BlockNumber from './BlockNumber';
import CodeHash from './CodeHash';
import Hash from './Hash';

export class TrieId extends Bytes {
}

export class AliveContractInfo extends Struct {
  constructor (value?: any) {
    super({
      trieId: TrieId,
      storageSize: U64,
      codeHash: CodeHash,
      rentAllowance: Balance,
      deductBlock: BlockNumber
    }, value);
  }

  get codeHash (): CodeHash {
    return this.get('codeHash') as CodeHash;
  }

  get deductBlock (): BlockNumber {
    return this.get('deductBlock') as BlockNumber;
  }

  get rentAllowance (): Balance {
    return this.get('rentAllowance') as Balance;
  }

  get storageSize (): U64 {
    return this.get('storageSize') as U64;
  }

  get trieId (): TrieId {
    return this.get('trieId') as TrieId;
  }
}

export class Alive extends AliveContractInfo {
}

export class TombstoneContractInfo extends Hash {
}

export class Tombstone extends TombstoneContractInfo {
}

/**
 * @name ContractInfo
 * @description
 * The contract information for a given contract
 */
export default class ContractInfo extends EnumType<Alive | Tombstone> {
  constructor (value?: any) {
    super({
      Alive,
      Tombstone
    }, value);
  }

  /**
   * @description Returns the item as an [[Alive]]
   */
  get asAlive (): Alive {
    assert(this.isAlive, `Cannot convert index ${this.toNumber()} to 'Alive'`);

    return this.value as Alive;
  }

  /**
   * @description Returns the item as an [[Tombstone]]
   */
  get asTombstone (): Tombstone {
    assert(this.isTombstone, `Cannot convert index ${this.toNumber()} to 'Tombstone'`);

    return this.value as Tombstone;
  }

  /**
   * @description value is an [[Alive]]
   */
  get isAlive (): boolean {
    return this.toNumber() === 0;
  }

  /**
   * @description value is an [[Tombstone]]
   */
  get isTombstone (): boolean {
    return this.toNumber() === 1;
  }
}
