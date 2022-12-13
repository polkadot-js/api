// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable camelcase */

import type { Header } from '@polkadot/types/interfaces';
import type { Codec, Registry } from '@polkadot/types/types';
import type { ProviderInterface, ProviderInterfaceEmitCb, ProviderInterfaceEmitted } from '../types';
import type { MockStateDb, MockStateSubscriptionCallback, MockStateSubscriptions } from './types';

import EventEmitter from 'eventemitter3';

import { createTestKeyring } from '@polkadot/keyring/testing';
import { decorateStorage, Metadata } from '@polkadot/types';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import rpcHeader from '@polkadot/types-support/json/Header.004.json' assert { type: 'json' };
import rpcSignedBlock from '@polkadot/types-support/json/SignedBlock.004.immortal.json' assert { type: 'json' };
import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';
import { BN, bnToU8a, logger, u8aToHex } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

const INTERVAL = 1000;
const SUBSCRIPTIONS: string[] = Array.prototype.concat.apply(
  [],
  Object.values(jsonrpc).map((section): string[] =>
    Object
      .values(section)
      .filter(({ isSubscription }) => isSubscription)
      .map(({ jsonrpc }) => jsonrpc)
      .concat('chain_subscribeNewHead')
  )
) as string[];

const keyring = createTestKeyring({ type: 'ed25519' });
const l = logger('api-mock');

/**
 * A mock provider mainly used for testing.
 * @return {ProviderInterface} The mock provider
 * @internal
 */
export class MockProvider implements ProviderInterface {
  private db: MockStateDb = {};

  private emitter = new EventEmitter();

  private intervalId?: ReturnType<typeof setInterval> | null;

  public isUpdating = true;

  private registry: Registry;

  private prevNumber = new BN(-1);

  private requests: Record<string, (...params: any[]) => unknown> = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-unsafe-member-access
    chain_getBlock: () => this.$registry.createType('SignedBlock', rpcSignedBlock.result).toJSON(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    chain_getBlockHash: () => '0x1234000000000000000000000000000000000000000000000000000000000000',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    chain_getFinalizedHead: () => this.$registry.createType('Header', rpcHeader.result).$hash,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    chain_getHeader: () => this.$registry.createType('Header', rpcHeader.result).toJSON(),
    rpc_methods: () => this.$registry.createType('RpcMethods').toJSON(),
    state_getKeys: () => [],
    state_getKeysPaged: () => [],
    state_getMetadata: () => rpcMetadata,
    state_getRuntimeVersion: () => this.$registry.createType('RuntimeVersion').toHex(),
    state_getStorage: (storage: MockStateDb, [key]: string[]) => u8aToHex(storage[key]),
    system_chain: () => 'mockChain',
    system_health: () => ({}),
    system_name: () => 'mockClient',
    system_properties: () => ({ ss58Format: 42 }),
    system_upgradedToTripleRefCount: () => this.$registry.createType('bool', true),
    system_version: () => '9.8.7',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, sort-keys
    dev_echo: (_, params: any) => params
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
    this.$registry = registry;

    this.init();
  }

  public get hasSubscriptions (): boolean {
    return true;
  }

  public clone (): MockProvider {
    throw new Error('Unimplemented');
  }

  public async connect (): Promise<void> {
    // noop
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async disconnect (): Promise<void> {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public get isClonable (): boolean {
    return false;
  }

  public get isConnected (): boolean {
    return true;
  }

  public on (type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void {
    this.emitter.on(type, sub);

    return (): void => {
      this.emitter.removeListener(type, sub);
    };
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async send <T = any> (method: string, params: unknown[]): Promise<T> {
    l.debug(() => ['send', method, params]);

    if (!this.requests[method]) {
      throw new Error(`provider.send: Invalid method '${method}'`);
    }

    return this.requests[method](this.db, params) as T;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async subscribe (type: string, method: string, ...params: unknown[]): Promise<number> {
    l.debug(() => ['subscribe', method, params]);

    if (!this.subscriptions[method]) {
      throw new Error(`provider.subscribe: Invalid method '${method}'`);
    }

    const callback = params.pop() as MockStateSubscriptionCallback;
    const id = ++this.subscriptionId;

    this.subscriptions[method].callbacks[id] = callback;
    this.subscriptionMap[id] = method;

    if (this.subscriptions[method].lastValue !== null) {
      callback(null, this.subscriptions[method].lastValue);
    }

    return id;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async unsubscribe (type: string, method: string, id: number): Promise<boolean> {
    const sub = this.subscriptionMap[id];

    l.debug(() => ['unsubscribe', id, sub]);

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

    const metadata = new Metadata(this.$registry, rpcMetadata);

    this.$registry.setMetadata(metadata);

    const query = decorateStorage(this.$registry, metadata.asLatest, metadata.version);

    // Do something every 1 seconds
    this.intervalId = setInterval((): void => {
      if (!this.isUpdating) {
        return;
      }

      // create a new header (next block)
      newHead = this.makeBlockHeader();

      // increment the balances and nonce for each account
      keyring.getPairs().forEach(({ publicKey }, index): void => {
        this.setStateBn(query.system.account(publicKey), newHead.number.toBn().addn(index));
      });

      // set the timestamp for the current block
      this.setStateBn(query.timestamp.now(), Math.floor(Date.now() / 1000));
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
    const header = this.$registry.createType('Header', {
      digest: {
        logs: []
      },
      extrinsicsRoot: randomAsU8a(),
      number: blockNumber,
      parentHash: blockNumber.isZero()
        ? new Uint8Array(32)
        : bnToU8a(this.prevNumber, { bitLength: 256, isLe: false }),
      stateRoot: bnToU8a(blockNumber, { bitLength: 256, isLe: false })
    });

    this.prevNumber = blockNumber;

    return header as unknown as Header;
  }

  private setStateBn (key: Uint8Array, value: BN | number): void {
    this.db[u8aToHex(key)] = bnToU8a(value, { bitLength: 64, isLe: true });
  }

  private updateSubs (method: string, value: Codec): void {
    this.subscriptions[method].lastValue = value;

    Object
      .values(this.subscriptions[method].callbacks)
      .forEach((cb): void => {
        try {
          cb(null, value.toJSON());
        } catch (error) {
          l.error(`Error on '${method}' subscription`, error);
        }
      });
  }
}
