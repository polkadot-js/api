// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef } from '../create/types';
import { EventMetadataLatest } from '../interfaces/metadata';
import { EventId } from '../interfaces/system';
import { AnyJson, Constructor, Registry, RegistryMetadataEvent } from '../types';

import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import Null from '../primitive/Null';

/**
 * @name EventData
 * @description
 * Wrapper for the actual data that forms part of an [[Event]]
 */
export class EventData extends Tuple {
  readonly #meta: EventMetadataLatest;

  readonly #method: string;

  readonly #section: string;

  readonly #typeDef: TypeDef[];

  constructor (registry: Registry, Types: Constructor[], value: Uint8Array, typeDef: TypeDef[], meta: RegistryMetadataEvent, section: string, method: string) {
    super(registry, Types, value);

    this.#meta = meta as EventMetadataLatest;
    this.#method = method;
    this.#section = section;
    this.#typeDef = typeDef;
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
}

/**
 * @name Event
 * @description
 * A representation of a system event. These are generated via the [[Metadata]] interfaces and
 * specific to a specific Substrate runtime
 */
export default class Event extends Struct {
  // Currently we _only_ decode from Uint8Array, since we expect it to
  // be used via EventRecord
  constructor (registry: Registry, _value?: Uint8Array) {
    const { DataType, value } = Event.decodeEvent(registry, _value);

    super(registry, {
      index: 'EventId',
      // eslint-disable-next-line sort-keys
      data: DataType
    }, value);
  }

  /** @internal */
  public static decodeEvent (registry: Registry, value: Uint8Array = new Uint8Array()): { DataType: Constructor<Null> | Constructor<EventData>; value?: { index: Uint8Array; data: Uint8Array } } {
    if (!value.length) {
      return {
        DataType: Null
      };
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
   * @description The wrapped [[EventData]]
   */
  public get data (): EventData {
    return this.get('data') as EventData;
  }

  /**
   * @description The [[EventId]], identifying the raw event
   */
  public get index (): EventId {
    return this.get('index') as EventId;
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toHuman (isExpanded?: boolean): AnyJson {
    // FIXME May this human-friendly
    return this.toJSON();
  }
}
