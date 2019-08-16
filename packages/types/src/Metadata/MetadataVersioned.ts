// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import MagicNumber from './MagicNumber';
import MetadataV0 from './v0';
import MetadataV1 from './v1';
import MetadataV2 from './v2';
import MetadataV3 from './v3';
import MetadataV4 from './v4';
import MetadataV5 from './v5';
import MetadataV6 from './v6';
import MetadataV7 from './v7';
import v0ToV1 from './v0/toV1';
import v1ToV2 from './v1/toV2';
import v2ToV3 from './v2/toV3';
import v3ToV4 from './v3/toV4';
import v4ToV5 from './v4/toV5';
import v5ToV6 from './v5/toV6';
import v6ToV7 from './v6/toV7';
import { getUniqTypes } from './util';

type MetaMapped = MetadataV0 | MetadataV1 | MetadataV2 | MetadataV3 | MetadataV4 | MetadataV5 | MetadataV6 | MetadataV7;
type MetaVersions = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type MetaAsX = 'asV0' | 'asV1' | 'asV2' | 'asV3' | 'asV4' | 'asV5' | 'asV6';

class MetadataEnum extends Enum {
  public constructor (value?: any) {
    super({
      MetadataV0, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV1, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV2, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV3, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV4, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV5, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV6, // once rolled-out, can replace this with MetadataDeprecated
      MetadataV7
    }, value);
  }

  /**
   * @description Returns the wrapped values as a V0 object
   */
  public get asV0 (): MetadataV0 {
    assert(this.isV0, `Cannot convert '${this.type}' via asV0`);

    return this.value as MetadataV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  public get asV1 (): MetadataV1 {
    assert(this.isV1, `Cannot convert '${this.type}' via asV1`);

    return this.value as MetadataV1;
  }

  /**
   * @description Returns the wrapped values as a V2 object
   */
  public get asV2 (): MetadataV2 {
    assert(this.isV2, `Cannot convert '${this.type}' via asV2`);

    return this.value as MetadataV2;
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  public get asV3 (): MetadataV3 {
    assert(this.isV3, `Cannot convert '${this.type}' via asV3`);

    return this.value as MetadataV3;
  }

  /**
   * @description Returns the wrapped values as a V4 object
   */
  public get asV4 (): MetadataV4 {
    assert(this.isV4, `Cannot convert '${this.type}' via asV4`);

    return this.value as MetadataV4;
  }

  /**
   * @description Returns the wrapped values as a V5 object
   */
  public get asV5 (): MetadataV5 {
    assert(this.isV5, `Cannot convert '${this.type}' via asV5`);

    return this.value as MetadataV5;
  }

  /**
   * @description Returns the wrapped values as a V6 object
   */
  public get asV6 (): MetadataV6 {
    assert(this.isV6, `Cannot convert '${this.type}' via asV6`);

    return this.value as MetadataV6;
  }

  /**
   * @description Returns the wrapped values as a V7 object
   */
  public get asV7 (): MetadataV7 {
    assert(this.isV7, `Cannot convert '${this.type}' via asV7`);

    return this.value as MetadataV7;
  }

  /**
   * @description `true` if Deprecated
   */
  public get isDeprecated (): boolean {
    return this.type === 'MetadataDeprectated';
  }

  /**
   * @description `true` if V0
   */
  public get isV0 (): boolean {
    return this.type === 'MetadataV0';
  }

  /**
   * @description `true` if V1
   */
  public get isV1 (): boolean {
    return this.type === 'MetadataV1';
  }

  /**
   * @description `true` if V2
   */
  public get isV2 (): boolean {
    return this.type === 'MetadataV2';
  }

  /**
   * @description `true` if V3
   */
  public get isV3 (): boolean {
    return this.type === 'MetadataV3';
  }

  /**
   * @description `true` if V4
   */
  public get isV4 (): boolean {
    return this.type === 'MetadataV4';
  }

  /**
   * @description `true` if V5
   */
  public get isV5 (): boolean {
    return this.type === 'MetadataV5';
  }

  /**
   * @description `true` if V6
   */
  public get isV6 (): boolean {
    return this.type === 'MetadataV6';
  }

  /**
   * @description `true` if V7
   */
  public get isV7 (): boolean {
    return this.type === 'MetadataV7';
  }

  /**
   * @description The version this metadata represents
   */
  public get version (): number {
    return this.index;
  }
}

/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class MetadataVersioned extends Struct {
  private _converted: Map<number, MetaMapped> = new Map();

  public constructor (value?: any) {
    super({
      magicNumber: MagicNumber,
      metadata: MetadataEnum
    }, value);
  }

  private assertVersion (version: number): boolean {
    assert(this.metadata.version <= version, `Cannot convert metadata from v${this.metadata.version} to v${version}`);

    return this.version === version;
  }

  private getVersion <T extends MetaMapped, F extends MetaMapped> (version: MetaVersions, fromPrev: (input: F) => T): T {
    const asCurr: MetaAsX = `asV${version}` as any;
    const asPrev: MetaAsX = `asV${version - 1}` as any;

    if (this.assertVersion(version)) {
      return this.metadata[asCurr] as T;
    }

    if (!this._converted.has(version)) {
      this._converted.set(version, fromPrev(this[asPrev] as F));
    }

    return this._converted.get(version) as T;
  }

  /**
   * @description
   */
  public get magicNumber (): MagicNumber {
    return this.get('magicNumber') as MagicNumber;
  }

  /**
   * @description the metadata wrapped
   */
  private get metadata (): MetadataEnum {
    return this.get('metadata') as MetadataEnum;
  }

  /**
   * @description the metadata version this structure represents
   */
  public get version (): number {
    return this.metadata.index;
  }

  /**
   * @description Returns the wrapped metadata as a V0 object
   */
  public get asV0 (): MetadataV0 {
    this.assertVersion(0);

    return this.metadata.asV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  public get asV1 (): MetadataV1 {
    return this.getVersion(1, v0ToV1);
  }

  /**
   * @description Returns the wrapped values as a V2 object
   */
  public get asV2 (): MetadataV2 {
    return this.getVersion(2, v1ToV2);
  }

  /**
   * @description Returns the wrapped values as a V3 object
   */
  public get asV3 (): MetadataV3 {
    return this.getVersion(3, v2ToV3);
  }

  /**
   * @description Returns the wrapped values as a V4 object
   */
  public get asV4 (): MetadataV4 {
    return this.getVersion(4, v3ToV4);
  }

  /**
   * @description Returns the wrapped values as a V5 object
   */
  public get asV5 (): MetadataV5 {
    return this.getVersion(5, v4ToV5);
  }

  /**
   * @description Returns the wrapped values as a V6 object
   */
  public get asV6 (): MetadataV6 {
    return this.getVersion(6, v5ToV6);
  }

  /**
   * @description Returns the wrapped values as a V7 object
   */
  public get asV7 (): MetadataV7 {
    return this.getVersion(7, v6ToV7);
  }

  /**
   * @description Returns the wrapped values as a latest version object
   */
  public get asLatest (): MetadataV7 {
    return this.asV7;
  }

  public getUniqTypes (throwError: boolean): string[] {
    return getUniqTypes(this.asLatest, throwError);
  }
}
