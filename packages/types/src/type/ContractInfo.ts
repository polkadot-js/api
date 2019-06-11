// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Option from '../codec/Option';
import Bytes from '../primitive/Bytes';
import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import Hash from '../primitive/Hash';
import U32 from '../primitive/U32';
import Balance from './Balance';
import BlockNumber from './BlockNumber';
import CodeHash from './CodeHash';

export class TrieId extends Bytes {
}

export class AliveContractInfo extends Struct {
  constructor (value?: any) {
    super({
      trieId: TrieId,
      storageSize: U32,
      codeHash: CodeHash,
      rentAllowance: Balance,
      deductBlock: BlockNumber,
      lastWrite: Option.with(BlockNumber)
    }, value);
  }

  get codeHash (): CodeHash {
    return this.get('codeHash') as CodeHash;
  }

  get deductBlock (): BlockNumber {
    return this.get('deductBlock') as BlockNumber;
  }

  get lastWrite (): Option<BlockNumber> {
    return this.get('lastWrite') as Option<BlockNumber>;
  }

  get rentAllowance (): Balance {
    return this.get('rentAllowance') as Balance;
  }

  get storageSize (): U32 {
    return this.get('storageSize') as U32;
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
export default class ContractInfo extends Enum {
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
    assert(this.isAlive, `Cannot convert '${this.type}' via asAlive`);

    return this.value as Alive;
  }

  /**
   * @description Returns the item as an [[Tombstone]]
   */
  get asTombstone (): Tombstone {
    assert(this.isTombstone, `Cannot convert '${this.type}' via asTombstone`);

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
