// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceEvents } from '../types';

import { EventEmitter } from 'eventemitter3';

export class Events {
  #eventemitter = new EventEmitter();

  protected emit (type: ApiInterfaceEvents, ...args: unknown[]): boolean {
    return this.#eventemitter.emit(type, ...args);
  }

  /**
   * @description Attach an eventemitter handler to listen to a specific event
   *
   * @param type The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.on('connected', (): void => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.on('disconnected', (): void => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  public on (type: ApiInterfaceEvents, handler: (...args: any[]) => any): this {
    this.#eventemitter.on(type, handler);

    return this;
  }

  /**
   * @description Remove the given eventemitter handler
   *
   * @param type The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to unregister.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const handler = (): void => {
   *  console.log('Connected !);
   * };
   *
   * // Start listening
   * api.on('connected', handler);
   *
   * // Stop listening
   * api.off('connected', handler);
   * ```
   */
  public off (type: ApiInterfaceEvents, handler: (...args: any[]) => any): this {
    this.#eventemitter.removeListener(type, handler);

    return this;
  }

  /**
   * @description Attach an one-time eventemitter handler to listen to a specific event
   *
   * @param type The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.once('connected', (): void => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.once('disconnected', (): void => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  public once (type: ApiInterfaceEvents, handler: (...args: any[]) => any): this {
    this.#eventemitter.once(type, handler);

    return this;
  }
}
