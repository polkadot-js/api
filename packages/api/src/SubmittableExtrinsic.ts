// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, getTypeRegistry, Hash, Index, SignedBlock, Vector } from '@polkadot/types';
import { Callback, Codec, Constructor, IExtrinsic, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
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

export type SumbitableResultResult<ApiType> =
  ApiType extends 'rxjs'
    ? Observable<ISubmittableResult>
    : Promise<Hash>;

export type SumbitableResultSubscription<ApiType> =
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

export interface SubmittableExtrinsic<ApiType> extends IExtrinsic {
  send (): SumbitableResultResult<ApiType>;

  send (statusCb: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;

  sign (account: IKeyringPair, _options: Partial<SignatureOptions>): this;

  signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<Partial<SignatureOptions>>): SumbitableResultResult<ApiType>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;
}

export default function createSubmittableExtrinsic<ApiType> (
  type: ApiTypes,
  api: ApiInterface$Rx,
  decorateMethod: ApiBase<ApiType>['decorateMethod'],
  trackingCb?: Callback<ISubmittableResult>
): Constructor<SubmittableExtrinsic<ApiType>> {
  const _noStatusCb = type === 'rxjs';
  return getTypeRegistry().extends<IExtrinsic, SubmittableExtrinsic<ApiType>>('Extrinsic',
    (Extrinsic) => class extends Extrinsic implements SubmittableExtrinsic<ApiType>{
    static Fallback: undefined;

    send (): SumbitableResultResult<ApiType>;
    send (statusCb: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;
    send (statusCb?: Callback<ISubmittableResult>): SumbitableResultResult<ApiType> | SumbitableResultSubscription<ApiType> {
      const isSubscription = _noStatusCb || !!statusCb;

      return decorateMethod(isSubscription ? this.subscribeObservable.bind(this) : this.sendObservable.bind(this))(statusCb);
    }

    sign (account: IKeyringPair, _options: Partial<SignatureOptions>): this {
      // HACK here we actually override nonce if it was specified (backwards compat for
      // the previous signature - don't let userspace break, but allow then time to upgrade)
      const options: Partial<SignatureOptions> = isBn(_options) || isNumber(_options)
        ? { nonce: _options as any as number }
        : _options;

      super.sign(account, this.expandOptions(options));

      return this;
    }

    signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<Partial<SignatureOptions>>): SumbitableResultResult<ApiType>;
    signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;
    signAndSend (account: IKeyringPair | string | AccountId | Address, _options?: Partial<Partial<SignatureOptions>> | Callback<ISubmittableResult>, statusCb?: Callback<ISubmittableResult>): SumbitableResultResult<ApiType> | SumbitableResultSubscription<ApiType> {
      let options: Partial<Partial<SignatureOptions>> = {};

      if (isFunction(_options)) {
        statusCb = _options;
      } else {
        options = _options || {};
      }

      const isSubscription = _noStatusCb || !!statusCb;
      const isKeyringPair = isFunction((account as IKeyringPair).sign);
      const address = isKeyringPair ? (account as IKeyringPair).address : account.toString();
      let updateId: number | undefined;

      return decorateMethod(
        () => ((
          isUndefined(options.nonce)
            ? api.query.system.accountNonce<Index>(address)
            : of(new Index(options.nonce))
        ).pipe(
          first(),
          mergeMap(async (nonce) => {
            if (isKeyringPair) {
              this.sign(account as IKeyringPair, { ...options, nonce });
            } else {
              assert(api.signer, 'no signer exists');

              updateId = await (api.signer as Signer).sign(this, address, {
                ...this.expandOptions({ ...options, nonce }),
                genesisHash: api.genesisHash
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

    protected updateSigner (updateId: number, status: Hash | ISubmittableResult): void {
      if ((updateId !== -1) && api.signer && api.signer.update) {
        api.signer.update(updateId, status);
      }
    }

    protected statusObservable (status: ExtrinsicStatus): Observable<ISubmittableResult> {
      if (!status.isFinalized) {
        const result = new SubmittableResult({ status });

        trackingCb && trackingCb(result);

        return of(result);
      }

      const blockHash = status.asFinalized;

      return combineLatest([
        api.rpc.chain.getBlock(blockHash) as Observable<SignedBlock>,
        api.query.system.events.at(blockHash) as Observable<Vector<EventRecord>>
      ]).pipe(
        map(([signedBlock, allEvents]) => {
          const result = new SubmittableResult({
            events: filterEvents(this.hash, signedBlock, allEvents),
            status
          });

          trackingCb && trackingCb(result);

          return result;
        })
      );
    }

    protected sendObservable (updateId: number = -1): Observable<Hash> {
      return (api.rpc.author
        .submitExtrinsic(this) as Observable<Hash>)
        .pipe(
          tap((hash) => {
            this.updateSigner(updateId, hash);
          })
        );
    }

    protected subscribeObservable (updateId: number = -1): Observable<ISubmittableResult> {
      return (api.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(
          switchMap((status) =>
            this.statusObservable(status)
          ),
          tap((status) => {
            this.updateSigner(updateId, status);
          })
        );
    }

    protected expandOptions (options: Partial<SignatureOptions>): SignatureOptions {
      return {
        blockHash: api.genesisHash,
        version: api.runtimeVersion,
        ...options
      } as SignatureOptions;
    }


  });
}
