import type { AnyFunction, Codec } from "@polkadot/types-codec/types";
import type { ApiTypes, ReturnCodec } from "./base.js";
import type { Observable } from "rxjs";

export interface QueryableViews<ApiType extends ApiTypes> {
      // when non-augmented, we need to at least have Codec results
      [key: string]: QueryableModuleViews<ApiType>;
}

export type QueryableModuleViews<ApiType extends ApiTypes> = Record<string, DecoratedViewBase<ApiType>>

export type DecoratedViewBase<ApiType extends ApiTypes, F extends AnyFunction = (...args: any[]) => Observable<Codec>> =
  ApiType extends 'rxjs'
    ? <T = ReturnCodec<F>> (...args: Parameters<F>) => Observable<T>
    : <T = ReturnCodec<F>> (...args: Parameters<F>) => Promise<T>;