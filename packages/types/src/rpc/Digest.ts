// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { assert, bnToBn } from '@polkadot/util';

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import Vector from '../codec/Vector';
import Bytes from '../primitive/Bytes';
import Hash from '../primitive/Hash';
import Signature from '../primitive/Signature';
import U32 from '../primitive/U32';
import U64 from '../primitive/U64';
import AuthorityId from '../type/AuthorityId';

const CID_AURA = 0x61727561; // 'aura'
const CID_BABE = 0x65626162; // 'babe'
const CID_GRPA = 0x4b4e5246; // 'FRNK' (don't ask, used to be afg1)

export { CID_AURA, CID_BABE, CID_GRPA };

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
  public static idToString (input: number | BN): string {
    return bnToBn(input)
      .toArray('le')
      .map((code): string => String.fromCharCode(code))
      .join('');
  }

  public static stringToId (input: string): number {
    return input
      .split('')
      .reverse()
      .reduce((result, char): number => (result * 256) + char.charCodeAt(0), 0);
  }

  /**
   * @description `true` if the engine matches aura
   */
  public get isAura (): boolean {
    return this.eq(CID_AURA);
  }

  /**
   * @description `true` is the engine matches babe
   */
  public get isBabe (): boolean {
    return this.eq(CID_BABE);
  }

  /**
   * @description `true` is the engine matches grandpa
   */
  public get isGrandpa (): boolean {
    return this.eq(CID_GRPA);
  }

  /**
   * @description From the input bytes, decode into an aura-tuple
   */
  public extractSlot (bytes: Bytes): U64 {
    assert(this.isAura, 'Invalid engine for asAura conversion');

    return new U64(
      // no compact prefix, only use the correct number of supplied bytes
      bytes.toU8a(true).subarray(0, 8)
    );
  }

  /**
   * @description Override the default toString to return a 4-byte string
   */
  public toString (): string {
    return ConsensusEngineId.idToString(this as BN);
  }
}

/**
 * @name Consensus
 * @description
 * Log item indicating consensus
 */
export class Consensus extends Tuple {
  public constructor (value: any) {
    super({
      ConsensusEngineId,
      Bytes
    }, value);
  }

  /**
   * @description The wrapped engine [[ConsensusEngineId]]
   */
  public get engine (): ConsensusEngineId {
    return this[0] as ConsensusEngineId;
  }

  /**
   * @description The wrapped [[Bytes]]
   */
  public get data (): Bytes {
    return this[1] as Bytes;
  }

  /**
   * @description The slot extracted from the raw data (fails on non-Aura)
   */
  public get slot (): U64 {
    return this.engine.extractSlot(this.data);
  }
}

/**
 * @name SealV0
 * @description
 * Log item indicating a sealing event. This has been replaced in later versions with a renamed [[Seal]], we however have kept compatibility with the old version
 */
export class SealV0 extends Tuple {
  public constructor (value: any) {
    super({
      U64,
      Signature
    }, value);
  }

  /**
   * @description The wrapped [[Signature]]
   */
  public get signature (): Signature {
    return this[1] as Signature;
  }

  /**
   * @description The wrapped [[U64]] slot
   */
  public get slot (): U64 {
    return this[0] as U64;
  }
}

/**
 * @name Seal
 * @description
 * Log item indicating a sealing event.
 */
export class Seal extends Tuple {
  public constructor (value: any) {
    super({
      ConsensusEngineId,
      Bytes
    }, value);
  }

  /**
   * @description The wrapped [[Bytes]]
   */
  public get data (): Bytes {
    return this[1] as Signature;
  }

  /**
   * @description The wrapped [[U64]] slot
   */
  public get slot (): U64 {
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
  public constructor (value: any) {
    super({
      ConsensusEngineId,
      Bytes
    }, value);
  }

  /**
   * @description The wrapped [[ConsensusEngineId]]
   */
  public get engine (): ConsensusEngineId {
    return this[0] as ConsensusEngineId;
  }

  /**
   * @description The wrapped [[Bytes]]
   */
  public get data (): Bytes {
    return this[1] as Bytes;
  }

  /**
   * @description The slot extracted from the raw data (fails on non-Aura)
   */
  public get slot (): U64 {
    return this.engine.extractSlot(this.data);
  }
}

// Note the ordering, it aligns with numbers to the Rust implementation
// (current and previous versions are included hjere, e.g. SealV0)
const DigestItemEnumMap = {
  Other, // 0
  AuthoritiesChange, // 1
  ChangesTrieRoot, // 2
  SealV0, // 3
  Consensus, // 4
  Seal, // 5
  PreRuntime // 6
};

type DigestItemTypes = keyof typeof DigestItemEnumMap;

/**
 * @name DigestItem
 * @description
 * A [[Enum]] the specifies the specific item in the logs of a [[Digest]]
 */
export class DigestItem extends Enum {
  public constructor (value: any) {
    super(DigestItemEnumMap, value);
  }

  /**
   * @description Returns the item as a [[AuthoritiesChange]]
   */
  public get asAuthoritiesChange (): AuthoritiesChange {
    assert(this.isAuthoritiesChange, `Cannot convert '${this.type}' via asAuthoritiesChange`);

    return this.value as AuthoritiesChange;
  }

  /**
   * @description Returns the item as a [[ChangesTrieRoot]]
   */
  public get asChangesTrieRoot (): ChangesTrieRoot {
    assert(this.isChangesTrieRoot, `Cannot convert '${this.type}' via asChangesTrieRoot`);

    return this.value as ChangesTrieRoot;
  }

  /**
   * @desciption Retuns the item as a [[Consensus]]
   */
  public get asConsensus (): Consensus {
    assert(this.isConsensus, `Cannot convert '${this.type}' via asConsensus`);

    return this.value as Consensus;
  }

  /**
   * @description Returns the item as a [[Other]]
   */
  public get asOther (): Other {
    assert(this.isOther, `Cannot convert '${this.type}' via asOther`);

    return this.value as Other;
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
   * @description Returns the type of engine, we just override here to get the typings correct
   */
  public get type (): DigestItemTypes {
    return super.type as DigestItemTypes;
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
      logs: Vector.with(DigestItem)
    }, value);
  }

  /**
   * @description The [[DigestItem]] logs
   */
  public get logs (): Vector<DigestItem> {
    return this.get('logs') as Vector<DigestItem>;
  }

  /**
   * @description The [[DigestItem]] logs, filtered, filter items included. This is useful for derive functionality where only a certain type of log is to be returned.
   */
  public logsWith (...include: DigestItemTypes[]): Vector<DigestItem> {
    return this.logs.filter(({ type }): boolean => include.includes(type)) as Vector<DigestItem>;
  }

  /**
   * @description The [[DigestItem]] logs, filtered, filter items exluded. This is useful for stripping headers for eg. WASM runtime execution.
   */
  public logsWithout (...exclude: DigestItemTypes[]): Vector<DigestItem> {
    return this.logs.filter(({ type }): boolean => !exclude.includes(type)) as Vector<DigestItem>;
  }
}

/**
 * @name DigestOf
 * @description
 * A [[Header]] Digest
 */
export class DigestOf extends Digest { }
