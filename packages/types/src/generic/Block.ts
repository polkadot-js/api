// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types-codec';
import type { AnyNumber, AnyU8a, IU8a, Registry } from '@polkadot/types-codec/types';
import type { GenericExtrinsic } from '../extrinsic/Extrinsic';
import type { Digest, DigestItem, Header } from '../interfaces/runtime';

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
    return this.getT('extrinsics');
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
    return this.getT('header');
  }
}
