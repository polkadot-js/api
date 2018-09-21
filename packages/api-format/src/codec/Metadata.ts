// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import toU8a from '@polkadot/util/u8a/toU8a';

import BaseArray from './base/Array';
import String from './String';

type TMetadataEvent = {};

class MetadataEvent implements Base<TMetadataEvent> {
  value: TMetadataEvent;

  constructor (value: TMetadataEvent = {} as TMetadataEvent) {
    this.value = value;
  }

  byteLength (): number {
    return 0;
  }

  fromJSON (input: any): MetadataEvent {
    throw new Error('Uinimplemented');
  }

  fromU8a (input: Uint8Array): MetadataEvent {
    throw new Error('Uinimplemented');
  }

  toJSON (): any {
    throw new Error('Uinimplemented');
  }

  toU8a (): Uint8Array {
    throw new Error('Uinimplemented');
  }

  toString (): string {
    throw new Error('Uinimplemented');
  }
}

class MetadataEvents extends BaseArray<MetadataEvent> {
  constructor (value?: Array<MetadataEvent>) {
    super(MetadataEvent, value);
  }
}

type TMetadataEventsOuter = {
  name: String,
  events: MetadataEvents
};

class MetadataEventsOuter implements Base<TMetadataEventsOuter> {
  value: TMetadataEventsOuter;

  constructor ({ events = new MetadataEvents(), name = new String() }: TMetadataEventsOuter = {} as TMetadataEventsOuter) {
    this.value = {
      events,
      name
    };
  }

  byteLength (): number {
    return this.value.name.byteLength();
  }

  fromJSON (input: any): MetadataEventsOuter {
    throw new Error('Uinimplemented');
  }

  fromU8a (input: Uint8Array): MetadataEventsOuter {
    this.value.name = new String().fromU8a(input);

    return this;
  }

  toJSON (): any {
    return {
      events: [],
      name: this.value.name.toJSON()
    };
  }

  toString (): string {
    return JSON.stringify(
      this.toJSON()
    );
  }

  toU8a (): Uint8Array {
    throw new Error('Uinimplemented');
  }
}

type TMetadataModules = {};

class MetadataModules implements Base<TMetadataModules> {
  value: TMetadataModules;

  constructor () {
    this.value = {};
  }

  byteLength (): number {
    return 0;
  }

  fromJSON (input: any): Metadata {
    throw new Error('Uinimplemented');
  }

  fromU8a (input: Uint8Array): MetadataModules {
    return this;
  }

  toJSON (): any {
    return this.value;
  }

  toString (): string {
    return JSON.stringify(
      this.toJSON()
    );
  }

  toU8a (): Uint8Array {
    throw new Error('Uinimplemented');
  }
}

type TMetadata = {
  events: MetadataEventsOuter,
  modules: MetadataModules
};

export default class Metadata implements Base<TMetadata> {
  value: TMetadata;

  constructor ({ events = new MetadataEventsOuter(), modules = new MetadataModules() }: TMetadata = {} as TMetadata) {
    this.value = {
      events,
      modules
    };
  }

  byteLength (): number {
    return this.value.events.byteLength() +
      this.value.modules.byteLength();
  }

  fromJSON (input: any): Metadata {
    return this.fromU8a(
      toU8a(input)
    );
  }

  fromU8a (input: Uint8Array): Metadata {
    this.value.events.fromU8a(input);
    this.value.modules.fromU8a(input.subarray(this.value.events.byteLength()));

    return this;
  }

  toJSON (): any {
    return this.value;
  }

  toString (): string {
    return JSON.stringify(
      this.toJSON()
    );
  }

  toU8a (): Uint8Array {
    throw new Error('Uinimplemented');
  }
}
