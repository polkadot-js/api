// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, getTypeRegistry, Hash, Header, Index, Method, SignedBlock, Vector, ExtrinsicEra } from '@polkadot/types';
import { AnyNumber, AnyU8a, Callback, Codec, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
import { ApiInterface$Rx, ApiTypes, Signer } from './types';

import { Observable, combineLatest, of } from 'rxjs';
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

type SignerOptions = {
  blockHash: AnyU8a,
  era?: IExtrinsicEra | number,
  nonce: AnyNumber
};

// pick a default - in the case of 4s blocktimes, this translates to 60 seconds
const DEFAULT_MORTAL_LENGTH = 15;

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

  signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): SumbitableResultResult<ApiType>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, options: Partial<SignerOptions>, statusCb?: Callback<ISubmittableResult>): SumbitableResultSubscription<ApiType>;
}

export default function createSubmittableExtrinsic<ApiType> (
  type: ApiTypes,
  api: ApiInterface$Rx,
  decorateMethod: ApiBase<ApiType>['decorateMethod'],
  extrinsic: Method | Uint8Array | string,
  trackingCb?: Callback<ISubmittableResult>
): SubmittableExtrinsic<ApiType> {
  const _extrinsic = new (getTypeRegistry().getOrThrow('Extrinsic'))(extrinsic) as SubmittableExtrinsic<ApiType>;
  const _noStatusCb = type === 'rxjs';

  function updateSigner (updateId: number, status: Hash | ISubmittableResult): void {
    if ((updateId !== -1) && api.signer && api.signer.update) {
      api.signer.update(updateId, status);
    }
  }

  function statusObservable (status: ExtrinsicStatus): Observable<ISubmittableResult> {
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
          events: filterEvents(_extrinsic.hash, signedBlock, allEvents),
          status
        });

        trackingCb && trackingCb(result);

        return result;
      })
    );
  }

  function sendObservable (updateId: number = -1): Observable<Hash> {
    return (api.rpc.author
      .submitExtrinsic(_extrinsic) as Observable<Hash>)
      .pipe(
        tap((hash) => {
          updateSigner(updateId, hash);
        })
      );
  }

  function subscribeObservable (updateId: number = -1): Observable<ISubmittableResult> {
    return (api.rpc.author
      .submitAndWatchExtrinsic(_extrinsic) as Observable<ExtrinsicStatus>)
      .pipe(
        switchMap((status) =>
          statusObservable(status)
        ),
        tap((status) => {
          updateSigner(updateId, status);
        })
      );
  }

  function expandOptions (options: Partial<SignerOptions>): SignatureOptions {
    return options = {
      blockHash: api.genesisHash,
      version: api.runtimeVersion,
      ...options
    } as SignatureOptions;
  }

  function setupEraOptions (header: Header | null, options: Partial<SignerOptions>): Partial<SignatureOptions> {
    if (!header) {
      if (isNumber(options.era)) {
        // since we have no header, it is immortal, remove any option overrides
        // so we only supply the genesisHash and no era to the construction
        delete options.era;
        delete options.blockHash;
      }

      return {};
    }

    const { blockNumber, hash } = header;

    return {
      blockHash: hash,
      era: new ExtrinsicEra({
        current: blockNumber,
        period: options.era || DEFAULT_MORTAL_LENGTH
      })
    };
  }

  const signOrigin = _extrinsic.sign;

  Object.defineProperties(
    _extrinsic,
    {
      send: {
        value: function (statusCb?: Callback<ISubmittableResult>): SumbitableResultResult<ApiType> | SumbitableResultSubscription<ApiType> {
          const isSubscription = _noStatusCb || !!statusCb;

          return decorateMethod(isSubscription ? subscribeObservable : sendObservable)(statusCb);
        }
      },
      sign: {
        value: function (account: IKeyringPair, _options: Partial<SignerOptions>): SubmittableExtrinsic<ApiType> {
          // HACK here we actually override nonce if it was specified (backwards compat for
          // the previous signature - don't let userspace break, but allow then time to upgrade)
          const options: Partial<SignerOptions> = isBn(_options) || isNumber(_options)
            ? { nonce: _options as any as number }
            : _options;

          signOrigin.apply(_extrinsic, [account, expandOptions(options)]);

          return this;
        }
      },
      signAndSend: {
        value: function (account: IKeyringPair | string | AccountId | Address, optionsOrStatus?: Partial<SignerOptions> | Callback<ISubmittableResult>, statusCb?: Callback<ISubmittableResult>): SumbitableResultResult<ApiType> | SumbitableResultSubscription<ApiType> {
          let options: Partial<SignerOptions> = {};

          if (isFunction(optionsOrStatus)) {
            statusCb = optionsOrStatus;
          } else {
            options = { ...optionsOrStatus };
          }

          const isSubscription = _noStatusCb || !!statusCb;
          const isKeyringPair = isFunction((account as IKeyringPair).sign);
          const address = isKeyringPair ? (account as IKeyringPair).address : account.toString();
          let updateId: number | undefined;

          return decorateMethod(
            () => ((
              combineLatest([
                // if we have a nonce already, don't retrieve the latest, use what is there
                isUndefined(options.nonce)
                  ? api.query.system.accountNonce<Index>(address)
                  : of(new Index(options.nonce)),
                // if we have an era provided already or eraLength is <= 0 (immortal)
                // don't get the latest block, just pass null, handle in mergeMap
                (isUndefined(options.era) || (isNumber(options.era) && options.era > 0))
                  ? api.rpc.chain.getHeader() as Observable<Header>
                  : of(null)
              ])
            ).pipe(
              first(),
              mergeMap(async ([nonce, header]) => {
                const eraOptions = setupEraOptions(header, options);

                if (isKeyringPair) {
                  this.sign(account as IKeyringPair, { ...options, ...eraOptions, nonce });
                } else {
                  assert(api.signer, 'no signer exists');

                  updateId = await (api.signer as Signer).sign(_extrinsic, address, {
                    ...expandOptions({ ...options, ...eraOptions, nonce }),
                    genesisHash: api.genesisHash
                  });
                }
              }),
              switchMap(() => {
                return isSubscription
                  ? subscribeObservable(updateId)
                  : sendObservable(updateId) as any; // ???
              })
            ) as Observable<Codec>)
          )(statusCb);
        }
      }
    }
  );

  return _extrinsic;
}
