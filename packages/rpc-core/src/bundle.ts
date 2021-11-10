// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observer } from 'rxjs';
import type { ProviderInterface, ProviderInterfaceCallback } from '@polkadot/rpc-provider/types';
import type { StorageKey, Vec } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { AnyJson, Codec, DefinitionRpc, DefinitionRpcExt, DefinitionRpcSub, Registry } from '@polkadot/types/types';
import type { Memoized } from '@polkadot/util/types';
import type { RpcInterfaceMethod } from './types';

import { Observable, publishReplay, refCount } from 'rxjs';

import { rpcDefinitions } from '@polkadot/types';
import { assert, hexToU8a, isFunction, isNull, isUndefined, lazyMethod, logger, memoize, objectSpread, u8aToU8a } from '@polkadot/util';

import { drr, refCountDelay } from './util';

export { packageInfo } from './packageInfo';
export * from './util';

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

function isTreatAsHex (key: StorageKey): boolean {
  // :code is problematic - it does not have the length attached, which is
  // unlike all other storage entries where it is indeed properly encoded
  return ['0x3a636f6465'].includes(key.toHex());
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
 * import { WsProvider } from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const rpc = new Rpc(provider);
 * ```
 */
export class RpcCore {
  #instanceId: string;

  #registryDefault: Registry;

  #getBlockRegistry?: (blockHash: Uint8Array) => Promise<{ registry: Registry }>;

  readonly #storageCache = new Map<string, string | null>();

  public readonly mapping = new Map<string, DefinitionRpcExt>();

  public readonly provider: ProviderInterface;

  public readonly sections: string[] = [];

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

    const sectionNames = Object.keys(rpcDefinitions);

    // these are the base keys (i.e. part of jsonrpc)
    this.sections.push(...sectionNames);

    // decorate all interfaces, defined and user on this instance
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
  public setRegistrySwap (registrySwap: (blockHash: Uint8Array) => Promise<{ registry: Registry }>): void {
    this.#getBlockRegistry = memoize(registrySwap, {
      getInstanceId: () => this.#instanceId
    });
  }

  public addUserInterfaces (userRpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>): void {
    // add any extra user-defined sections
    this.sections.push(...Object.keys(userRpc).filter((k) => !this.sections.includes(k)));

    for (let s = 0; s < this.sections.length; s++) {
      const section = this.sections[s];
      const defs = objectSpread<Record<string, DefinitionRpc | DefinitionRpcSub>>({}, rpcDefinitions[section as 'babe'], userRpc[section]);
      const methods = Object.keys(defs);

      for (let m = 0; m < methods.length; m++) {
        const method = methods[m];
        const def = defs[method];
        const jsonrpc = def.endpoint || `${section}_${method}`;

        if (!this.mapping.has(jsonrpc)) {
          const isSubscription = !!(def as DefinitionRpcSub).pubsub;

          if (!(this as Record<string, unknown>)[section]) {
            (this as Record<string, unknown>)[section] = {};
          }

          this.mapping.set(jsonrpc, objectSpread({}, def, { isSubscription, jsonrpc, method, section }));

          lazyMethod(this[section as 'connect'], method, () =>
            isSubscription
              ? this._createMethodSubscribe(section, method, def as DefinitionRpcSub)
              : this._createMethodSend(section, method, def)
          );
        }
      }
    }
  }

  private _memomize (creator: <T> (isScale: boolean) => (...values: unknown[]) => Observable<T>, def: DefinitionRpc): Memoized<RpcInterfaceMethod> {
    const memoOpts = { getInstanceId: () => this.#instanceId };
    const memoized = memoize(creator(true) as RpcInterfaceMethod, memoOpts);

    memoized.raw = memoize(creator(false), memoOpts);
    memoized.meta = def;

    return memoized;
  }

  private _formatResult <T> (isScale: boolean, registry: Registry, blockHash: string | Uint8Array | null | undefined, method: string, def: DefinitionRpc, params: Codec[], result: unknown): T {
    return isScale
      ? this._formatOutput(registry, blockHash, method, def, params, result) as unknown as T
      : result as T;
  }

  private _createMethodSend (section: string, method: string, def: DefinitionRpc): RpcInterfaceMethod {
    const rpcName = def.endpoint || `${section}_${method}`;
    const hashIndex = def.params.findIndex(({ isHistoric }) => isHistoric);
    let memoized: null | Memoized<RpcInterfaceMethod> = null;

    // execute the RPC call, doing a registry swap for historic as applicable
    const callWithRegistry = async <T> (isScale: boolean, values: unknown[]): Promise<T> => {
      const blockHash = hashIndex === -1
        ? null
        : values[hashIndex] as (Uint8Array | string | null | undefined);
      const { registry } = isScale && blockHash && this.#getBlockRegistry
        ? await this.#getBlockRegistry(u8aToU8a(blockHash))
        : { registry: this.#registryDefault };
      const params = this._formatInputs(registry, null, def, values);
      const result = await this.provider.send<AnyJson>(rpcName, params.map((p) => p.toJSON()), !!blockHash);

      return this._formatResult(isScale, registry, blockHash, method, def, params, result);
    };

    const creator = <T> (isScale: boolean) => (...values: unknown[]): Observable<T> => {
      const isDelayed = isScale && hashIndex !== -1 && !!values[hashIndex];

      return new Observable((observer: Observer<T>): VoidCallback => {
        callWithRegistry<T>(isScale, values)
          .then((value): void => {
            observer.next(value);
            observer.complete();
          })
          .catch((error: Error): void => {
            logErrorMessage(method, def, error);

            observer.error(error);
            observer.complete();
          });

        return (): void => {
          // delete old results from cache
          memoized?.unmemoize(...values);
        };
      }).pipe(
        publishReplay(1), // create a Replay(1)
        isDelayed
          ? refCountDelay() // Unsubscribe after delay
          : refCount()
      );
    };

    memoized = this._memomize(creator, def);

    return memoized;
  }

  // create a subscriptor, it subscribes once and resolves with the id as subscribe
  private _createSubscriber ({ paramsJson, subName, subType, update }: { subType: string; subName: string; paramsJson: AnyJson[]; update: ProviderInterfaceCallback }, errorHandler: (error: Error) => void): Promise<number | string> {
    return new Promise((resolve, reject): void => {
      this.provider
        .subscribe(subType, subName, paramsJson, update)
        .then(resolve)
        .catch((error: Error): void => {
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
    let memoized: null | Memoized<RpcInterfaceMethod> = null;

    const creator = <T> (isScale: boolean) => (...values: unknown[]): Observable<T> => {
      return new Observable((observer: Observer<T>): VoidCallback => {
        // Have at least an empty promise, as used in the unsubscribe
        let subscriptionPromise: Promise<number | string | null> = Promise.resolve(null);
        const registry = this.#registryDefault;

        const errorHandler = (error: Error): void => {
          logErrorMessage(method, def, error);

          observer.error(error);
        };

        try {
          const params = this._formatInputs(registry, null, def, values);
          const paramsJson = params.map((p) => p.toJSON());

          const update = (error?: Error | null, result?: unknown): void => {
            if (error) {
              logErrorMessage(method, def, error);

              return;
            }

            try {
              observer.next(this._formatResult(isScale, registry, null, method, def, params, result));
            } catch (error) {
              observer.error(error);
            }
          };

          subscriptionPromise = this._createSubscriber({ paramsJson, subName, subType, update }, errorHandler);
        } catch (error) {
          errorHandler(error as Error);
        }

        // Teardown logic
        return (): void => {
          // Delete from cache, so old results don't hang around
          memoized?.unmemoize(...values);

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

    memoized = this._memomize(creator, def);

    return memoized;
  }

  private _formatInputs (registry: Registry, blockHash: Uint8Array | string | null | undefined, def: DefinitionRpc, inputs: unknown[]): Codec[] {
    const reqArgCount = def.params.filter(({ isOptional }) => !isOptional).length;
    const optText = reqArgCount === def.params.length
      ? ''
      : ` (${def.params.length - reqArgCount} optional)`;

    assert(inputs.length >= reqArgCount && inputs.length <= def.params.length, () => `Expected ${def.params.length} parameters${optText}, ${inputs.length} found instead`);

    return inputs.map((input, index): Codec =>
      registry.createTypeUnsafe(def.params[index].type, [input], { blockHash })
    );
  }

  private _formatOutput (registry: Registry, blockHash: Uint8Array | string | null | undefined, method: string, rpc: DefinitionRpc, params: Codec[], result?: unknown): Codec | Codec[] {
    if (rpc.type === 'StorageData') {
      const key = params[0] as StorageKey;

      return this._formatStorageData(registry, blockHash, key, result as string);
    } else if (rpc.type === 'StorageChangeSet') {
      const keys = params[0] as Vec<StorageKey>;

      return keys
        ? this._formatStorageSet(registry, (result as StorageChangeSetJSON).block, keys, (result as StorageChangeSetJSON).changes)
        : registry.createType('StorageChangeSet', result);
    } else if (rpc.type === 'Vec<StorageChangeSet>') {
      const mapped = (result as StorageChangeSetJSON[]).map(({ block, changes }): [Hash, Codec[]] => [
        registry.createType('Hash', block),
        this._formatStorageSet(registry, block, params[0] as Vec<StorageKey>, changes)
      ]);

      // we only query at a specific block, not a range - flatten
      return method === 'queryStorageAt'
        ? mapped[0][1]
        : mapped as unknown as Codec[];
    }

    return registry.createTypeUnsafe(rpc.type, [result], { blockHash });
  }

  private _formatStorageData (registry: Registry, blockHash: Uint8Array | string | null | undefined, key: StorageKey, value: string | null): Codec {
    const isEmpty = isNull(value);

    // we convert to Uint8Array since it maps to the raw encoding, all
    // data will be correctly encoded (incl. numbers, excl. :code)
    const input = isEmpty
      ? null
      : isTreatAsHex(key)
        ? value
        : u8aToU8a(value);

    return this._newType(registry, blockHash, key, input, isEmpty);
  }

  private _formatStorageSet (registry: Registry, blockHash: string, keys: Vec<StorageKey>, changes: [string, string | null][]): Codec[] {
    // For StorageChangeSet, the changes has the [key, value] mappings
    const withCache = keys.length !== 1;

    // multiple return values (via state.storage subscription), decode the values
    // one at a time, all based on the query types. Three values can be returned -
    //   - Codec - There is a valid value, non-empty
    //   - null - The storage key is empty
    return keys.reduce((results: Codec[], key: StorageKey, index): Codec[] => {
      results.push(this._formatStorageSetEntry(registry, blockHash, key, changes, withCache, index));

      return results;
    }, []);
  }

  private _formatStorageSetEntry (registry: Registry, blockHash: string, key: StorageKey, changes: [string, string | null][], witCache: boolean, entryIndex: number): Codec {
    const hexKey = key.toHex();
    const found = changes.find(([key]) => key === hexKey);

    // if we don't find the value, this is our fallback
    //   - in the case of an array of values, fill the hole from the cache
    //   - if a single result value, don't fill - it is not an update hole
    //   - fallback to an empty option in all cases
    const value = isUndefined(found)
      ? (witCache && this.#storageCache.get(hexKey)) || null
      : found[1];
    const isEmpty = isNull(value);
    const input = isEmpty || isTreatAsHex(key)
      ? value
      : u8aToU8a(value);

    // store the retrieved result - the only issue with this cache is that there is no
    // clearing of it, so very long running processes (not just a couple of hours, longer)
    // will increase memory beyond what is allowed.
    this.#storageCache.set(hexKey, value);

    return this._newType(registry, blockHash, key, input, isEmpty, entryIndex);
  }

  private _newType (registry: Registry, blockHash: Uint8Array | string | null | undefined, key: StorageKey, input: string | Uint8Array | null, isEmpty: boolean, entryIndex = -1): Codec {
    // single return value (via state.getStorage), decode the value based on the
    // outputType that we have specified. Fallback to Raw on nothing
    const type = key.outputType || 'Raw';
    const meta = key.meta || EMPTY_META;
    const entryNum = entryIndex === -1
      ? ''
      : ` entry ${entryIndex}:`;

    try {
      return registry.createTypeUnsafe(type, [
        isEmpty
          ? meta.fallback
            ? hexToU8a(meta.fallback.toHex())
            : undefined
          : meta.modifier.isOptional
            ? registry.createTypeUnsafe(type, [input], { blockHash, isPedantic: true })
            : input
      ], { blockHash, isOptional: meta.modifier.isOptional, isPedantic: !meta.modifier.isOptional });
    } catch (error) {
      throw new Error(`Unable to decode storage ${key.section || 'unknown'}.${key.method || 'unknown'}:${entryNum}: ${(error as Error).message}`);
    }
  }
}
