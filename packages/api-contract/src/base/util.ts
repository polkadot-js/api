// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod, DecoratedRpc, SubmittableModuleExtrinsics } from '@polkadot/api/types';
import { RpcInterface } from '@polkadot/rpc-core/types';
import { Registry } from '@polkadot/types/types';
import { ApiObject, ContractABIMessage, ContractABIPre, ContractBase, ContractMessage } from '../types';

import { assert, isFunction, stringCamelCase } from '@polkadot/util';
import Abi from '../Abi';

export abstract class Base<ApiType extends ApiTypes> implements ContractBase<ApiType> {
  public readonly abi: Abi;

  public readonly api: ApiObject<ApiType>;

  public readonly decorateMethod: DecorateMethod<ApiType>;

  public readonly registry: Registry;

  constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>) {
    this.abi = abi instanceof Abi
      ? abi
      : new Abi(api.registry, abi);
    this.registry = api.registry;
    this.api = api;
    this.decorateMethod = decorateMethod;
  }

  public get messages (): ContractMessage[] {
    return this.abi.abi.contract.messages.map(
      (def: ContractABIMessage, index): ContractMessage => ({
        def,
        fn: this.abi.messages[def.name] || this.abi.messages[stringCamelCase(name)],
        index
      })
    );
  }

  public getMessage (nameOrIndex?: string | number): ContractMessage {
    const index = nameOrIndex
      ? typeof nameOrIndex === 'number'
        ? nameOrIndex
        : this.abi.abi.contract.messages.findIndex((message): boolean => nameOrIndex === message.name || nameOrIndex === stringCamelCase(message.name))
      : 0;
    const def = this.abi.abi.contract.messages[index];

    assert(!!def, `Attempted to access a contract message that does not exist: ${typeof nameOrIndex === 'number' ? `index ${nameOrIndex}` : nameOrIndex}`);

    const fn = this.abi.messages[def.name] || this.abi.messages[stringCamelCase(def.name)];

    return { def, fn, index };
  }
}

export abstract class BaseWithTx<ApiType extends ApiTypes> extends Base<ApiType> {
  protected get _apiContracts (): SubmittableModuleExtrinsics<'rxjs'> {
    return this.api.rx.tx.contracts;
  }

  constructor (api: ApiObject<ApiType>, abi: ContractABIPre | Abi, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    assert(this.api.rx.tx.contracts && this.api.rx.tx.contracts.putCode, 'You need to connect to a node with the contracts module, the metadata does not enable api.tx.contracts on this instance');
  }
}

export abstract class BaseWithTxAndRpcCall<ApiType extends ApiTypes> extends BaseWithTx<ApiType> {
  public get hasRpcContractsCall (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.call);
  }

  protected get _rpcContractsCall (): DecoratedRpc<'rxjs', RpcInterface>['contracts']['call'] {
    assert(this.hasRpcContractsCall, 'You need to connect to a node with the contracts.call RPC method.');

    return this.api.rx.rpc.contracts.call;
  }
}
