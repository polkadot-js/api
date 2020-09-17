// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ProviderInterface, ProviderInterfaceCallback } from '@polkadot/rpc-provider/types';
import { Hash } from '@polkadot/types/interfaces';
import { AnyJson, Codec, DefinitionRpc, DefinitionRpcExt, DefinitionRpcSub, Registry } from '@polkadot/types/types';
import { RpcInterface, RpcInterfaceMethod } from './types';

import memoizee from 'memoizee';
import { Observable, Observer } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { Option, StorageKey, Vec, createClass, createTypeUnsafe } from '@polkadot/types';
import { assert, hexToU8a, isFunction, isNull, isUndefined, logger, u8aToU8a } from '@polkadot/util';

import { drr, refCountDelay } from './rxjs';

interface StorageChangeSetJSON {
  block: string;
  changes: [string, string | null][];
}

const l = logger('rpc-core');

const EMPTY_META = {
  fallback: undefined,
  modifier: { isOptional: true },
  type: {
    asMap: { linked: { isTrue: false } },
    isMap: false
  }
};

// utility method to create a nicely-formatted error
/** @internal */
function logErrorMessage (method: string, { params, type }: DefinitionRpc, error: Error): void {
  const inputs = params.map(({ isOptional, name, type }): string =>
    `${name}${isOptional ? '?' : ''}: ${type}`
  ).join(', ');

  l.error(`${method}(${inputs}): ${type}:: ${error.message}`);
}

/**
 * @name Rpc
 * @summary The API may use a HTTP or WebSockets provider.
 * @description It allows for querying a Polkadot Client Node.
 * WebSockets provider is recommended since HTTP provider only supports basic querying.
 *
 * ```mermaid
 * graph LR;
 *   A[Api] --> |WebSockets| B[WsProvider];
 *   B --> |endpoint| C[ws://127.0.0.1:9944]
 * ```
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Rpc from '@polkadot/rpc-core';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const rpc = new Rpc(provider);
 * ```
 */
export default class Rpc implements RpcInterface {
  #instanceId: string;

  #registryDefault: Registry;

  #getBlockRegistry?: (blockHash: string | Uint8Array) => Promise<{ registry: Registry }>;

  readonly #storageCache = new Map<string, string | null>();

  public readonly mapping = new Map<string, DefinitionRpcExt>();

  public readonly provider: ProviderInterface;

  public readonly sections: string[] = [];

  // Ok, this is quite horrible - we really should not be using the ! here, but we are actually assigning
  // these via the createInterfaces inside the constructor. However... this is not quite visible. The reason
  // why we don't do for individual assignments is to allow user-defined RPCs to also be defined

  public readonly author!: RpcInterface['author'];

  public readonly babe!: RpcInterface['babe'];

  public readonly chain!: RpcInterface['chain'];

  public readonly childstate!: RpcInterface['childstate'];

  public readonly contracts!: RpcInterface['contracts'];

  public readonly engine!: RpcInterface['engine'];

  public readonly grandpa!: RpcInterface['grandpa'];

  public readonly offchain!: RpcInterface['offchain'];

  public readonly payment!: RpcInterface['payment'];

  public readonly rpc!: RpcInterface['rpc'];

  public readonly state!: RpcInterface['state'];

  public readonly system!: RpcInterface['system'];

  /**
   * @constructor
   * Default constructor for the Api Object
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (instanceId: string, registry: Registry, provider: ProviderInterface, userRpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = {}) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    assert(provider && isFunction(provider.send), 'Expected Provider to API create');

    this.#instanceId = instanceId;
    this.#registryDefault = registry;
    this.provider = provider;

    const sectionNames = Object.keys(jsonrpc);

    // these are the base keys (i.e. part of jsonrpc)
    this.sections.push(...sectionNames);

    this.addUserInterfaces(userRpc);
  }

  /**
   * @description Returns the connected status of a provider
   */
  public get isConnected (): boolean {
    return this.provider.isConnected;
  }

  /**
   * @description Manually connect from the attached provider
   */
  public connect (): Promise<void> {
    return this.provider.connect();
  }

  /**
   * @description Manually disconnect from the attached provider
   */
  public disconnect (): Promise<void> {
    return this.provider.disconnect();
  }

  /**
   * @description Sets a registry swap (typically from Api)
   */
  public setRegistrySwap (registrySwap: (blockHash: string | Uint8Array) => Promise<{ registry: Registry }>): void {
    this.#getBlockRegistry = registrySwap;
  }

  public addUserInterfaces<Section extends keyof RpcInterface> (userRpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>): void {
    // add any extra user-defined sections
    this.sections.push(...Object.keys(userRpc).filter((key) => !this.sections.includes(key)));

    // decorate the sections with base and user methods
    this.sections.forEach((sectionName): void => {
      if (!(this as Record<string, unknown>)[sectionName as Section]) {
        (this as Record<string, unknown>)[sectionName as Section] = {};
      }

      const section = (this as Record<string, unknown>)[sectionName as Section] as Record<string, any>;

      Object
        .entries({
          ...this._createInterface(sectionName, jsonrpc[sectionName as 'babe'] || {}),
          ...this._createInterface(sectionName, userRpc[sectionName] || {})
        })
        .forEach(([key, value]): void => {
          // we don't want to clobber existing, i.e. when this is called again after chain is determined
          if (!section[key]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            section[key] = value;
          }
        });
    });
  }

  private _createInterface<Section extends keyof RpcInterface> (section: string, methods: Record<string, DefinitionRpc | DefinitionRpcSub>): RpcInterface[Section] {
    return Object
      .keys(methods)
      .filter((method) => !this.mapping.has(`${section}_${method}`))
      .reduce((exposed, method): RpcInterface[Section] => {
        const def = methods[method];
        const isSubscription = !!(def as DefinitionRpcSub).pubsub;

        this.mapping.set(`${section}_${method}`, { ...def, isSubscription, jsonrpc: `${section}_${method}`, method, section });

        // FIXME Remove any here
        // To do so, remove `RpcInterfaceMethod` from './types.ts', and refactor
        // every method inside this class to take:
        // `<S extends keyof RpcInterface, M extends keyof RpcInterface[S]>`
        // Not doing so, because it makes this class a little bit less readable,
        // and leaving it as-is doesn't harm much
        (exposed as Record<string, unknown>)[method] = isSubscription
          ? this._createMethodSubscribe(section, method, def as DefinitionRpcSub)
          : this._createMethodSend(section, method, def);

        return exposed;
      }, {} as RpcInterface[Section]);
  }

  private _createMethodWithRaw (creator: (isRaw: boolean) => (...values: any[]) => Observable<any>): RpcInterfaceMethod {
    const call = creator(false) as Partial<RpcInterfaceMethod>;

    call.raw = creator(true);

    return call as RpcInterfaceMethod;
  }

  private _createMethodSend (section: string, method: string, def: DefinitionRpc): RpcInterfaceMethod {
    const rpcName = `${section}_${method}`;
    const hashIndex = def.params.findIndex(({ isHistoric }) => isHistoric);
    const cacheIndex = def.params.findIndex(({ isCached }) => isCached);
    let memoized: null | RpcInterfaceMethod & memoizee.Memoized<RpcInterfaceMethod> = null;

    // execute the RPC call, doing a registry swap for historic as applicable
    const callWithRegistry = async (isRaw: boolean, values: any[]): Promise<Codec | Codec[]> => {
      const hash = hashIndex === -1
        ? undefined
        : values[hashIndex] as Uint8Array;
      const { registry } = hash && this.#getBlockRegistry
        ? await this.#getBlockRegistry(hash)
        : { registry: this.#registryDefault };
      const params = this._formatInputs(registry, def, values);
      const data = await this.provider.send(rpcName, params.map((param): AnyJson => param.toJSON())) as AnyJson;

      return isRaw
        ? registry.createType('Raw', data)
        : this._formatOutput(registry, method, def, params, data);
    };

    const creator = (isRaw: boolean) => (...values: any[]): Observable<any> => {
      const isDelayed = (hashIndex !== -1 && !!values[hashIndex]) || (cacheIndex !== -1 && !!values[cacheIndex]);

      return new Observable((observer: Observer<any>): VoidCallback => {
        callWithRegistry(isRaw, values)
          .then((value): void => {
            observer.next(value);
            observer.complete();
          })
          .catch((error): void => {
            logErrorMessage(method, def, error);

            observer.error(error);
            observer.complete();
          });

        return (): void => {
          // delete old results from cache
          memoized?.delete(...values);
        };
      }).pipe(
        publishReplay(1), // create a Replay(1)
        isDelayed
          ? refCountDelay() // Unsubscribe after delay
          : refCount()
      );
    };

    memoized = memoizee(this._createMethodWithRaw(creator), {
      length: false,
      normalizer: (args) => this.#instanceId + JSON.stringify(args)
    });

    return memoized;
  }

  // create a subscriptor, it subscribes once and resolves with the id as subscribe
  private _createSubscriber ({ paramsJson, subName, subType, update }: { subType: string; subName: string; paramsJson: AnyJson[]; update: ProviderInterfaceCallback }, errorHandler: (error: Error) => void): Promise<number | string> {
    return new Promise((resolve, reject): void => {
      this.provider
        .subscribe(subType, subName, paramsJson, update)
        .then(resolve)
        .catch((error): void => {
          errorHandler(error);
          reject(error);
        });
    });
  }

  private _createMethodSubscribe (section: string, method: string, def: DefinitionRpcSub): RpcInterfaceMethod {
    const [updateType, subMethod, unsubMethod] = def.pubsub;
    const subName = `${section}_${subMethod}`;
    const unsubName = `${section}_${unsubMethod}`;
    const subType = `${section}_${updateType}`;
    let memoized: null | RpcInterfaceMethod & memoizee.Memoized<RpcInterfaceMethod> = null;

    const creator = (isRaw: boolean) => (...values: unknown[]): Observable<any> => {
      return new Observable((observer: Observer<any>): VoidCallback => {
        // Have at least an empty promise, as used in the unsubscribe
        let subscriptionPromise: Promise<number | string | null> = Promise.resolve(null);
        const registry = this.#registryDefault;

        const errorHandler = (error: Error): void => {
          logErrorMessage(method, def, error);

          observer.error(error);
        };

        try {
          const params = this._formatInputs(registry, def, values);
          const paramsJson = params.map((param): AnyJson => param.toJSON());

          const update = (error?: Error | null, result?: any): void => {
            if (error) {
              logErrorMessage(method, def, error);

              return;
            }

            try {
              observer.next(
                isRaw
                  ? registry.createType('Raw', result)
                  : this._formatOutput(registry, method, def, params, result)
              );
            } catch (error) {
              observer.error(error);
            }
          };

          subscriptionPromise = this._createSubscriber({ paramsJson, subName, subType, update }, errorHandler);
        } catch (error) {
          errorHandler(error);
        }

        // Teardown logic
        return (): void => {
          // Delete from cache, so old results don't hang around
          memoized?.delete(...values);

          // Unsubscribe from provider
          subscriptionPromise
            .then((subscriptionId): Promise<boolean> =>
              isNull(subscriptionId)
                ? Promise.resolve(false)
                : this.provider.unsubscribe(subType, unsubName, subscriptionId)
            )
            .catch((error: Error) => logErrorMessage(method, def, error));
        };
      }).pipe(drr());
    };

    memoized = memoizee(this._createMethodWithRaw(creator), {
      // Dynamic length for argument
      length: false,
      // Normalize args so that different args that should be cached
      // together are cached together.
      // E.g.: `query.my.method('abc') === query.my.method(createType('AccountId', 'abc'));`
      // eslint-disable-next-line @typescript-eslint/unbound-method
      normalizer: (args) => this.#instanceId + JSON.stringify(args)
    });

    return memoized;
  }

  private _formatInputs (registry: Registry, def: DefinitionRpc, inputs: any[]): Codec[] {
    const reqArgCount = def.params.filter(({ isOptional }): boolean => !isOptional).length;
    const optText = reqArgCount === def.params.length
      ? ''
      : ` (${def.params.length - reqArgCount} optional)`;

    assert(inputs.length >= reqArgCount && inputs.length <= def.params.length, `Expected ${def.params.length} parameters${optText}, ${inputs.length} found instead`);

    return inputs.map((input, index): Codec =>
      createTypeUnsafe(registry, def.params[index].type, [input])
    );
  }

  private _treatAsHex (key: StorageKey): boolean {
    // :code is problematic - it does not have the length attached, which is
    // unlike all other storage entries where it is indeed properly encoded
    return ['0x3a636f6465'].includes(key.toHex());
  }

  private _formatOutput (registry: Registry, method: string, rpc: DefinitionRpc, params: Codec[], result?: any): Codec | Codec[] {
    if (rpc.type === 'StorageData') {
      const key = params[0] as StorageKey;

      try {
        return this._formatStorageData(registry, key, result);
      } catch (error) {
        console.error(`Unable to decode storage ${key.section || 'unknown'}.${key.method || 'unknown'}:`, (error as Error).message);

        throw error;
      }
    } else if (rpc.type === 'StorageChangeSet') {
      const keys = params[0] as Vec<StorageKey>;

      return keys
        ? this._formatStorageSet(registry, keys, (result as StorageChangeSetJSON).changes)
        : registry.createType('StorageChangeSet', result);
    } else if (rpc.type === 'Vec<StorageChangeSet>') {
      const mapped = (result as StorageChangeSetJSON[]).map(({ block, changes }): [Hash, Codec[]] => [
        registry.createType('Hash', block),
        this._formatStorageSet(registry, params[0] as Vec<StorageKey>, changes)
      ]);

      // we only query at a specific block, not a range - flatten
      return method === 'queryStorageAt'
        ? mapped[0][1]
        : mapped as unknown as Codec[];
    }

    return createTypeUnsafe(registry, rpc.type, [result]);
  }

  private _formatStorageData (registry: Registry, key: StorageKey, value: string | null): Codec {
    // single return value (via state.getStorage), decode the value based on the
    // outputType that we have specified. Fallback to Raw on nothing
    const type = key.outputType || 'Raw';
    const meta = key.meta || EMPTY_META;
    const isEmpty = isNull(value);

    // we convert to Uint8Array since it maps to the raw encoding, all
    // data will be correctly encoded (incl. numbers, excl. :code)
    const input = isEmpty
      ? null
      : this._treatAsHex(key)
        ? value
        : u8aToU8a(value);

    if (meta.modifier.isOptional) {
      return new Option(
        registry,
        createClass(registry, type),
        isEmpty
          ? null
          : createTypeUnsafe(registry, type, [input], true)
      );
    }

    return createTypeUnsafe(registry, type, [
      isEmpty
        ? meta.fallback
          ? hexToU8a(meta.fallback.toHex())
          : undefined
        : input
    ], true);
  }

  private _formatStorageSet (registry: Registry, keys: Vec<StorageKey>, changes: [string, string | null][]): Codec[] {
    // For StorageChangeSet, the changes has the [key, value] mappings
    const withCache = keys.length !== 1;

    // multiple return values (via state.storage subscription), decode the values
    // one at a time, all based on the query types. Three values can be returned -
    //   - Codec - There is a valid value, non-empty
    //   - null - The storage key is empty
    return keys.reduce((results: Codec[], key: StorageKey): Codec[] => {
      try {
        results.push(this._formatStorageSetEntry(registry, key, changes, withCache));
      } catch (error) {
        console.error(`Unable to decode storage ${key.section || 'unknown'}.${key.method || 'unknown'}:`, (error as Error).message);

        throw error;
      }

      return results;
    }, []);
  }

  private _formatStorageSetEntry (registry: Registry, key: StorageKey, changes: [string, string | null][], witCache: boolean): Codec {
    // Fallback to Raw (i.e. just the encoding) if we don't have a specific type
    const type = key.outputType || 'Raw';
    const hexKey = key.toHex();
    const meta = key.meta || EMPTY_META;
    const found = changes.find(([key]): boolean => key === hexKey);

    // if we don't find the value, this is our fallback
    //   - in the case of an array of values, fill the hole from the cache
    //   - if a single result value, don't fill - it is not an update hole
    //   - fallback to an empty option in all cases
    const value = isUndefined(found)
      ? (witCache && this.#storageCache.get(hexKey)) || null
      : found[1];
    const isEmpty = isNull(value);
    const input = isEmpty || this._treatAsHex(key)
      ? value
      : u8aToU8a(value);

    // store the retrieved result - the only issue with this cache is that there is no
    // clearing of it, so very long running processes (not just a couple of hours, longer)
    // will increase memory beyond what is allowed.
    this.#storageCache.set(hexKey, value);

    if (meta.modifier.isOptional) {
      return new Option(
        registry,
        createClass(registry, type),
        isEmpty
          ? null
          : createTypeUnsafe(registry, type, [input], true)
      );
    }

    return createTypeUnsafe(registry, type, [
      isEmpty
        ? meta.fallback
          ? hexToU8a(meta.fallback.toHex())
          : undefined
        : input
    ], true);
  }
}
