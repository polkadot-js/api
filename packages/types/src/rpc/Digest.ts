// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import Vector from '../codec/Vector';
import Bytes from '../primitive/Bytes';
import Hash from '../primitive/Hash';
import U32 from '../primitive/U32';
import U64 from '../primitive/U64';
import AuthorityId from '../type/AuthorityId';
import Signature from '../type/Signature';

/**
 * @name AuthoritiesChange
 * @description
 * Log for Authories changed
 */
export class AuthoritiesChange extends Vector.with(AuthorityId) {
}

/**
 * @name ChangesTrieRoot
 * @description
 * Log for changes to the Trie root
 */
export class ChangesTrieRoot extends Hash {
}

/**
 * @name ConsensusEngineId
 * @description
 * A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']
 */
export class ConsensusEngineId extends U32 {
}

/**
 * @name Consensus
 * @description
 * Log item indicating consensus
 */
export class Consensus extends Tuple {
  constructor (value: any) {
    super({
      ConsensusEngineId,
      Bytes
    }, value);
  }

  /**
   * @description `true` if the engine matches aura
   */
  get isAura (): boolean {
    return this.engine.eq(0x61727561); // ['a', 'u', 'r', 'a']
  }

  /**
   * @description The wrapped engine [[ConsensusEngineId]]
   */
  get engine (): ConsensusEngineId {
    return this[0] as ConsensusEngineId;
  }

  /**
   * @description The wrapped [[Bytes]]
   */
  get data (): Bytes {
    return this[1] as Bytes;
  }

  /**
   * @description The slot and signature extracted from the raw data (assuming Aura)
   */
  get asAura (): [U64, Signature] {
    assert(this.isAura, 'Invalid engine for asAura conversion');

    const raw = this.data.toU8a(true);

    return [
      new U64(raw.subarray(0, 4)),
      new Signature(raw.subarray(64))
    ];
  }
}

/**
 * @name SealV0
 * @description
 * Log item indicating a sealing event. This has been replaced in later versions with a renamed [[Seal]], we however have kept compatibility with the old version
 */
export class SealV0 extends Tuple {
  constructor (value: any) {
    super({
      U64,
      Signature
    }, value);
  }

  /**
   * @description The wrapped [[Signature]]
   */
  get signature (): Signature {
    return this[1] as Signature;
  }

  /**
   * @description The wrapped [[U64]] slot
   */
  get slot (): U64 {
    return this[0] as U64;
  }
}

/**
 * @name Seal
 * @description
 * Log item indicating a sealing event.
 */
export class Seal extends Tuple {
  constructor (value: any) {
    super({
      ConsensusEngineId,
      Signature
    }, value);
  }

  /**
   * @description The wrapped [[Signature]]
   */
  get signature (): Signature {
    return this[1] as Signature;
  }

  /**
   * @description The wrapped [[U64]] slot
   */
  get slot (): U64 {
    return this[0] as U64;
  }
}

/**
 * @name Other
 * @description
 * Log item that is just a stream of [[Bytes]]
 */
export class Other extends Bytes {
}

/**
 * @name PreRuntime
 * @description
 * These are messages from the consensus engine to the runtime, although the consensus engine the consensus engine can (and should) read them itself to avoid ode and state duplication.
 */
export class PreRuntime extends Tuple {
  constructor (value: any) {
    super({
      ConsensusEngineId,
      Bytes
    });
  }

  /**
   * @description The wrapped [[ConsensusEngineId]]
   */
  get engine (): ConsensusEngineId {
    return this[0] as ConsensusEngineId;
  }

  /**
   * @description The wrapped [[Bytes]]
   */
  get data (): Bytes {
    return this[1] as Bytes;
  }
}

/**
 * @name DigestItem
 * @description
 * A [[Enum]] the specifies the specific item in the logs of a [[Digest]]
 */
export class DigestItem extends Enum {
  constructor (value: any) {
    // Note the ordering, it aligns with numbers to the Rust implementation
    // (current and previous versions)
    super({
      Other, // 0
      AuthoritiesChange, // 1
      ChangesTrieRoot, // 2
      SealV0, // 3
      Consensus, // 4
      Seal, // 5
      PreRuntime // 6
    }, value);
  }

  /**
   * @description Returns the item as a [[AuthoritiesChange]]
   */
  get asAuthoritiesChange (): AuthoritiesChange {
    assert(this.isAuthoritiesChange, `Cannot convert '${this.type}' via asAuthoritiesChange`);

    return this.value as AuthoritiesChange;
  }

  /**
   * @description Returns the item as a [[ChangesTrieRoot]]
   */
  get asChangesTrieRoot (): ChangesTrieRoot {
    assert(this.isChangesTrieRoot, `Cannot convert '${this.type}' via asChangesTrieRoot`);

    return this.value as ChangesTrieRoot;
  }

  /**
   * @desciption Retuns the item as a [[Consensus]]
   */
  get asConsensus (): Consensus {
    assert(this.isConsensus, `Cannot convert '${this.type}' via asConsensus`);

    return this.value as Consensus;
  }

  /**
   * @description Returns the item as a [[Other]]
   */
  get asOther (): Other {
    assert(this.isOther, `Cannot convert '${this.type}' via asOther`);

    return this.value as Other;
  }

  /**
   * @description Returns the item as a [[PreRuntime]]
   */
  get asPreRuntime (): PreRuntime {
    assert(this.isPreRuntime, `Cannot convert '${this.type}' via asPreRuntime`);

    return this.value as PreRuntime;
  }

  /**
   * @description Returns the item as a [[Seal]]
   */
  get asSeal (): Seal {
    assert(this.isSeal, `Cannot convert '${this.type}' via asSeal`);

    return this.value as Seal;
  }

  /**
   * @description Returns the item as a [[SealV0]]
   */
  get asSealV0 (): SealV0 {
    assert(this.isSealV0, `Cannot convert '${this.type}' via asSealV0`);

    return this.value as SealV0;
  }

  /**
   * @description Returns true on [[AuthoritiesChange]]
   */
  get isAuthoritiesChange (): boolean {
    return this.type === 'AuthoritiesChange';
  }

  /**
   * @description Returns true on [[ChangesTrieRoot]]
   */
  get isChangesTrieRoot (): boolean {
    return this.type === 'ChangesTrieRoot';
  }

  /**
   * @description Returns true on [[Consensus]]
   */
  get isConsensus (): boolean {
    return this.type === 'Consensus';
  }

  /**
   * @description Returns true on [[Other]]
   */
  get isOther (): boolean {
    return this.type === 'Other';
  }

  /**
   * @description Returns true on [[PreRuntime]]
   */
  get isPreRuntime (): boolean {
    return this.type === 'PreRuntime';
  }

  /**
   * @description Returns true on [[Seal]]
   */
  get isSeal (): boolean {
    return this.type === 'Seal';
  }

  /**
   * @description Returns true on [[SealV0]]
   */
  get isSealV0 (): boolean {
    return this.type === 'SealV0';
  }
}

/**
 * @name Digest
 * @description
 * A [[Header]] Digest
 */
export default class Digest extends Struct {
  constructor (value: any) {
    super({
      logs: Vector.with(DigestItem)
    }, value);
  }

  /**
   * @description The [[DigestItem]] logs
   */
  get logs (): Vector<DigestItem> {
    return this.get('logs') as Vector<DigestItem>;
  }
}
