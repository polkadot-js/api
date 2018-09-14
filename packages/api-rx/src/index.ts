// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface } from '@polkadot/api/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { RxApiInterface, RxApiInterface$Section } from './types';

import { BehaviorSubject } from 'rxjs';
import Api from '@polkadot/api/index';
import Ws from '@polkadot/api-provider/ws';

import defaults from './defaults';
import createInterface from './interface';

export default class RxApi implements RxApiInterface {
  private _api: ApiInterface;
  private _isConnected: BehaviorSubject<boolean>;
  readonly author: RxApiInterface$Section;
  readonly chain: RxApiInterface$Section;
  readonly state: RxApiInterface$Section;
  readonly system: RxApiInterface$Section;

  constructor (provider: ProviderInterface = new Ws(defaults.WS_URL)) {
    this._api = new Api(provider);
    this._isConnected = new BehaviorSubject(provider.isConnected());

    provider.on('connected', () => this._isConnected.next(true));
    provider.on('disconnected', () => this._isConnected.next(false));

    this.author = createInterface(this._api, 'author');
    this.chain = createInterface(this._api, 'chain');
    this.state = createInterface(this._api, 'state');
    this.system = createInterface(this._api, 'system');
  }

  isConnected (): BehaviorSubject<boolean> {
    return this._isConnected;
  }
}
