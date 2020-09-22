// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MetadataAll, MetadataLatest, MetadataV5, MetadataV6, MetadataV7, MetadataV8, MetadataV9, MetadataV10, MetadataV11 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import Struct from '@polkadot/types/codec/Struct';
import { assert } from '@polkadot/util';

import MagicNumber from './MagicNumber';
import v5ToV6 from './v5/toV6';
import v6ToV7 from './v6/toV7';
import v7ToV8 from './v7/toV8';
import v8ToV9 from './v8/toV9';
import v9ToV10 from './v9/toV10';
import v10ToV11 from './v10/toV11';
import v11ToV12 from './v11/toV12';
import v12ToLatest from './v12/toLatest';
import { getUniqTypes, toCallsOnly } from './util';

type MetaMapped = MetadataV5 | MetadataV6 | MetadataV7 | MetadataV8 | MetadataV9 | MetadataV10 | MetadataV11;
type MetaVersions = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type MetaAsX = 'asV5' | 'asV6' | 'asV7' | 'asV8' | 'asV9' | 'asV10' | 'asV11' | 'asV12';

/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class MetadataVersioned extends Struct {
  readonly #converted = new Map<number, MetaMapped>();

  constructor (registry: Registry, value?: unknown) {
    super(registry, {
      magicNumber: MagicNumber,
      metadata: 'MetadataAll'
    }, value as Map<unknown, unknown>);
  }

  private _assertVersion (version: number): boolean {
    assert(this.version <= version, `Cannot convert metadata from v${this.version} to v${version}`);

    return this.version === version;
  }

  private _getVersion<T extends MetaMapped, F extends MetaMapped> (version: MetaVersions, fromPrev: (registry: Registry, input: F) => T): T {
    const asCurr = `asV${version}` as MetaAsX;
    const asPrev = `asV${version - 1}` as MetaAsX;

    if (this._assertVersion(version)) {
      return this._metadata[asCurr] as T;
    }

    if (!this.#converted.has(version)) {
      this.#converted.set(version, fromPrev(this.registry, this[asPrev] as F));
    }

    return this.#converted.get(version) as T;
  }

  /**
   * @description Returns the wrapped metadata as a limited calls-only (latest) version
   */
  public get asCallsOnly (): MetadataVersioned {
    return new MetadataVersioned(this.registry, {
      magicNumber: this.magicNumber,
      metadata: this.registry.createType('MetadataAll', toCallsOnly(this.registry, this.asLatest), this.version)
    });
  }

  /**
   * @description Returns the wrapped metadata as a V1 object
   */
  public get asV5 (): MetadataV5 {
    this._assertVersion(5);

    return this._metadata.asV5;
  }

  /**
   * @description Returns the wrapped values as a V6 object
   */
  public get asV6 (): MetadataV6 {
    return this._getVersion(6, v5ToV6);
  }

  /**
   * @description Returns the wrapped values as a V7 object
   */
  public get asV7 (): MetadataV7 {
    return this._getVersion(7, v6ToV7);
  }

  /**
   * @description Returns the wrapped values as a V8 object
   */
  public get asV8 (): MetadataV8 {
    return this._getVersion(8, v7ToV8);
  }

  /**
   * @description Returns the wrapped values as a V9 object
   */
  public get asV9 (): MetadataV9 {
    return this._getVersion(9, v8ToV9);
  }

  /**
   * @description Returns the wrapped values as a V10 object
   */
  public get asV10 (): MetadataV10 {
    return this._getVersion(10, v9ToV10);
  }

  /**
   * @description Returns the wrapped values as a V10 object
   */
  public get asV11 (): MetadataV11 {
    return this._getVersion(11, v10ToV11);
  }

  /**
   * @description Returns the wrapped values as a V10 object
   */
  public get asV12 (): MetadataV11 {
    return this._getVersion(12, v11ToV12);
  }

  /**
   * @description Returns the wrapped values as a latest version object
   */
  public get asLatest (): MetadataLatest {
    // This is non-existent & latest - applied here to do the module-specific type conversions
    return this._getVersion(13, v12ToLatest);
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
  private get _metadata (): MetadataAll {
    return this.get('metadata') as MetadataAll;
  }

  /**
   * @description the metadata version this structure represents
   */
  public get version (): number {
    return this._metadata.index;
  }

  public getUniqTypes (throwError: boolean): string[] {
    return getUniqTypes(this.registry, this.asLatest, throwError);
  }
}
