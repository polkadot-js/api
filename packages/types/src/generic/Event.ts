// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, Codec, CodecClass } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { EventMetadataLatest } from '../interfaces/metadata';
import type { EventId } from '../interfaces/system';
import type { IEvent, IEventData, InterfaceTypes, Registry } from '../types';

import { Null, Struct, Tuple } from '@polkadot/types-codec';
import { objectProperties, objectSpread } from '@polkadot/util';

interface Decoded {
  DataType: CodecClass<Null> | CodecClass<GenericEventData>;
  value?: {
    index: Uint8Array;
    data: Uint8Array;
  }
}

/** @internal */
function decodeEvent (registry: Registry, value?: Uint8Array): Decoded {
  if (!value || !value.length) {
    return { DataType: Null };
  }

  const index = value.subarray(0, 2);

  return {
    DataType: registry.findMetaEvent(index),
    value: {
      data: value.subarray(2),
      index
    }
  };
}

/**
 * @name GenericEventData
 * @description
 * Wrapper for the actual data that forms part of an [[Event]]
 */
export class GenericEventData extends Tuple implements IEventData {
  readonly #meta: EventMetadataLatest;

  readonly #method: string;

  readonly #names: string[] | null = null;

  readonly #section: string;

  readonly #typeDef: TypeDef[];

  constructor (registry: Registry, value: Uint8Array, meta: EventMetadataLatest, section = '<unknown>', method = '<unknown>') {
    const fields = meta?.fields || [];

    super(registry, fields.map(({ type }) => registry.createLookupType(type) as keyof InterfaceTypes), value);

    this.#meta = meta;
    this.#method = method;
    this.#section = section;
    this.#typeDef = fields.map(({ type }) => registry.lookup.getTypeDef(type));

    const names = fields
      .map(({ name }) => registry.lookup.sanitizeField(name)[0])
      .filter((n): n is string => !!n);

    if (names.length === fields.length) {
      this.#names = names;

      objectProperties(this, names, (_, i) => this[i]);
    }
  }

  /**
   * @description The wrapped [[EventMetadata]]
   */
  public get meta (): EventMetadataLatest {
    return this.#meta;
  }

  /**
   * @description The method as a string
   */
  public get method (): string {
    return this.#method;
  }

  /**
   * @description The field names (as available)
   */
  public get names (): string[] | null {
    return this.#names;
  }

  /**
   * @description The section as a string
   */
  public get section (): string {
    return this.#section;
  }

  /**
   * @description The [[TypeDef]] for this event
   */
  public get typeDef (): TypeDef[] {
    return this.#typeDef;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExtended?: boolean): AnyJson {
    if (this.#names !== null) {
      const json: Record<string, AnyJson> = {};

      for (let i = 0; i < this.#names.length; i++) {
        json[this.#names[i]] = this[i].toHuman(isExtended);
      }

      return json;
    }

    return super.toHuman(isExtended);
  }
}

/**
 * @name GenericEvent
 * @description
 * A representation of a system event. These are generated via the [[Metadata]] interfaces and
 * specific to a specific Substrate runtime
 */
export class GenericEvent extends Struct implements IEvent<Codec[], Record<string, Codec>> {
  // Currently we _only_ decode from Uint8Array, since we expect it to
  // be used via EventRecord
  constructor (registry: Registry, _value?: Uint8Array) {
    const { DataType, value } = decodeEvent(registry, _value);

    super(registry, {
      index: 'EventId',
      // eslint-disable-next-line sort-keys
      data: DataType
    }, value);
  }

  /**
   * @description The wrapped [[EventData]]
   */
  public get data (): GenericEventData & Record<string, Codec> {
    return this.getT('data');
  }

  /**
   * @description The [[EventId]], identifying the raw event
   */
  public get index (): EventId {
    return this.getT('index');
  }

  /**
   * @description The [[EventMetadata]] with the documentation
   */
  public get meta (): EventMetadataLatest {
    return this.data.meta;
  }

  /**
   * @description The method string identifying the event
   */
  public get method (): string {
    return this.data.method;
  }

  /**
   * @description The section string identifying the event
   */
  public get section (): string {
    return this.data.section;
  }

  /**
   * @description The [[TypeDef]] for the event
   */
  public get typeDef (): TypeDef[] {
    return this.data.typeDef;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExpanded?: boolean): Record<string, AnyJson> {
    return objectSpread(
      {
        method: this.method,
        section: this.section
      },
      isExpanded
        ? { docs: this.meta.docs.map((d) => d.toString()) }
        : null,
      super.toHuman(isExpanded)
    );
  }
}
