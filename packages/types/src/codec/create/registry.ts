/* eslint-disable @typescript-eslint/no-var-requires */
// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CallFunction, Codec, Constructor, RegistryTypes, Registry, RegistryMetadata, TypeDef } from '../../types';

import extrinsicsFromMeta from '@polkadot/metadata/Decorated/extrinsics/fromMetadata';
import { assert, isFunction, isString, isUndefined, stringCamelCase, u8aToHex } from '@polkadot/util';

import Raw from '../Raw';
import { EventData } from '../../primitive/Generic/Event';
import { createClass } from './createClass';
import { getTypeClass } from './getTypeClass';
import { getTypeDef } from './getTypeDef';

const FN_UNKNOWN: Partial<CallFunction> = {
  method: 'unknown',
  section: 'unknown'
};

// create event classes from metadata
function decorateEvents (registry: Registry, metadata: RegistryMetadata, metadataEvents: Record<string, Constructor<EventData>>): void {
  // decorate the events
  metadata.asLatest.modules
    .filter(({ events }): boolean => events.isSome)
    .forEach((section, sectionIndex): void => {
      const sectionName = stringCamelCase(section.name.toString());

      section.events.unwrap().forEach((meta, methodIndex): void => {
        const methodName = meta.name.toString();
        const eventIndex = new Uint8Array([sectionIndex, methodIndex]);
        const typeDef = meta.args.map((arg): TypeDef => getTypeDef(arg.toString()));
        let Types: Constructor<Codec>[] = [];

        try {
          Types = typeDef.map((typeDef): Constructor<Codec> => getTypeClass(registry, typeDef));
        } catch (error) {
          console.error(error);
        }

        metadataEvents[eventIndex.toString()] = class extends EventData {
          constructor (registry: Registry, value: Uint8Array) {
            super(registry, Types, value, typeDef, meta, sectionName, methodName);
          }
        };
      });
    });
}

// create extrinsic mapping from metadata
function decorateExtrinsics (registry: Registry, metadata: RegistryMetadata, metadataCalls: Record<string, CallFunction>): void {
  const extrinsics = extrinsicsFromMeta(registry, metadata);

  // decorate the extrinsics
  Object.values(extrinsics).forEach((methods): void =>
    Object.values(methods).forEach((method): void => {
      metadataCalls[method.callIndex.toString()] = method;
    })
  );
}

export class TypeRegistry implements Registry {
  private _classes: Map<string, Constructor> = new Map();

  private _definitions: Map<string, string> = new Map();

  private _metadataCalls: Record<string, CallFunction> = {};

  private _metadataEvents: Record<string, Constructor<EventData>> = {};

  constructor () {
    // we only want to import these on creation, i.e. we want to avoid types
    // weird side-effects from circular references. (Since registry is injected
    // into types, this can  be a real concern now)
    const baseTypes: RegistryTypes = require('../../index.types');
    const definitions: Record<string, { types: RegistryTypes }> = require('../../interfaces/definitions');

    // since these are classes, they are injected first
    this.register({ Raw, ...baseTypes });

    // since these are definitions, they would only get created when needed
    Object.values(definitions).forEach(({ types }): void =>
      this.register(types)
    );
  }

  public findMetaCall (callIndex: Uint8Array): CallFunction {
    assert(Object.keys(this._metadataCalls).length > 0, 'Calling registry.findMetaCall before metadata has been attached.');

    return this._metadataCalls[callIndex.toString()] || FN_UNKNOWN;
  }

  public findMetaEvent (eventIndex: Uint8Array): Constructor<EventData> {
    assert(Object.keys(this._metadataEvents).length > 0, 'Calling registry.findMetaEvent before metadata has been attached.');

    const Event = this._metadataEvents[eventIndex.toString()];

    assert(!isUndefined(Event), `Unable to find Event with index ${u8aToHex(eventIndex)}`);

    return Event;
  }

  public get <T extends Codec = Codec> (name: string): Constructor<T> | undefined {
    let Type = this._classes.get(name);

    // we have not already created the type, attempt it
    if (!Type) {
      const definition = this._definitions.get(name);

      // we have a definition, so create the class now (lazily)
      if (definition) {
        const BaseType = createClass(this, definition);

        // NOTE If we didn't extend here, we would have strange artifacts. An example is
        // Balance, with this, new Balance() instanceof u128 is true, but Balance !== u128
        // Additionally, we now pass through the registry, which is a link to ourselves
        Type = class extends BaseType {};

        this._classes.set(name, Type);
      }
    }

    return Type as Constructor<T>;
  }

  public getDefinition (name: string): string | undefined {
    return this._definitions.get(name);
  }

  public getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T> {
    const type = this.get<T>(name);

    if (isUndefined(type)) {
      throw new Error(msg || `type ${name} not found`);
    }

    return type;
  }

  public hasClass (name: string): boolean {
    return this._classes.has(name);
  }

  public hasDef (name: string): boolean {
    return this._definitions.has(name);
  }

  public hasType (name: string): boolean {
    return this.hasClass(name) || this.hasDef(name);
  }

  public register (type: Constructor | RegistryTypes): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (name: string, type: Constructor): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void {
    // NOTE Constructors appear as functions here
    if (isFunction(arg1)) {
      this._classes.set(arg1.name, arg1);
    } else if (isString(arg1)) {
      assert(isFunction(arg2), `Expected class definition passed to '${arg1}' registration`);

      this._classes.set(arg1, arg2);
    } else {
      this.registerObject(arg1);
    }
  }

  private registerObject (obj: RegistryTypes): void {
    Object.entries(obj).forEach(([name, type]): void => {
      if (isFunction(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        this._classes.set(name, type);
      } else {
        const def = isString(type)
          ? type
          : JSON.stringify(type);

        // we already have this type, remove the classes registered for it
        if (this._classes.has(name)) {
          this._classes.delete(name);
        }

        this._definitions.set(name, def);
      }
    });
  }

  // sets the metadata
  public setMetadata (metadata: RegistryMetadata): void {
    decorateExtrinsics(this, metadata, this._metadataCalls);
    decorateEvents(this, metadata, this._metadataEvents);
  }
}
