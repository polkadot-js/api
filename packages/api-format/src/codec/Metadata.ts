// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import toU8a from '@polkadot/util/u8a/toU8a';

import BaseArray from './base/Array';
import String from './String';

class MetadataEventArguments extends BaseArray<String> {
  constructor (value?: Array<String>) {
    super(String, value);
  }
}

class MetadataEventDocumentation extends BaseArray<String> {
  constructor (value?: Array<String>) {
    super(String, value);
  }
}

type TMetadataEvent = {
  args: MetadataEventArguments,
  docs: MetadataEventDocumentation,
  name: String
};

class MetadataEvent implements Base<TMetadataEvent> {
  value: TMetadataEvent;

  constructor ({ args = new MetadataEventArguments(), docs = new MetadataEventDocumentation(), name = new String() }: TMetadataEvent = {} as TMetadataEvent) {
    this.value = {
      args,
      docs,
      name
    };
  }

  byteLength (): number {
    return this.value.args.byteLength() +
      this.value.docs.byteLength() +
      this.value.name.byteLength();
  }

  fromJSON (input: any): MetadataEvent {
    throw new Error('MetadataEvent::fromJSON: Uinimplemented');
  }

  fromU8a (input: Uint8Array): MetadataEvent {
    this.value.name.fromU8a(input);

    const nameLength = this.value.name.byteLength();

    this.value.args.fromU8a(input.subarray(nameLength));
    this.value.docs.fromU8a(input.subarray(nameLength + this.value.args.byteLength()));

    return this;
  }

  toJSON (): any {
    return {
      args: this.value.args.toJSON(),
      docs: this.value.docs.toJSON(),
      name: this.value.name.toJSON()
    };
  }

  toU8a (): Uint8Array {
    throw new Error('MetadataEvent::toU8a: Uinimplemented');
  }

  toString (): string {
    throw JSON.stringify({
      args: this.value.args.toString(),
      docs: this.value.docs.toString(),
      name: this.value.name.toString()
    });
  }
}

class MetadataEvents extends BaseArray<MetadataEvent> {
  constructor (value?: Array<MetadataEvent>) {
    super(MetadataEvent, value);
  }
}

type TMetadataEventsOuter = {
  events: MetadataEvents,
  name: String
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
    return this.value.events.byteLength() +
      this.value.name.byteLength();
  }

  fromJSON (input: any): MetadataEventsOuter {
    throw new Error('MetadataEventsOuter::fromJSON: Uinimplemented');
  }

  fromU8a (input: Uint8Array): MetadataEventsOuter {
    this.value.name = new String().fromU8a(input);
    this.value.events = new MetadataEvents().fromU8a(input.subarray(this.value.name.byteLength()));

    return this;
  }

  toJSON (): any {
    return {
      events: this.value.events.toJSON(),
      name: this.value.name.toJSON()
    };
  }

  toString (): string {
    return JSON.stringify({
      events: this.value.events.toString(),
      name: this.value.name.toString()
    });
  }

  toU8a (): Uint8Array {
    throw new Error('MetadataEventsOuter::toU8a: Uinimplemented');
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
    throw new Error('MetadataModules::fromJSON: Uinimplemented');
  }

  fromU8a (input: Uint8Array): MetadataModules {
    return this;
  }

  toJSON (): any {
    return this.value;
  }

  toString (): string {
    return JSON.stringify(this.value);
  }

  toU8a (): Uint8Array {
    throw new Error('MetadataModules::toU8a: Uinimplemented');
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
    return {
      events: this.value.events.toJSON(),
      modules: this.value.modules.toJSON()
    };
  }

  toString (): string {
    return JSON.stringify(this.toJSON());
  }

  toText (): string {
    return this.toString();
  }

  toU8a (): Uint8Array {
    throw new Error('Metadata::toU8a: Uinimplemented');
  }
}
