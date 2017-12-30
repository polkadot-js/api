// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { JsonRpcResponse, ProviderInterface } from '../types';

type AwaitingType = {
  callback: (error: ?Error, result: mixed) => void
};

type WsMessageType = {
  data: mixed
};

require('./polyfill');

const assert = require('@polkadot/util/assert');
const JsonRpcCoder = require('../jsonRpcCoder');

module.exports = class WsProvider extends JsonRpcCoder implements ProviderInterface {
  _autoConnect: boolean = true;
  _endpoint: string;
  _handlers: { [number]: AwaitingType } = {};
  _isConnected: boolean = false;
  _queued: { [number]: string } = {};
  _websocket: WebSocket;

  constructor (endpoint: string, autoConnect: boolean = true) {
    super();

    assert(/^ws:\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);

    this._endpoint = endpoint;
    this._autoConnect = autoConnect;

    if (autoConnect) {
      this.connect();
    }
  }

  // flowlint-next-line unsafe-getters-setters:off
  get isConnected (): boolean {
    return this._isConnected;
  }

  connect = () => {
    this._websocket = new WebSocket(this._endpoint);

    this._websocket.onclose = this._onClose;
    this._websocket.onerror = this._onError;
    this._websocket.onmessage = this._onMessage;
    this._websocket.onopen = this._onOpen;
  }

  _onClose = () => {
    // console.log('disconnected from', this._endpoint);
    this._isConnected = false;

    if (this._autoConnect) {
      setTimeout(this.connect, 1000);
    }
  }

  _onError = (error: Event) => {
    console.error(error);
  }

  _onOpen = () => {
    // console.log('connected to', this._endpoint);
    this._isConnected = true;

    Object.keys(this._queued).forEach((id: number) => {
      try {
        this._websocket.send(
          this._queued[id]
        );
        delete this._queued[id];
      } catch (error) {
        console.error(error);
      }
    });
  }

  _onMessage = (message: WsMessageType): void => {
    const response: JsonRpcResponse = JSON.parse(message.data);
    const handler = this._handlers[response.id];

    if (!handler) {
      console.error(`Unable to find handler for id=${response.id}`);
      return;
    }

    try {
      const result = this.decodeResponse(response);

      handler.callback(null, result);
    } catch (error) {
      handler.callback(error);
    }

    delete this._handlers[response.id];
  }

  send (method: string, params: Array<mixed>): Promise<mixed> {
    return new Promise((resolve, reject): void => {
      try {
        const json = this.encodeJson(method, params);

        this._handlers[this.id] = {
          callback: (error: ?Error, result: mixed) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        };

        if (this._isConnected) {
          this._websocket.send(json);
        } else {
          this._queued[this.id] = json;
        }
      } catch (error) {
        reject(error);
      }
    });
  }
};
