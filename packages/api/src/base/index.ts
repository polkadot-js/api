// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constants } from '@polkadot/metadata/Decorated/types';
import { RpcInterface } from '@polkadot/rpc-core/jsonrpc.types';
import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { InterfaceRegistry } from '@polkadot/types/interfaceRegistry';
import { CallFunction, InterfaceTypes, RegistryTypes, SignerPayloadRawBase } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes, DecoratedRpc, DecorateMethod, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics, Signer } from '../types';

import { Metadata, createType } from '@polkadot/types';
import { assert, isString, isUndefined, u8aToHex, u8aToU8a } from '@polkadot/util';

import Init from './Init';

interface KeyringSigner {
  sign (message: Uint8Array): Uint8Array;
}

let pkgJson: { name: string; version: string };

try {
  pkgJson = require('../package.json');
} catch (error) {
  // development environment
  pkgJson = { name: '@polkadot/api', version: '-' };
}

function assertResult<T> (value: T | undefined): T {
  assert(!isUndefined(value), 'Api needs to be initialized before using, listen on \'ready\'');

  return value;
}

export default abstract class ApiBase<ApiType extends ApiTypes> extends Init<ApiType> {
  /**
   * @description Create an instance of the class
   *
   * @param options Options object to create API instance or a Provider instance
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * const api = new Api().isReady();
   *
   * api.rpc.subscribeNewHeads((header) => {
   *   console.log(`new block #${header.number.toNumber()}`);
   * });
   * ```
   */
  constructor (options: ApiOptions = {}, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>) {
    super(options, type, decorateMethod);
  }

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
  public get consts (): Constants {
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
  public get derive (): ReturnType<ApiBase<ApiType>['decorateDerive']> {
    return assertResult(this._derive);
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
   * @description `true` when subscriptions are supported
   */
  public get hasSubscriptions (): boolean {
    return this._rpcCore.provider.hasSubscriptions;
  }

  /**
   * @description The library information name & version (from package.json)
   */
  public get libraryInfo (): string {
    return `${pkgJson.name} v${pkgJson.version}`;
  }

  /**
   * @description Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.
   *
   * All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.query.balances.freeBalance(<accountId>, (balance) => {
   *   console.log('new balance', balance);
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
   *     [api.query.balances.freeBalance, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
   *   ],
   *   ([existential, balance]) => {
   *     console.log(`You have ${balance.sub(existential)} more than the existential deposit`);
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
  public get rx (): Pick<ApiInterfaceRx, 'tx' | 'rpc'> {
    return assertResult(this._rx as Pick<ApiInterfaceRx, 'tx' | 'rpc'>);
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
   * @description Creates an instance of a type as registered
   */
  public createType = <K extends InterfaceTypes> (type: K, ...params: any[]): InterfaceRegistry[K] => {
    return createType(this.registry, type, ...params);
  }

  /**
   * @description Disconnect from the underlying provider, halting all network traffic
   */
  public disconnect (): void {
    this._rpcCore.disconnect();
  }

  /**
   * @description Finds the definition for a specific [[Call]] based on the index supplied
   */
  public findCall (callIndex: Uint8Array | string): CallFunction {
    return this.registry.findMetaCall(u8aToU8a(callIndex));
  }

  /**
   * @description Register additional user-defined of chain-specific types in the type registry
   */
  public registerTypes (types?: RegistryTypes): void {
    types && this.registry.register(types);
  }

  /**
   * @description Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  public setSigner (signer: Signer): void {
    this._rx.signer = signer;
  }

  /**
   * @description Signs a raw signer payload, string or Uint8Array
   */
  public async sign (signer: KeyringSigner | string, data: SignerPayloadRawBase): Promise<string> {
    // NOTE Do we really want to do this? Or turn it into an observable for rxjs?
    if (isString(signer)) {
      assert(this._rx.signer?.signRaw, 'No signer exists with a signRaw interface');

      return (
        await this._rx.signer.signRaw({
          type: 'bytes',
          ...data,
          address: signer
        })
      ).signature;
    }

    return u8aToHex(signer.sign(u8aToU8a(data.data)));
  }
}
