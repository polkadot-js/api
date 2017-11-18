// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { JsonRpcResponse, ProviderInterface } from './types';

type AwaitingType = {
  callback: (error: ?Error, result: any) => void
};

type WsMessageType = {
  data: any
};

const JsonRpcCoder = require('./jsonRpcCoder');

module.exports = class WsProvider extends JsonRpcCoder implements ProviderInterface {
  _autoConnect: boolean = true;
  _endpoint: string;
  _handlers: { [number]: AwaitingType } = {};
  _websocket: WebSocket;

  constructor (endpoint: string, autoConnect: boolean = true) {
    super();

    this._endpoint = endpoint;
    this._autoConnect = autoConnect;

    if (autoConnect) {
      this.connect();
    }
  }

  connect = () => {
    this._handlers = {};

    this._websocket = new WebSocket(this._endpoint);

    this._websocket.onclose = this._onClose;
    this._websocket.onerror = this._onError;
    this._websocket.onmessage = this._onMessage;
    this._websocket.onopen = this._onOpen;
  }

  _onClose = () => {
    console.log('disconnected from', this._endpoint);

    if (this._autoConnect) {
      setTimeout(this.connect, 1000);
    }
  }

  _onError = (error: Event) => {
    console.error(error);
  }

  _onOpen = () => {
    console.log('connected to', this._endpoint);
  }

  _onMessage = (message: WsMessageType) => {
    // {"jsonrpc":"2.0","id":2,"result":"0x9ce59a13059e417087c02d3236a0b1cc"}
    // "jsonrpc": "2.0", "method": "eth_subscription", "params": { "result": {...} }, "subscription": "0x9ce59a13059e417087c02d3236a0b1cc"
    const response: JsonRpcResponse = JSON.parse(message.data);
    const handler = this._handlers[response.id];

    if (!handler) {
      console.error(`Unable to find handler for ${response.id}`);
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

  send (method: string, params: Array<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this._websocket.send(
          this.encodeObject(method, params)
        );

        this._handlers[this.id] = {
          callback: (error: ?Error, result: any) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        };
      } catch (error) {
        reject(error);
      }
    });
  }
};
