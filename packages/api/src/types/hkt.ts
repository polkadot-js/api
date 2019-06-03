// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type ApiType = 'Promise' | 'Observable';

// Higher-kinded types
// HKT<"Option", string> => Option<string>
// HKT<"Observable", Codec> => Observable<Codec>
export interface HKT<URI, A> {
  readonly _URI: URI;
  readonly _: A;
}

// Reverse-mapping
// Injecting type-level dictionaries for HKTs: URI -> concrete type
// We have the following URIs
// "Observable" -> Observable
// "Promise" -> Promise
export interface URI2HKT<A> { }
