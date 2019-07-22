// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a, Callback, Codec, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes } from './types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { first, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AccountId, Address, ExtrinsicStatus, EventRecord, getTypeRegistry, Hash, Header, Index, Method, SignedBlock, Vector, ExtrinsicEra } from '@polkadot/types';
import { isBn, isFunction, isNumber, isUndefined } from '@polkadot/util';

import filterEvents from './util/filterEvents';
import ApiBase from './Base';
import SignerPayload from './SignerPayload';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISubmittableResult {
  readonly events: EventRecord[];
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

interface SubmittableResultValue {
  events?: EventRecord[];
  status: ExtrinsicStatus;
}

interface SignerOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra | number;
  nonce: AnyNumber;
  tip?: AnyNumber;
}

// The default for 6s allowing for 5min eras. When translating this to faster blocks -
//   - 4s = (10 / 15) * 5 = 3.33m
//   - 2s = (10 / 30) * 5 = 1.66m
const BLOCKTIME = 6;
const ONE_MINUTE = 60 / BLOCKTIME;
const DEFAULT_MORTAL_LENGTH = 5 * ONE_MINUTE;

function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}

export class SubmittableResult implements ISubmittableResult {
  public readonly events: EventRecord[];

  public readonly status: ExtrinsicStatus;

  public constructor ({ events, status }: SubmittableResultValue) {
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
  public findRecord (section: string, method: string): EventRecord | undefined {
    return this.events.find(({ event }): boolean =>
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
  api: ApiInterfaceRx,
  decorateMethod: ApiBase<ApiType>['decorateMethod'],
  extrinsic: Method | Uint8Array | string,
  trackingCb?: Callback<ISubmittableResult>
): SubmittableExtrinsic<ApiType> {
  const _extrinsic = new (getTypeRegistry().getOrThrow('Extrinsic'))(extrinsic, { version: api.extrinsicType }) as SubmittableExtrinsic<ApiType>;
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
      map(([signedBlock, allEvents]): SubmittableResult => {
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
        tap((hash): void => {
          updateSigner(updateId, hash);
        })
      );
  }

  function subscribeObservable (updateId: number = -1): Observable<ISubmittableResult> {
    return (api.rpc.author
      .submitAndWatchExtrinsic(_extrinsic) as Observable<ExtrinsicStatus>)
      .pipe(
        switchMap((status): Observable<ISubmittableResult> =>
          statusObservable(status)
        ),
        tap((status): void => {
          updateSigner(updateId, status);
        })
      );
  }

  function expandOptions (options: Partial<SignerOptions>, extras: { blockHash?: Hash; era?: ExtrinsicEra; nonce?: Index }): SignatureOptions {
    return {
      blockHash: api.genesisHash,
      version: api.runtimeVersion,
      ...options,
      ...extras
    } as unknown as SignatureOptions;
  }

  function expandEraOptions (options: Partial<SignerOptions>, { header, nonce }: { header: Header | null; nonce: Index }): SignatureOptions {
    if (!header) {
      if (isNumber(options.era)) {
        // since we have no header, it is immortal, remove any option overrides
        // so we only supply the genesisHash and no era to the construction
        delete options.era;
        delete options.blockHash;
      }

      return expandOptions(options, { nonce });
    }

    const { blockNumber, hash } = header;

    return expandOptions(options, {
      blockHash: hash,
      era: new ExtrinsicEra({
        current: blockNumber,
        period: options.era || DEFAULT_MORTAL_LENGTH
      }),
      nonce
    });
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
        value: function (account: IKeyringPair, optionOrNonce: Partial<SignerOptions>): SubmittableExtrinsic<ApiType> {
          // HACK here we actually override nonce if it was specified (backwards compat for
          // the previous signature - don't let userspace break, but allow then time to upgrade)
          const options: Partial<SignerOptions> = isBn(optionOrNonce) || isNumber(optionOrNonce)
            ? { nonce: optionOrNonce }
            : optionOrNonce;

          signOrigin.apply(_extrinsic, [account, expandOptions(options, {})]);

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
          const address = isKeyringPair(account) ? account.address : account.toString();
          let updateId: number | undefined;

          return decorateMethod(
            (): Observable<Codec> => ((
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
              mergeMap(async ([nonce, header]): Promise<void> => {
                const eraOptions = expandEraOptions(options, { header, nonce });

                // FIXME This is becoming real messy with all the options - way past
                // "a method should fit on a single screen" stage. (Probably want to
                // clean this when we remove `api.signer.sign` in the next beta cycle)
                if (isKeyringPair(account)) {
                  this.sign(account, eraOptions);
                } else if (api.signer) {
                  if (api.signer.signPayload) {
                    const signPayload = new SignerPayload({
                      ...eraOptions,
                      address,
                      method: _extrinsic.method,
                      blockNumber: header ? header.blockNumber : 0,
                      genesisHash: api.genesisHash,
                      version: api.extrinsicType
                    });
                    const result = await api.signer.signPayload(signPayload.toPayload());

                    // Here we explicitly call `toPayload()` again instead of working with an object
                    // (reference) as passed to the signer. This means that we are sure that the
                    // payload data is not modified from our inputs, but the signer
                    _extrinsic.addSignature(address, result.signature, signPayload.toPayload());
                    updateId = result.id;
                  } else if (api.signer.sign) {
                    console.warn('The Signer.sign interface is deprecated and will be removed in a future version, Swap to using the Signer.signPayload interface instead.');

                    updateId = await api.signer.sign(_extrinsic, address, {
                      ...eraOptions,
                      blockNumber: header ? header.blockNumber : new BN(0),
                      genesisHash: api.genesisHash
                    });
                  } else {
                    throw new Error('Invalid signer interface');
                  }
                } else {
                  throw new Error('no signer exists');
                }
              }),
              switchMap((): Observable<ISubmittableResult> | Observable<Hash> => {
                return isSubscription
                  ? subscribeObservable(updateId)
                  : sendObservable(updateId);
              })
            ) as Observable<Codec>)
          )(statusCb);
        }
      }
    }
  );

  return _extrinsic;
}
