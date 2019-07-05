// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, Hash, Index, Method, SignedBlock, Vector, Extrinsic } from '@polkadot/types';
import { Callback, Codec, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
import { ApiInterface$Rx, ApiTypes, Signer } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { assert, isBn, isFunction, isNumber, isUndefined } from '@polkadot/util';

import ApiBase from './Base';
import filterEvents from './util/filterEvents';

export interface ISubmittableResult {
  readonly events: Array<EventRecord>;
  readonly status: ExtrinsicStatus;
  readonly isCompleted: boolean;
  readonly isError: boolean;
  readonly isFinalized: boolean;

  findRecord (section: string, method: string): EventRecord | undefined;
}

interface SubmittableOptions<ApiType> {
  api: ApiInterface$Rx;
  decorateMethod: ApiBase<ApiType>['decorateMethod'];
  type: ApiTypes;
}

export type SubmittableResultResult<ApiType> =
  ApiType extends 'rxjs'
  ? Observable<ISubmittableResult>
  : Promise<Hash>;

export type SubmittableResultSubscription<ApiType> =
  ApiType extends 'rxjs'
  ? Observable<ISubmittableResult>
  : Promise<() => void>;

type SubmittableResultValue = {
  events?: Array<EventRecord>;
  status: ExtrinsicStatus;
};

export class SubmittableResult implements ISubmittableResult {
  readonly events: Array<EventRecord>;
  readonly status: ExtrinsicStatus;

  constructor ({ events, status }: SubmittableResultValue) {
    this.events = events || [];
    this.status = status;
  }

  get isCompleted (): boolean {
    return this.isError || this.isFinalized;
  }

  get isError (): boolean {
    return this.status.isDropped || this.status.isInvalid || this.status.isUsurped;
  }

  get isFinalized (): boolean {
    return this.status.isFinalized;
  }

  /**
   * @description Finds an EventRecord for the specified method & section
   */
  findRecord (section: string, method: string): EventRecord | undefined {
    return this.events.find(({ event }) =>
      event.section === section && event.method === method
    );
  }
}

export class SubmittableExtrinsic<ApiType> extends Extrinsic {
  private _api: ApiInterface$Rx;
  private _decorateMethod: ApiBase<ApiType>['decorateMethod'];
  private _noStatusCb: boolean;

  constructor (value: Method | Uint8Array | string, options: SubmittableOptions<ApiType>) {
    super(value);
    this._api = options.api;
    this._noStatusCb = options.type === 'rxjs';
    this._decorateMethod = options.decorateMethod;
  }

  private subscribeObservable (updateId?: number): Observable<ISubmittableResult> {
    return (this._api.rpc.author
      .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
      .pipe(
        switchMap((status) =>
          this.statusObservable(status)
        ),
        tap((status) => {
          if (updateId) {
            this.updateSigner(updateId, status);
          }
        })
      );
  }

  private statusObservable (status: ExtrinsicStatus): Observable<ISubmittableResult> {
    if (!status.isFinalized) {
      const result = new SubmittableResult({ status });

      return of(result);
    }

    const blockHash = status.asFinalized;

    return combineLatest([
      this._api.rpc.chain.getBlock(blockHash) as Observable<SignedBlock>,
      this._api.query.system.events.at(blockHash) as Observable<Vector<EventRecord>>
    ]).pipe(
      map(([signedBlock, allEvents]) => {
        const result = new SubmittableResult({
          events: filterEvents(this.hash, signedBlock, allEvents),
          status
        });

        return result;
      })
    );
  }

  private sendObservable (updateId?: number): Observable<Hash> {
    return (this._api.rpc.author
      .submitExtrinsic(this) as Observable<Hash>)
      .pipe(
        tap((hash) => {
          if (updateId) {
            this.updateSigner(updateId, hash);
          }
        })
      );
  }

  private updateSigner (updateId: number, status: Hash | ISubmittableResult): void {
    if (this._api.signer && this._api.signer.update) {
      this._api.signer.update(updateId, status);
    }
  }

  private expandOptions (options: Partial<SignatureOptions>): SignatureOptions {
    return {
      blockHash: this._api.genesisHash,
      version: this._api.runtimeVersion,
      ...options
    } as SignatureOptions;
  }

  send (statusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
    const isSubscription = this._noStatusCb || statusCb;
    return this._decorateMethod(isSubscription ? this.subscribeObservable.bind(this) : this.sendObservable.bind(this))(statusCb);
  }

  sign (account: IKeyringPair, _options: Partial<SignatureOptions>): SubmittableExtrinsic<ApiType> {
    // HACK here we actually override nonce if it was specified (backwards compat for
    // the previous signature - don't let userspace break, but allow then time to upgrade)
    const options: Partial<SignatureOptions> = isBn(_options) || isNumber(_options)
      ? { nonce: _options as any as number }
      : _options;

    super.sign(account, this.expandOptions(options));

    return this;
  }

/*

  signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<Partial<SignatureOptions>>): SumbitableResultResult<ApiType>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;
}
*/

  signAndSend (account: IKeyringPair | string | AccountId | Address, _options?: Partial<SignatureOptions> | Callback<ISubmittableResult>, statusCb?: Callback<ISubmittableResult>):
    ApiType extends 'rxjs'
    ? SubmittableResultResult<ApiType>
    : typeof _options extends Callback<ISubmittableResult>
      ? SubmittableResultSubscription<ApiType>
      : SubmittableResultResult<ApiType> {
    let options: Partial<SignatureOptions> = {};

    if (isFunction(_options)) {
      statusCb = _options;
    } else {
      options = _options || {};
    }

    const isSubscription = this._noStatusCb || statusCb;
    const isKeyringPair = isFunction((account as IKeyringPair).sign);
    const address = isKeyringPair ? (account as IKeyringPair).address : account.toString();
    let updateId: number | undefined;

    return this._decorateMethod(
      () => ((
        isUndefined(options.nonce)
          ? this._api.query.system.accountNonce<Index>(address)
          : of(new Index(options.nonce))
      ).pipe(
        first(),
        mergeMap(async (nonce) => {
          if (isKeyringPair) {
            this.sign(account as IKeyringPair, { ...options, nonce });
          } else {
            assert(this._api.signer, 'no signer exists');

            updateId = await (this._api.signer as Signer).sign(this, address, {
              ...this.expandOptions({ ...options, nonce }),
              genesisHash: this._api.genesisHash
            });
          }
        }),
        switchMap(() => {
          return isSubscription
            ? this.subscribeObservable(updateId)
            : this.sendObservable(updateId) as any; // ???
        })
      ) as Observable<Codec>)
    )(statusCb);
  }
}

export default function createSubmittableExtrinsic<ApiType> (
  type: ApiTypes,
  api: ApiInterface$Rx,
  decorateMethod: ApiBase<ApiType>['decorateMethod'],
  extrinsic: Method | Uint8Array | string
): SubmittableExtrinsic<ApiType> {
  return new SubmittableExtrinsic(extrinsic, { type, api, decorateMethod });
}
