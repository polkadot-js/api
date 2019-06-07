// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';

// Higher-kinded types
// HKT<"Option", string> => Option<string>
// HKT<"Observable", Codec> => Observable<Codec>
export interface HKT<URI, A> {
  readonly _URI: URI;
  readonly _A: A;
}

// Reverse-mapping
// Injecting type-level dictionaries for HKTs: URI -> concrete type
// We have the following URIs
interface URI2HKT<A> {
  Observable: Observable<A>;
  Promise: Promise<A>;
}

export type URIS = keyof URI2HKT<any>;

export type HktType<URI, A> = URI extends URIS ? URI2HKT<A>[URI] : any;
