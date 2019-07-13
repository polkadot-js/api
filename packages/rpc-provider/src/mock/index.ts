// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterface$Emitted, ProviderInterface$EmitCb } from '../types';
import { MockState$Subscriptions, MockState$Subscription$Callback, MockState$Db } from './types';

import BN from 'bn.js';
import EventEmitter from 'eventemitter3';
import interfaces from '@polkadot/jsonrpc';
import testKeyring from '@polkadot/keyring/testing';
import storage from '@polkadot/api-metadata/storage/static';
import { Codec } from '@polkadot/types/types';
import rpcMetadataV6 from '@polkadot/types/Metadata/v6/static';
import { Header, RuntimeVersion } from '@polkadot/types';
import { bnToU8a, logger, u8aToHex } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

const INTERVAL = 1000;
const SUBSCRIPTIONS: string[] = Array.prototype.concat.apply(
  [], Object.values(interfaces).map((area) =>
    Object
      .values(area.methods)
      .filter((method) =>
        method.isSubscription
      )
      .map(({ method, section }) =>
        `${section}_${method}`
      )
  )
);

const keyring = testKeyring({ type: 'ed25519' });
const l = logger('api-mock');

/**
 * A mock provider mainly used for testing.
 * @return {ProviderInterface} The mock provider
 */
export default class Mock implements ProviderInterface {
  private db: MockState$Db = {};
  private emitter = new EventEmitter();
  public isUpdating: boolean = true;
  private requests: { [index: string]: (...params: any[]) => string } = {
    'chain_getBlockHash': (blockNumber: number): string => '0x1234',
    'chain_getRuntimeVersion': (): string => new RuntimeVersion().toHex(),
    'state_getStorage': (storage: MockState$Db, params: Array<any>): string => {
      return u8aToHex(
        storage[(params[0] as string)]
      );
    },
    'system_chain': (): string => 'mockChain',
    'state_getMetadata': (): string => rpcMetadataV6,
    'system_name': (): string => 'mockClient',
    'system_version': (): string => '9.8.7'
  };
  public subscriptions: MockState$Subscriptions = SUBSCRIPTIONS.reduce((subs, name) => {
    subs[name] = {
      callbacks: {},
      lastValue: null
    };

    return subs;
  }, ({} as MockState$Subscriptions));
  private subscriptionId: number = 0;
  private subscriptionMap: {
    [index: number]: string
  } = {};

  constructor () {
    this.init();
  }

  get hasSubscriptions (): boolean {
    return true;
  }

  clone (): Mock {
    throw new Error('Unimplemented');
  }

  disconnect (): void {
    // noop
  }

  isConnected (): boolean {
    return true;
  }

  on (type: ProviderInterface$Emitted, sub: ProviderInterface$EmitCb): void {
    this.emitter.on(type, sub);
  }

  async send (method: string, params: Array<any>): Promise<any> {
    if (!this.requests[method]) {
      throw new Error(`provider.send: Invalid method '${method}'`);
    }

    return this.requests[method](this.db, params);
  }

  async subscribe (type: string, method: string, ...params: Array<any>): Promise<number> {
    l.debug(() => ['subscribe', method, params]);

    if (this.subscriptions[method]) {
      const callback: MockState$Subscription$Callback = params.pop();
      const id = ++this.subscriptionId;

      this.subscriptions[method].callbacks[id] = callback;
      this.subscriptionMap[id] = method;

      if (this.subscriptions[method].lastValue !== null) {
        callback(null, this.subscriptions[method].lastValue);
      }

      return id;
    }

    throw new Error(`provider.subscribe: Invalid method '${method}'`);
  }

  async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    const sub = this.subscriptionMap[id];

    l.debug(() => ['unsubscribe', id, sub]);

    if (!sub) {
      throw new Error(`Unable to find subscription for ${id}`);
    }

    delete this.subscriptionMap[id];
    delete this.subscriptions[sub].callbacks[id];

    return true;
  }

  private init () {
    const emitEvents: Array<ProviderInterface$Emitted> = ['connected', 'disconnected'];
    let emitIndex = 0;
    let newHead = this.makeBlockHeader(new BN(-1));
    let counter = -1;

    // Do something every 1 seconds
    setInterval(() => {
      if (!this.isUpdating) {
        return;
      }

      // create a new header (next block)
      newHead = this.makeBlockHeader(newHead.blockNumber.toBn());

      // increment the balances and nonce for each account
      keyring.getPairs().forEach(({ publicKey }, index) => {
        this.setStateBn(storage.balances.freeBalance(publicKey), newHead.blockNumber.muln(3).iaddn(index));
        this.setStateBn(storage.system.accountNonce(publicKey), newHead.blockNumber.addn(index));
      });

      // set the timestamp for the current block
      this.setStateBn(storage.timestamp.now(), Math.floor(Date.now() / 1000));
      this.updateSubs('chain_subscribeNewHead', newHead);

      // We emit connected/disconnected at intervals
      if (++counter % 2 === 1) {
        if (++emitIndex === emitEvents.length) {
          emitIndex = 0;
        }

        this.emitter.emit(emitEvents[emitIndex]);
      }
    }, INTERVAL);
  }

  private makeBlockHeader (prevNumber: BN): Header {
    const blockNumber = prevNumber.addn(1);

    return new Header({
      digest: {
        logs: []
      },
      extrinsicsRoot: randomAsU8a(),
      number: blockNumber,
      parentHash: blockNumber.isZero()
        ? new Uint8Array(32)
        : bnToU8a(prevNumber, 256, false),
      stateRoot: bnToU8a(blockNumber, 256, false)
    });
  }

  private setStateBn (key: Uint8Array, value: BN | number): void {
    this.db[u8aToHex(key)] = bnToU8a(value, 64, true);
  }

  private updateSubs (method: string, value: Codec) {
    this.subscriptions[method].lastValue = value;

    Object
      .values(this.subscriptions[method].callbacks)
      .forEach((cb) => {
        try {
          cb(null, value.toJSON());
        } catch (error) {
          console.error(`Error on '${method}' subscription`, error);
        }
      });
  }
}
