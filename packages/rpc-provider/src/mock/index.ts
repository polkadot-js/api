/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Header } from '@polkadot/types/interfaces';
import { Codec, Registry } from '@polkadot/types/types';
import { ProviderInterface, ProviderInterfaceEmitted, ProviderInterfaceEmitCb } from '../types';
import { MockStateSubscriptions, MockStateSubscriptionCallback, MockStateDb } from './types';

import BN from 'bn.js';
import EventEmitter from 'eventemitter3';
import Metadata from '@polkadot/metadata/Decorated';
import rpcMetadata from '@polkadot/metadata/Metadata/static';
import interfaces from '@polkadot/jsonrpc';
import testKeyring from '@polkadot/keyring/testing';
import rpcHeader from '@polkadot/types/json/Header.004.json';
import rpcSignedBlock from '@polkadot/types/json/SignedBlock.004.immortal.json';
import { bnToU8a, logger, u8aToHex } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

const INTERVAL = 1000;
const SUBSCRIPTIONS: string[] = Array.prototype.concat.apply(
  [], Object.values(interfaces).map((area): string[] =>
    Object
      .values(area.methods)
      .filter((method): boolean =>
        method.isSubscription
      )
      .map(({ method, section }): string =>
        `${section}_${method}`
      )
      .concat('chain_subscribeNewHead')
  )
);

const keyring = testKeyring({ type: 'ed25519' });
const l = logger('api-mock');

/**
 * A mock provider mainly used for testing.
 * @return {ProviderInterface} The mock provider
 * @internal
 */
export default class Mock implements ProviderInterface {
  private db: MockStateDb = {};

  private emitter = new EventEmitter();

  public isUpdating = true;

  private registry: Registry;

  private prevNumber = new BN(-1);

  private requests: Record<string, (...params: any[]) => any> = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    chain_getBlock: (hash: string): any => this.registry.createType('SignedBlock', rpcSignedBlock.result).toJSON(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    chain_getBlockHash: (blockNumber: number): string => '0x1234',
    chain_getHeader: (): any => this.registry.createType('Header', rpcHeader.result).toJSON(),
    state_getKeys: (): string[] => [],
    state_getKeysPaged: (): string[] => [],
    state_getRuntimeVersion: (): string => this.registry.createType('RuntimeVersion').toHex(),
    state_getMetadata: (): string => rpcMetadata,
    state_getStorage: (storage: MockStateDb, params: any[]): string => u8aToHex(storage[(params[0] as string)]),
    system_chain: (): string => 'mockChain',
    system_name: (): string => 'mockClient',
    system_properties: (): Record<string, number | string> => ({ ss58Format: 42 }),
    system_version: (): string => '9.8.7'
  };

  public subscriptions: MockStateSubscriptions = SUBSCRIPTIONS.reduce((subs, name): MockStateSubscriptions => {
    subs[name] = {
      callbacks: {},
      lastValue: null
    };

    return subs;
  }, ({} as MockStateSubscriptions));

  private subscriptionId = 0;

  private subscriptionMap: Record<number, string> = {};

  constructor (registry: Registry) {
    this.registry = registry;

    this.init();
  }

  public get hasSubscriptions (): boolean {
    return true;
  }

  public clone (): Mock {
    throw new Error('Unimplemented');
  }

  public disconnect (): void {
    // noop
  }

  public isConnected (): boolean {
    return true;
  }

  public on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    this.emitter.on(type, sub);
    return (): void => {
      this.emitter.removeListener(type, sub);
    };
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async send (method: string, params: any[]): Promise<any> {
    if (!this.requests[method]) {
      throw new Error(`provider.send: Invalid method '${method}'`);
    }

    return this.requests[method](this.db, params);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async subscribe (type: string, method: string, ...params: any[]): Promise<number> {
    l.debug((): any => ['subscribe', method, params]);

    if (this.subscriptions[method]) {
      const callback: MockStateSubscriptionCallback = params.pop();
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

  // eslint-disable-next-line @typescript-eslint/require-await
  public async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    const sub = this.subscriptionMap[id];

    l.debug((): any => ['unsubscribe', id, sub]);

    if (!sub) {
      throw new Error(`Unable to find subscription for ${id}`);
    }

    delete this.subscriptionMap[id];
    delete this.subscriptions[sub].callbacks[id];

    return true;
  }

  private init (): void {
    const emitEvents: ProviderInterfaceEmitted[] = ['connected', 'disconnected'];
    let emitIndex = 0;
    let newHead = this.makeBlockHeader();
    let counter = -1;

    const metadata = new Metadata(this.registry, rpcMetadata);

    // Do something every 1 seconds
    setInterval((): void => {
      if (!this.isUpdating) {
        return;
      }

      // create a new header (next block)
      newHead = this.makeBlockHeader();

      // increment the balances and nonce for each account
      keyring.getPairs().forEach(({ publicKey }, index): void => {
        this.setStateBn(metadata.query.system.account(publicKey), newHead.number.toBn().addn(index));
      });

      // set the timestamp for the current block
      this.setStateBn(metadata.query.timestamp.now(), Math.floor(Date.now() / 1000));
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

  private makeBlockHeader (): Header {
    const blockNumber = this.prevNumber.addn(1);
    const header = this.registry.createType('Header', {
      digest: {
        logs: []
      },
      extrinsicsRoot: randomAsU8a(),
      number: blockNumber,
      parentHash: blockNumber.isZero()
        ? new Uint8Array(32)
        : bnToU8a(this.prevNumber, 256, false),
      stateRoot: bnToU8a(blockNumber, 256, false)
    });

    this.prevNumber = blockNumber;

    return header;
  }

  private setStateBn (key: Uint8Array, value: BN | number): void {
    this.db[u8aToHex(key)] = bnToU8a(value, 64, true);
  }

  private updateSubs (method: string, value: Codec): void {
    this.subscriptions[method].lastValue = value;

    Object
      .values(this.subscriptions[method].callbacks)
      .forEach((cb): void => {
        try {
          cb(null, value.toJSON());
        } catch (error) {
          console.error(`Error on '${method}' subscription`, error);
        }
      });
  }
}
