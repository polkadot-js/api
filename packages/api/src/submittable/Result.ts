// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DispatchError, DispatchInfo, ExtrinsicStatus, EventRecord } from '@polkadot/types/interfaces';
import { AnyJson, ISubmittableResult } from '@polkadot/types/types';
import { SubmittableResultValue } from './types';

function extractError (events: EventRecord[] = []): DispatchError | undefined {
  const exEvent = events.find(({ event: { method, section } }) => section === 'system' && method === 'ExtrinsicFailed');

  return exEvent
    ? exEvent.event.data[0] as DispatchError
    : undefined;
}

function extractInfo (events: EventRecord[] = []): DispatchInfo | undefined {
  const exEvent = events.find(({ event: { method, section } }) => section === 'system' && ['ExtrinsicFailed', 'ExtrinsicSuccess'].includes(method));

  return exEvent
    ? exEvent.event.method === 'ExtrinsicSuccess'
      ? exEvent.event.data[0] as DispatchInfo
      : exEvent.event.data[1] as DispatchInfo
    : undefined;
}

export default class SubmittableResult implements ISubmittableResult {
  public readonly dispatchError?: DispatchError;

  public readonly dispatchInfo?: DispatchInfo;

  public readonly events: EventRecord[];

  public readonly status: ExtrinsicStatus;

  constructor ({ dispatchError, dispatchInfo, events, status }: SubmittableResultValue) {
    this.dispatchError = dispatchError || extractError(events);
    this.dispatchInfo = dispatchInfo || extractInfo(events);
    this.events = events || [];
    this.status = status;
  }

  public get isCompleted (): boolean {
    return this.isError || this.status.isInBlock || this.status.isFinalized;
  }

  public get isError (): boolean {
    return this.status.isDropped || this.status.isFinalityTimeout || this.status.isInvalid || this.status.isUsurped;
  }

  public get isFinalized (): boolean {
    return this.status.isFinalized;
  }

  public get isInBlock (): boolean {
    return this.status.isInBlock;
  }

  public get isWarning (): boolean {
    return this.status.isRetracted;
  }

  /**
   * @description Filters EventRecords for the specified method & section (there could be multiple)
   */
  public filterRecords (section: string, method: string): EventRecord[] {
    return this.events.filter(({ event }): boolean =>
      event.section === section && event.method === method
    );
  }

  /**
   * @description Finds an EventRecord for the specified method & section
   */
  public findRecord (section: string, method: string): EventRecord | undefined {
    return this.events.find(({ event }): boolean =>
      event.section === section && event.method === method
    );
  }

  /**
   * @description Creates a human representation of the output
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return {
      events: this.events.map((event) => event.toHuman(isExtended)),
      status: this.status.toHuman(isExtended)
    };
  }
}
