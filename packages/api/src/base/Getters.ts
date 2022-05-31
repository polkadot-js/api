// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RpcInterface } from '@polkadot/rpc-core/types';
import type { ProviderInterface } from '@polkadot/rpc-provider/types';
import type { Text } from '@polkadot/types';
import type { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import type { Metadata } from '@polkadot/types/metadata';
import type { CallFunction, RegistryError } from '@polkadot/types/types';
import type { ApiDecoration, ApiInterfaceRx, ApiTypes, DecoratedErrors, DecoratedEvents, DecoratedRpc, QueryableConsts, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from '../types';

import { assertReturn } from '@polkadot/util';

import { packageInfo } from '../packageInfo';
import { findCall, findError } from './find';
import { Init } from './Init';

interface PkgJson {
  name: string;
  version: string;
}

function assertResult<T> (value: T | undefined): T {
  return assertReturn(value, 'Api needs to be initialized before using, listen on \'ready\'');
}

export abstract class Getters<ApiType extends ApiTypes> extends Init<ApiType> implements ApiDecoration<ApiType> {
  /**
   * @description Contains the parameter types (constants) of all modules.
   *
   * The values are instances of the appropriate type and are accessible using `section`.`constantName`,
   *
   * @example
   * <BR>
   *
   * ```javascript
   * console.log(api.consts.democracy.enactmentPeriod.toString())
   * ```
   */
  public get consts (): QueryableConsts<ApiType> {
    return assertResult(this._consts);
  }

  /**
   * @description Derived results that are injected into the API, allowing for combinations of various query results.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.derive.chain.bestNumber((number) => {
   *   console.log('best number', number);
   * });
   * ```
   */
  public get derive (): ReturnType<Getters<ApiType>['_decorateDerive']> {
    return assertResult(this._derive);
  }

  /**
   * @description Errors from metadata
   */
  public get errors (): DecoratedErrors<ApiType> {
    return assertResult(this._errors);
  }

  /**
   * @description Events from metadata
   */
  public get events (): DecoratedEvents<ApiType> {
    return assertResult(this._events);
  }

  /**
   * @description  Returns the version of extrinsics in-use on this chain
   */
  public get extrinsicVersion (): number {
    return this._extrinsicType;
  }

  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  public get genesisHash (): Hash {
    return assertResult(this._genesisHash);
  }

  /**
   * @description true is the underlying provider is connected
   */
  public get isConnected (): boolean {
    return this._isConnected.getValue();
  }

  /**
   * @description The library information name & version (from package.json)
   */
  public get libraryInfo (): string {
    return `${(packageInfo as PkgJson).name} v${(packageInfo as PkgJson).version}`;
  }

  /**
   * @description Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.
   *
   * All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.account(<accountId>)` (retrieving the associated nonce & balances for an account), takes the `AccountId` as a parameter.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.query.system.account(<accountId>, ([nonce, balance]) => {
   *   console.log('new free balance', balance.free, 'new nonce', nonce);
   * });
   * ```
   */
  public get query (): QueryableStorage<ApiType> {
    return assertResult(this._query);
  }

  /**
   * @description Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const unsub = await api.queryMulti(
   *   [
   *     // you can include the storage without any parameters
   *     api.query.balances.totalIssuance,
   *     // or you can pass parameters to the storage query
   *     [api.query.system.account, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
   *   ],
   *   ([existential, [, { free }]]) => {
   *     console.log(`You have ${free.sub(existential)} more than the existential deposit`);
   *
   *     unsub();
   *   }
   * );
   * ```
   */
  public get queryMulti (): QueryableStorageMulti<ApiType> {
    return assertResult(this._queryMulti);
  }

  /**
   * @description Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.
   *
   * RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (using known keys) and the submission of transactions.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.rpc.chain.subscribeNewHeads((header) => {
   *   console.log('new header', header);
   * });
   * ```
   */
  public get rpc (): DecoratedRpc<ApiType, RpcInterface> {
    return assertResult(this._rpc);
  }

  /**
   * @description Contains the chain information for the current node.
   */
  public get runtimeChain (): Text {
    return assertResult(this._runtimeChain);
  }

  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  public get runtimeMetadata (): Metadata {
    return assertResult(this._runtimeMetadata);
  }

  /**
   * @description Contains the version information for the current runtime.
   */
  public get runtimeVersion (): RuntimeVersion {
    return assertResult(this._runtimeVersion);
  }

  /**
   * @description The underlying Rx API interface
   */
  public get rx (): Pick<ApiInterfaceRx, 'tx' | 'rpc' | 'query'> {
    return assertResult(this._rx as Pick<ApiInterfaceRx, 'tx' | 'rpc' | 'query'>);
  }

  /**
   * @description Returns the underlying provider stats
   */
  public get stats (): ProviderInterface['stats'] | undefined {
    return this._rpcCore.provider.stats;
  }

  /**
   * @description The type of this API instance, either 'rxjs' or 'promise'
   */
  public get type (): ApiTypes {
    return this._type;
  }

  /**
   * @description Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.tx.balances
   *   .transfer(<recipientId>, <balance>)
   *   .signAndSend(<keyPair>, ({status}) => {
   *     console.log('tx status', status.asFinalized.toHex());
   *   });
   * ```
   */
  public get tx (): SubmittableExtrinsics<ApiType> {
    return assertResult(this._extrinsics);
  }

  /**
   * @description Finds the definition for a specific [[CallFunction]] based on the index supplied
   */
  public findCall (callIndex: Uint8Array | string): CallFunction {
    return findCall(this.registry, callIndex);
  }

  /**
   * @description Finds the definition for a specific [[RegistryError]] based on the index supplied
   */
  public findError (errorIndex: Uint8Array | string): RegistryError {
    return findError(this.registry, errorIndex);
  }
}
