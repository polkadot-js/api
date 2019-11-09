// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicStatus, EventRecord } from '@polkadot/types/interfaces';
import { SubmittableResultImpl, SubmittableResultValue } from './types';

export default class SubmittableResult implements SubmittableResultImpl {
  public readonly events: EventRecord[];

  public readonly status: ExtrinsicStatus;

  constructor ({ events, status }: SubmittableResultValue) {
    this.events = events || [];
    this.status = status;
  }

  public get isCompleted (): boolean {
    return this.isError || this.isFinalized;
  }

  public get isError (): boolean {
    return this.status.isDropped || this.status.isInvalid || this.status.isUsurped;
  }

  public get isFinalized (): boolean {
    return this.status.isFinalized;
  }

  /**
   * @description Finds an EventRecord for the specified method & section
   */
  public findRecord (section: string, method: string, newest?: boolean): EventRecord | undefined {
    return (newest ? this.events.reverse() : this.events).find(({ event }): boolean =>
      event.section === section && event.method === method
    );
  }
}
