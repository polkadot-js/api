// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { MetadataAll, MetadataLatest, MetadataV9, MetadataV10, MetadataV11, MetadataV12, MetadataV13, MetadataV14 } from '../interfaces/metadata';
import type { Registry } from '../types';

import { Struct } from '@polkadot/types-codec';

import { toV10 } from './v9/toV10';
import { toV11 } from './v10/toV11';
import { toV12 } from './v11/toV12';
import { toV13 } from './v12/toV13';
import { toV14 } from './v13/toV14';
import { toLatest } from './v14/toLatest';
import { MagicNumber } from './MagicNumber';
import { getUniqTypes, toCallsOnly } from './util';

// Use these to generate all the Meta* types below via template keys
// NOTE: Keep from latest -> earliest, see the LATEST_VERSION 0 index
const KNOWN_VERSIONS = <const> [14, 13, 12, 11, 10, 9];
const LATEST_VERSION = KNOWN_VERSIONS[0];

type MetaAll = typeof KNOWN_VERSIONS[number];
type MetaAsX = `asV${MetaAll}`;
type MetaMapped = MetadataAll[MetaAsX];
type MetaVersions = MetaAll | 'latest';

/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export class MetadataVersioned extends Struct {
  readonly #converted = new Map<MetaVersions, MetaMapped>();

  constructor (registry: Registry, value?: Uint8Array | HexString | Map<string, unknown> | Record<string, unknown>) {
    // const timeStart = performance.now()

    super(registry, {
      magicNumber: MagicNumber,
      metadata: 'MetadataAll'
    }, value);

    // console.log('MetadataVersioned', `${(performance.now() - timeStart).toFixed(2)}ms`)
  }

  #assertVersion = (version: number): boolean => {
    if (this.version > version) {
      throw new Error(`Cannot convert metadata from version ${this.version} to ${version}`);
    }

    return this.version === version;
  };

  #getVersion = <T extends MetaMapped, F extends MetaMapped>(version: MetaVersions, fromPrev: (registry: Registry, input: F, metaVersion: number) => T): T => {
    const asCurr = `asV${version}` as MetaAsX;
    const asPrev = version === 'latest'
      ? `asV${LATEST_VERSION}` as MetaAsX
      : `asV${version - 1}` as MetaAsX;

    if (version !== 'latest' && this.#assertVersion(version)) {
      return this.#metadata()[asCurr] as T;
    }

    if (!this.#converted.has(version)) {
      this.#converted.set(version, fromPrev(this.$registry, this[asPrev] as F, this.version));
    }

    return this.#converted.get(version) as T;
  };

  /**
   * @description the metadata wrapped
   */
  #metadata = (): MetadataAll => {
    return this.getT('metadata');
  };

  /**
   * @description Returns the wrapped metadata as a limited calls-only (latest) version
   */
  public get asCallsOnly (): MetadataVersioned {
    return new MetadataVersioned(this.$registry, {
      magicNumber: this.magicNumber,
      metadata: this.$registry.createTypeUnsafe('MetadataAll', [toCallsOnly(this.$registry, this.asLatest), LATEST_VERSION])
    });
  }

  /**
   * @description Returns the wrapped metadata as a V9 object
   */
  public get asV9 (): MetadataV9 {
    this.#assertVersion(9);

    return this.#metadata().asV9;
  }

  /**
   * @description Returns the wrapped values as a V10 object
   */
  public get asV10 (): MetadataV10 {
    return this.#getVersion(10, toV10);
  }

  /**
   * @description Returns the wrapped values as a V11 object
   */
  public get asV11 (): MetadataV11 {
    return this.#getVersion(11, toV11);
  }

  /**
   * @description Returns the wrapped values as a V12 object
   */
  public get asV12 (): MetadataV12 {
    return this.#getVersion(12, toV12);
  }

  /**
   * @description Returns the wrapped values as a V13 object
   */
  public get asV13 (): MetadataV13 {
    return this.#getVersion(13, toV13);
  }

  /**
   * @description Returns the wrapped values as a V14 object
   */
  public get asV14 (): MetadataV14 {
    return this.#getVersion(14, toV14);
  }

  /**
   * @description Returns the wrapped values as a latest version object
   */
  public get asLatest (): MetadataLatest {
    return this.#getVersion('latest', toLatest);
  }

  /**
   * @description The magicNumber for the Metadata (known constant)
   */
  public get magicNumber (): MagicNumber {
    return this.getT('magicNumber');
  }

  /**
   * @description the metadata version this structure represents
   */
  public get version (): number {
    return this.#metadata().index;
  }

  public getUniqTypes (throwError: boolean): string[] {
    return getUniqTypes(this.$registry, this.asLatest, throwError);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): Record<string, AnyJson> {
    // HACK(y): ensure that we apply the aliases if we have not done so already, this is
    // needed to ensure we have the correct overrides (which is only applied in toLatest)
    // eslint-disable-next-line no-unused-expressions
    this.asLatest;

    return super.toJSON();
  }
}
