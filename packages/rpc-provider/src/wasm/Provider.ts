/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, isNull, isUndefined, logger } from '@polkadot/util';
import EventEmitter from 'eventemitter3';

import { ProviderInterface, ProviderInterfaceEmitted, ProviderInterfaceEmitCb, ProviderInterfaceCallback } from 'packages/rpc-provider/build/types.js';
import { CallbackHandler, SubscriptionHandler, WsStateAwaiting, WsStateSubscription } from '../ws/Provider';
import Coder from '../coder';
import { ws } from './ws.js';
import { reject } from 'q';

interface WasmClient {
    free(): void;
    rpcSend(rpc: string): void;
    rpcSubscribe(rpc: string, callback: any): void;
}

interface NodeBrowser extends WasmClient {
    init(module: any): Promise<any>;
    Client: WasmClient;
    start_client(wasmExt: any): WasmClient;
}

const l = logger('api-wasm');

export default class WasmProvider implements ProviderInterface {
    private _eventemitter: EventEmitter;

    private _isConnected: boolean = false;

    private autoConnect: boolean = true;

    private bundledWasmNode: any; // pkg/node_browser_bg.wasm

    private client: WasmClient | null;

    private coder: Coder;

    private handlers: Record<string, WsStateAwaiting>;

    private nodeBrowser: NodeBrowser;

    private queued: Record<string, string>;

    private subscriptions: Record<string, WsStateSubscription>;

    public constructor(autoConnect: boolean = true, bundledWasmNode: any, nodeBrowser: NodeBrowser) {
        this._eventemitter = new EventEmitter();
        this.autoConnect = autoConnect;
        this.bundledWasmNode = bundledWasmNode;
        this.client = null;
        this.coder = new Coder();
        this.handlers = {};
        this.nodeBrowser = nodeBrowser;
        this.queued = {};
        this.subscriptions = {};

        if (autoConnect) {
            this.connect();
        }
    }

    /**
 * @summary `true` when this provider supports subscriptions
 */
    public get hasSubscriptions(): boolean {
        return true;
    }

    /**
   * @description Returns a clone of the object
   */
    public clone(): WasmProvider {
        return new WasmProvider(true, this.bundledWasmNode, this.nodeBrowser);
    }

    public async connect (): Promise<any> {
        try {
            l.debug((): string => 'Loading WASM');
            this.bundledWasmNode = await this.bundledWasmNode.init(this.bundledWasmNode);
            l.debug((): string => 'Successfully loaded WASM');
            l.debug((): string => 'Starting client...');
            this.client = this.nodeBrowser.start_client(ws());
            l.debug((): string => 'Client started');

            return Promise.resolve('Client started');
        } catch (error) {
            l.error(error);
        }
    }

    /**
 * @description Manually disconnect from the connection, clearing autoconnect logic
 */
    public disconnect(): void {
        if (isNull(this.client)) {
            throw new Error('Cannot disconnect on a non-existent client.');
        }

        // switch off autoConnect, we are in manual mode now
        this.autoConnect = false;

        this.client = null;
    }

    /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
    public isConnected(): boolean {
        return this._isConnected;
    }

    /**
 * @summary Listens on events after having subscribed using the [[subscribe]] function.
 * @param  {ProviderInterfaceEmitted} type Event
 * @param  {ProviderInterfaceEmitCb}  sub  Callback
 */
    public on(type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): void {
        this._eventemitter.on(type, sub);
    }

    /**
  * @summary Send JSON data using WASM Client's RPC function
  * @param method The RPC methods to execute
  * @param params Encoded paramaters as appliucable for the method
  * @param subscription Subscription details (internally used)
  */
    public send(method: string, params: any[], subscription?: SubscriptionHandler): Promise<any> {
        return new Promise((resolve, reject): void => {
            try {
                const json = this.coder.encodeJson(method, params);
                const id = this.coder.getId();
                const callback = (error?: Error | null, result?: any): void => {
                    error
                        ? reject(error)
                        : resolve(result);
                };

                l.debug((): string[] => ['calling', method, json]);

                this.handlers[id] = {
                    callback,
                    method,
                    params,
                    subscription
                };

                if (this.isConnected() && !isNull(this.client)) {
                    this.client.rpcSend(json);
                } else {
                    this.queued[id] = json;
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    public async subscribe(type: string, method: string, params: any[]): Promise<number | string> {
        return new Promise((resolve, reject): void => {
            try {
                const json = this.coder.encodeJson(method, params);
                const id = this.coder.getId();
                if (this.isConnected() && !isNull(this.client)) {
                    this.client.rpcSubscribe(json, (r: string) => {
                        resolve(r);
                    });
                } else {
                    this.queued[id] = json;
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    public async unsubscribe(): Promise<boolean> {}
}