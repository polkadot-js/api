// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types-codec';
import type { IU8a } from '@polkadot/types-codec/types';
import type { GenericExtrinsic } from '../extrinsic/Extrinsic';
import type { Digest, DigestItem, Header } from '../interfaces/runtime';
import type { AnyNumber, AnyU8a, Registry } from '../types';

import { Struct } from '@polkadot/types-codec';

export interface HeaderValue {
  digest?: Digest | { logs: DigestItem[] | string[] };
  extrinsicsRoot?: AnyU8a;
  number?: AnyNumber;
  parentHash?: AnyU8a;
  stateRoot?: AnyU8a;
}

export interface BlockValue {
  extrinsics?: AnyU8a[];
  header?: HeaderValue;
}

/**
 * @name GenericBlock
 * @description
 * A block encoded with header and extrinsics
 */
export class GenericBlock extends Struct {
  constructor (registry: Registry, value?: BlockValue | Uint8Array) {
    super(registry, {
      header: 'Header',
      // eslint-disable-next-line sort-keys
      extrinsics: 'Vec<Extrinsic>'
    }, value);
  }

  /**
   * @description Encodes a content [[Hash]] for the block
   */
  public get contentHash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description The [[Extrinsic]] contained in the block
   */
  public get extrinsics (): Vec<GenericExtrinsic> {
    return this.get('extrinsics') as Vec<GenericExtrinsic>;
  }

  /**
   * @description Block/header [[Hash]]
   */
  public override get hash (): IU8a {
    return this.header.hash;
  }

  /**
   * @description The [[Header]] of the block
   */
  public get header (): Header {
    return this.get('header') as Header;
  }
}
