// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface, ApiInterface$Section } from './types';
import assert from '@polkadot/util/assert';
import isFunction from '@polkadot/util/is/function';
import createInterface from './create/interface';

/**
 * Api class.
 * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket for instance
 * @return {ApiInterface}               The returned API Object
 * @example
 * ```javascript
 *
 * import Api from '@polkadot/api';
 * import WsProvider from '@polkadot/api-provider/ws';
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
 */
export default class Api implements ApiInterface {
  private _provider: ProviderInterface;
  readonly author: ApiInterface$Section;
  readonly chain: ApiInterface$Section;
  readonly state: ApiInterface$Section;
  readonly system: ApiInterface$Section;

  constructor (provider: ProviderInterface) {
    assert(provider && isFunction(provider.send), 'Expected Provider to API create');

    this._provider = provider;

    this.author = createInterface(this._provider, 'author');
    this.chain = createInterface(this._provider, 'chain');
    this.state = createInterface(this._provider, 'state');
    this.system = createInterface(this._provider, 'system');
  }
}
