// Copyright 2017-2023 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observer } from 'rxjs';
import type { ProviderInterface, ProviderInterfaceCallback } from '@polkadot/rpc-provider/types';
import type { StorageKey, Vec } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { AnyJson, AnyNumber, Codec, DefinitionRpc, DefinitionRpcExt, DefinitionRpcSub, Registry } from '@polkadot/types/types';
import type { Memoized } from '@polkadot/util/types';
import type { RpcInterfaceMethod } from './types/index.js';

import { Observable, publishReplay, refCount } from 'rxjs';

import { rpcDefinitions } from '@polkadot/types';
import { hexToU8a, isFunction, isNull, isUndefined, lazyMethod, logger, memoize, objectSpread, u8aConcat, u8aToU8a } from '@polkadot/util';

import { drr, refCountDelay } from './util/index.js';

export { packageInfo } from './packageInfo.js';
export * from './util/index.js';

interface StorageChangeSetJSON {
  block: string;
  changes: [string, string | null][];
}

type MemoizedRpcInterfaceMethod = Memoized<RpcInterfaceMethod> & {
  raw: Memoized<RpcInterfaceMethod>;
  meta: DefinitionRpc;
}

interface Options {
  isPedantic?: boolean;
  provider: ProviderInterface;
  userRpc?: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
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
function logErrorMessage (method: string, { noErrorLog, params, type }: DefinitionRpc, error: Error): void {
  if (noErrorLog) {
    return;
  }

  l.error(`${method}(${
    params.map(({ isOptional, name, type }): string =>
      `${name}${isOptional ? '?' : ''}: ${type}`
    ).join(', ')
  }): ${type}:: ${error.message}`);
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
  readonly #instanceId: string;
  readonly #isPedantic: boolean;
  readonly #registryDefault: Registry;
  readonly #storageCache = new Map<string, Codec>();

  #getBlockRegistry?: (blockHash: Uint8Array) => Promise<{ registry: Registry }>;
  #getBlockHash?: (blockNumber: AnyNumber) => Promise<Uint8Array>;

  readonly mapping = new Map<string, DefinitionRpcExt>();
  readonly provider: ProviderInterface;
  readonly sections: string[] = [];

  /**
   * @constructor
   * Default constructor for the core RPC handler
   * @param  {ProviderInterface} provider An API provider using any of the supported providers (HTTP, SC or WebSocket)
   */
  constructor (instanceId: string, registry: Registry, { isPedantic = true, provider, userRpc = {} }: Options) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (!provider || !isFunction(provider.send)) {
      throw new Error('Expected Provider to API create');
    }

    this.#instanceId = instanceId;
    this.#isPedantic = isPedantic;
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

  /**
   * @description Sets a function to resolve block hash from block number
   */
  public setResolveBlockHash (resolveBlockHash: (blockNumber: AnyNumber) => Promise<Uint8Array>): void {
    this.#getBlockHash = memoize(resolveBlockHash, {
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

  private _memomize (creator: <T> (isScale: boolean) => (...values: unknown[]) => Observable<T>, def: DefinitionRpc): MemoizedRpcInterfaceMethod {
    const memoOpts = { getInstanceId: () => this.#instanceId };
    const memoized = memoize(creator(true) as RpcInterfaceMethod, memoOpts);

    memoized.raw = memoize(creator(false), memoOpts);
    memoized.meta = def;

    return memoized as MemoizedRpcInterfaceMethod;
  }

  private _formatResult <T> (isScale: boolean, registry: Registry, blockHash: string | Uint8Array | null | undefined, method: string, def: DefinitionRpc, params: Codec[], result: unknown): T {
    return isScale
      ? this._formatOutput(registry, blockHash, method, def, params, result) as unknown as T
      : result as T;
  }

  private _createMethodSend (section: string, method: string, def: DefinitionRpc): RpcInterfaceMethod {
    const rpcName = def.endpoint || `${section}_${method}`;
    const hashIndex = def.params.findIndex(({ isHistoric }) => isHistoric);
    let memoized: null | MemoizedRpcInterfaceMethod = null;

    // execute the RPC call, doing a registry swap for historic as applicable
    const callWithRegistry = async <T> (isScale: boolean, values: unknown[]): Promise<T> => {
      const blockId = hashIndex === -1
        ? null
        : values[hashIndex];

      const blockHash = blockId && def.params[hashIndex].type === 'BlockNumber'
        ? await this.#getBlockHash?.(blockId as AnyNumber)
        : blockId as (Uint8Array | string | null | undefined);

      const { registry } = isScale && blockHash && this.#getBlockRegistry
        ? await this.#getBlockRegistry(u8aToU8a(blockHash))
        : { registry: this.#registryDefault };

      const params = this._formatParams(registry, null, def, values);

      // only cache .at(<blockHash>) queries, e.g. where valid blockHash was supplied
      const result = await this.provider.send<AnyJson>(rpcName, params.map((p) => p.toJSON()), !!blockHash);

      return this._formatResult(isScale, registry, blockHash, method, def, params, result);
    };

    const creator = <T> (isScale: boolean) => (...values: unknown[]): Observable<T> => {
      const isDelayed = isScale && hashIndex !== -1 && !!values[hashIndex];

      return new Observable((observer: Observer<T>): () => void => {
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
          if (isScale) {
            memoized?.unmemoize(...values);
          } else {
            memoized?.raw.unmemoize(...values);
          }
        };
      }).pipe(
        // eslint-disable-next-line deprecation/deprecation
        publishReplay(1), // create a Replay(1)
        isDelayed
          ? refCountDelay() // Unsubscribe after delay
          // eslint-disable-next-line deprecation/deprecation
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
    let memoized: null | MemoizedRpcInterfaceMethod = null;

    const creator = <T> (isScale: boolean) => (...values: unknown[]): Observable<T> => {
      return new Observable((observer: Observer<T>): () => void => {
        // Have at least an empty promise, as used in the unsubscribe
        let subscriptionPromise: Promise<number | string | null> = Promise.resolve(null);
        const registry = this.#registryDefault;

        const errorHandler = (error: Error): void => {
          logErrorMessage(method, def, error);

          observer.error(error);
        };

        try {
          const params = this._formatParams(registry, null, def, values);

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

          subscriptionPromise = this._createSubscriber({ paramsJson: params.map((p) => p.toJSON()), subName, subType, update }, errorHandler);
        } catch (error) {
          errorHandler(error as Error);
        }

        // Teardown logic
        return (): void => {
          // Delete from cache, so old results don't hang around
          if (isScale) {
            memoized?.unmemoize(...values);
          } else {
            memoized?.raw.unmemoize(...values);
          }

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

  private _formatParams (registry: Registry, blockHash: Uint8Array | string | null | undefined, def: DefinitionRpc, inputs: unknown[]): Codec[] {
    const reqCount = def.params.filter(({ isOptional }) => !isOptional).length;

    if (inputs.length < reqCount || inputs.length > def.params.length) {
      throw new Error(`Expected ${def.params.length} parameters${reqCount === def.params.length ? '' : ` (${def.params.length - reqCount} optional)`}, ${inputs.length} found instead`);
    }

    const params = new Array<Codec>(inputs.length);

    for (let i = 0; i < inputs.length; i++) {
      params[i] = registry.createTypeUnsafe(def.params[i].type, [inputs[i]], { blockHash });
    }

    return params;
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
      const jsonSet = (result as StorageChangeSetJSON[]);
      const mapped = new Array<[Hash, Codec[]]>(jsonSet.length);

      for (let i = 0; i < jsonSet.length; i++) {
        const { block, changes } = jsonSet[i];

        mapped[i] = [
          registry.createType('BlockHash', block),
          this._formatStorageSet(registry, block, params[0] as Vec<StorageKey>, changes)
        ];
      }

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
    const values = new Array<Codec>(keys.length);

    // multiple return values (via state.storage subscription), decode the
    // values one at a time, all based on the supplied query types
    for (let i = 0; i < keys.length; i++) {
      values[i] = this._formatStorageSetEntry(registry, blockHash, keys[i], changes, withCache, i);
    }

    return values;
  }

  private _formatStorageSetEntry (registry: Registry, blockHash: string, key: StorageKey, changes: [string, string | null][], withCache: boolean, entryIndex: number): Codec {
    const hexKey = key.toHex();
    const found = changes.find(([key]) => key === hexKey);
    const isNotFound = isUndefined(found);

    // if we don't find the value, this is our fallback
    //   - in the case of an array of values, fill the hole from the cache
    //   - if a single result value, don't fill - it is not an update hole
    //   - fallback to an empty option in all cases
    if (isNotFound && withCache) {
      const cached = this.#storageCache.get(hexKey);

      if (cached) {
        return cached;
      }
    }

    const value = isNotFound
      ? null
      : found[1];
    const isEmpty = isNull(value);
    const input = isEmpty || isTreatAsHex(key)
      ? value
      : u8aToU8a(value);
    const codec = this._newType(registry, blockHash, key, input, isEmpty, entryIndex);

    // store the retrieved result - the only issue with this cache is that there is no
    // clearing of it, so very long running processes (not just a couple of hours, longer)
    // will increase memory beyond what is allowed.
    this.#storageCache.set(hexKey, codec);

    return codec;
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
            // For old-style Linkage, we add an empty linkage at the end
            ? type.includes('Linkage<')
              ? u8aConcat(hexToU8a(meta.fallback.toHex()), new Uint8Array(2))
              : hexToU8a(meta.fallback.toHex())
            : undefined
          : meta.modifier.isOptional
            ? registry.createTypeUnsafe(type, [input], { blockHash, isPedantic: this.#isPedantic })
            : input
      ], { blockHash, isFallback: isEmpty && !!meta.fallback, isOptional: meta.modifier.isOptional, isPedantic: this.#isPedantic && !meta.modifier.isOptional });
    } catch (error) {
      throw new Error(`Unable to decode storage ${key.section || 'unknown'}.${key.method || 'unknown'}:${entryNum}: ${(error as Error).message}`);
    }
  }
}
