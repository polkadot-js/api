// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterfaceCallback } from '@polkadot/rpc-provider/types';
import { RpcMethod, RpcSection, RpcParam } from '@polkadot/jsonrpc/types';
import { Hash } from '@polkadot/types/interfaces';
import { AnyJson, Codec, Registry } from '@polkadot/types/types';
import { RpcInterface, RpcInterfaceMethod, UserRpc } from './types';

import memoizee from 'memoizee';
import { combineLatest, from, Observable, Observer, of, throwError } from 'rxjs';
import { catchError, map, publishReplay, refCount, switchMap } from 'rxjs/operators';
import jsonrpc from '@polkadot/jsonrpc';
import jsonrpcMethod from '@polkadot/jsonrpc/create/method';
import jsonrpcParam from '@polkadot/jsonrpc/create/param';
import { Option, StorageKey, Vec, createClass, createTypeUnsafe } from '@polkadot/types';
import { assert, isFunction, isNull, isNumber, isUndefined, logger, u8aToU8a } from '@polkadot/util';

import { drr } from './rxjs';

type UserRpcConverted = Record<string, Record<string, RpcMethod>>;

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
function createErrorMessage ({ method, params, type }: RpcMethod, error: Error): string {
  const inputs = params.map(({ isOptional, name, type }): string =>
    `${name}${isOptional ? '?' : ''}: ${type}`
  ).join(', ');

  return `${method}(${inputs}): ${type}:: ${error.message}`;
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
  readonly #storageCache = new Map<string, string | null>();

  public readonly mapping: Map<string, RpcMethod> = new Map();

  public readonly provider: ProviderInterface;

  public readonly registry: Registry;

  public readonly sections: string[] = [];

  // Ok, this is quite horrible - we really should not be using the ! here, but we are actually assigning
  // these via the createInterfaces inside the constructor. However... this is not quite visible. The reason
  // why we don't do for individual assignments is to allow user-defined RPCs to also be defined

  public readonly account!: RpcInterface['account'];

  public readonly author!: RpcInterface['author'];

  public readonly chain!: RpcInterface['chain'];

  public readonly contracts!: RpcInterface['contracts'];

  public readonly payment!: RpcInterface['payment'];

  public readonly rpc!: RpcInterface['rpc'];

  public readonly state!: RpcInterface['state'];

  public readonly system!: RpcInterface['system'];

  /**
   * @constructor
   * Default constructor for the Api Object
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (registry: Registry, provider: ProviderInterface, userRpc: UserRpc = {}) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    assert(provider && isFunction(provider.send), 'Expected Provider to API create');

    this.registry = registry;
    this.provider = provider;

    this.createInterfaces(jsonrpc, userRpc);
  }

  /**
   * @description Manually disconnect from the attached provider
   */
  public disconnect (): void {
    this.provider.disconnect();
  }

  private createInterfaces<Section extends keyof RpcInterface> (interfaces: Record<string, RpcSection>, userBare: UserRpc): void {
    // these are the base keys (i.e. part of jsonrpc)
    this.sections.push(...Object.keys(interfaces));

    // add any extra user-defined sections
    this.sections.push(...Object.keys(userBare).filter((key): boolean => !this.sections.includes(key)));

    // convert the user inputs into the same format as used in jsonrpc
    const user = Object.entries(userBare).reduce((user: UserRpcConverted, [sectionName, methods]): UserRpcConverted => {
      user[sectionName] = methods.reduce((section: Record<string, RpcMethod>, def): Record<string, RpcMethod> => {
        const { description = 'User defined', name, params, type } = def;

        section[name] = jsonrpcMethod(sectionName, name, {
          description,
          params: params.map(({ isOptional, name, type }): RpcParam =>
            jsonrpcParam(name, type as any, { isOptional })),
          type: type as any
        });

        return section;
      }, {});

      return user;
    }, {});

    // decorate the sections with base and user methods
    this.sections.forEach((sectionName): void => {
      (this as any)[sectionName as Section] = {
        ...this.createInterface(sectionName, interfaces[sectionName] ? interfaces[sectionName].methods : {}),
        ...this.createInterface(sectionName, user[sectionName] || {})
      };
    });
  }

  private createInterface<Section extends keyof RpcInterface> (section: string, methods: Record<string, RpcMethod>): RpcInterface[Section] {
    return Object
      .keys(methods)
      .reduce((exposed, method): RpcInterface[Section] => {
        const def = methods[method];

        this.mapping.set(`${section}_${method}`, def);

        // FIXME Remove any here
        // To do so, remove `RpcInterfaceMethod` from './types.ts', and refactor
        // every method inside this class to take:
        // `<S extends keyof RpcInterface, M extends keyof RpcInterface[S]>`
        // Not doing so, because it makes this class a little bit less readable,
        // and leaving it as-is doesn't harm much
        (exposed as any)[method] = def.isSubscription
          ? this.createMethodSubscribe(def)
          : this.createMethodSend(def);

        return exposed;
      }, {} as RpcInterface[Section]);
  }

  private createMethodWithRaw (creator: (isRaw: boolean) => (...values: any[]) => Observable<any>): RpcInterfaceMethod {
    const call = creator(false) as Partial<RpcInterfaceMethod>;

    call.raw = creator(true);

    return call as RpcInterfaceMethod;
  }

  private createMethodSend (method: RpcMethod): RpcInterfaceMethod {
    const rpcName = `${method.section}_${method.method}`;
    const creator = (isRaw: boolean) => (...values: any[]): Observable<any> => {
      // TODO Warn on deprecated methods

      // Here, logically, it should be `of(this.formatInputs(method, values))`.
      // However, formatInputs can throw, and when it does, the above way
      // doesn't throw in the "Observable loop" (which is internally wrapped in
      // a try/catch block). So we:
      // - first do `of(1)` - won't throw
      // - then do `map(()=>this.formatInputs)` - might throw, but inside Observable.
      return of(1).pipe(
        map((): Codec[] => this.formatInputs(method, values)),
        switchMap((params): Observable<[Codec[], any]> =>
          combineLatest([
            of(params),
            from(this.provider.send(rpcName, params.map((param): AnyJson => param.toJSON())))
          ])
        ),
        map(([params, result]): any =>
          isRaw
            ? this.registry.createType('Raw', result)
            : this.formatOutput(method, params, result)
        ),
        catchError((error): any => {
          const message = createErrorMessage(method, error);

          // don't scare with old nodes, this is handled transparently
          rpcName !== 'rpc_methods' && l.error(message);

          return throwError(new Error(message));
        }),
        publishReplay(1), // create a Replay(1)
        refCount() // Unsubscribe WS when there are no more subscribers
      );
    };

    // We voluntarily don't cache the "one-shot" RPC calls. For example,
    // `getStorage('123')` returns the current value, but this value can change
    // over time, so we wouldn't want to cache the Observable.
    return this.createMethodWithRaw(creator);
  }

  // create a subscriptor, it subscribes once and resolves with the id as subscribe
  private createSubscriber ({ subType, subName, paramsJson, update }: { subType: string; subName: string; paramsJson: AnyJson[]; update: ProviderInterfaceCallback }, errorHandler: (error: Error) => void): Promise<number> {
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

  private createMethodSubscribe (method: RpcMethod): RpcInterfaceMethod {
    const [updateType, subMethod, unsubMethod] = method.pubsub;
    const subName = `${method.section}_${subMethod}`;
    const unsubName = `${method.section}_${unsubMethod}`;
    const subType = `${method.section}_${updateType}`;
    const creator = (isRaw: boolean) => (...values: any[]): Observable<any> => {
      return new Observable((observer: Observer<any>): VoidCallback => {
        // Have at least an empty promise, as used in the unsubscribe
        let subscriptionPromise: Promise<number | void> = Promise.resolve();
        const errorHandler = (error: Error): void => {
          const message = createErrorMessage(method, error);

          l.error(message);

          observer.error(new Error(message));
        };

        try {
          const params = this.formatInputs(method, values);
          const paramsJson = params.map((param): AnyJson => param.toJSON());
          const update = (error?: Error | null, result?: any): void => {
            if (error) {
              l.error(createErrorMessage(method, error));
              return;
            }

            try {
              observer.next(
                isRaw
                  ? this.registry.createType('Raw', result)
                  : this.formatOutput(method, params, result)
              );
            } catch (error) {
              observer.error(error);
            }
          };

          subscriptionPromise = this.createSubscriber({ subType, subName, paramsJson, update }, errorHandler);
        } catch (error) {
          errorHandler(error);
        }

        // Teardown logic
        return (): void => {
          // Delete from cache
          // Reason:
          // ```
          //    const s = api.query.system.account(addr1).subscribe(); // let's say it's 6
          //    s.unsubscribe();
          //    // wait a bit, for the nonce to increase to 7
          //    api.query.system.account(addr1).subscribe(); // will output 6 instead of 7 if we don't clear cache
          //    // that's because all our observables are replay(1)
          // ```
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          memoized.delete(...values);

          // Unsubscribe from provider
          subscriptionPromise
            .then((subscriptionId): Promise<boolean> =>
              isNumber(subscriptionId)
                ? this.provider.unsubscribe(subType, unsubName, subscriptionId)
                : Promise.resolve(false)
            )
            .catch((error: Error): void => l.error(createErrorMessage(method, error)));
        };
      }).pipe(drr());
    };

    const memoized = memoizee(this.createMethodWithRaw(creator), {
      // Dynamic length for argument
      length: false,
      // Normalize args so that different args that should be cached
      // together are cached together.
      // E.g.: `query.my.method('abc') === query.my.method(createType('AccountId', 'abc'));`
      // eslint-disable-next-line @typescript-eslint/unbound-method
      normalizer: JSON.stringify
    });

    return memoized;
  }

  private formatInputs (method: RpcMethod, inputs: any[]): Codec[] {
    const reqArgCount = method.params.filter(({ isOptional }): boolean => !isOptional).length;
    const optText = reqArgCount === method.params.length
      ? ''
      : ` (${method.params.length - reqArgCount} optional)`;

    assert(inputs.length >= reqArgCount && inputs.length <= method.params.length, `Expected ${method.params.length} parameters${optText}, ${inputs.length} found instead`);

    return inputs.map((input, index): Codec =>
      createTypeUnsafe(this.registry, method.params[index].type, [input])
    );
  }

  private treatAsHex (key: StorageKey): boolean {
    // :code is problematic - it does not have the length attached, which is
    // unlike all other storage entries where it is indeed properly encoded
    return ['0x3a636f6465'].includes(key.toHex());
  }

  private formatOutput (method: RpcMethod, params: Codec[], result?: any): Codec | Codec[] {
    if (method.type === 'StorageData') {
      const key = params[0] as StorageKey;

      try {
        return this.formatStorageData(key, result);
      } catch (error) {
        console.error(`Unable to decode storage ${key.section}.${key.method}:`, error.message);

        throw error;
      }
    } else if (method.type === 'StorageChangeSet') {
      return this.formatStorageSet(params[0] as Vec<StorageKey>, result.changes);
    } else if (method.type === 'Vec<StorageChangeSet>') {
      return result.map(({ block, changes }: { block: string; changes: [string, string | null][] }): [Hash, Codec[]] => [
        this.registry.createType('Hash', block),
        this.formatStorageSet(params[0] as Vec<StorageKey>, changes)
      ]);
    }

    return createTypeUnsafe(this.registry, method.type, [result]);
  }

  private formatStorageData (key: StorageKey, value: string | null): Codec {
    // single return value (via state.getStorage), decode the value based on the
    // outputType that we have specified. Fallback to Raw on nothing
    const type = key.outputType || 'Raw';
    const meta = key.meta || EMPTY_META;
    const isEmpty = isNull(value);

    // we convert to Uint8Array since it maps to the raw encoding, all
    // data will be correctly encoded (incl. numbers, excl. :code)
    const input = isEmpty
      ? null
      : this.treatAsHex(key)
        ? value
        : u8aToU8a(value);

    if (meta.modifier.isOptional) {
      return new Option(
        this.registry,
        createClass(this.registry, type),
        isEmpty
          ? null
          : createTypeUnsafe(this.registry, type, [input], true)
      );
    }

    return createTypeUnsafe(this.registry, type, [isEmpty ? meta.fallback : input], true);
  }

  private formatStorageSet (keys: Vec<StorageKey>, changes: [string, string | null][]): Codec[] {
    // For StorageChangeSet, the changes has the [key, value] mappings
    const withCache = keys.length !== 1;

    // multiple return values (via state.storage subscription), decode the values
    // one at a time, all based on the query types. Three values can be returned -
    //   - Codec - There is a valid value, non-empty
    //   - null - The storage key is empty
    return keys.reduce((results: Codec[], key: StorageKey): Codec[] => {
      try {
        results.push(this.formatStorageSetEntry(key, changes, withCache));
      } catch (error) {
        console.error(`Unable to decode storage ${key.section}.${key.method}:`, error.message);

        throw error;
      }

      return results;
    }, []);
  }

  private formatStorageSetEntry (key: StorageKey, changes: [string, string | null][], witCache: boolean): Codec {
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
    const input = isEmpty || this.treatAsHex(key)
      ? value
      : u8aToU8a(value);

    // store the retrieved result - the only issue with this cache is that there is no
    // clearing of it, so very long running processes (not just a couple of hours, longer)
    // will increase memory beyond what is allowed.
    this.#storageCache.set(hexKey, value);

    if (meta.modifier.isOptional) {
      return new Option(
        this.registry,
        createClass(this.registry, type),
        isEmpty
          ? null
          : createTypeUnsafe(this.registry, type, [input], true)
      );
    }

    return createTypeUnsafe(this.registry, type, [isEmpty ? meta.fallback : input], true);
  }
}
