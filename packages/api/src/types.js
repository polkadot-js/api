// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

export type ApiInterface$Section = {
  // flowlint-next-line unclear-type:off
  [string]: Function
};

export type ApiInterface = {
  chain: ApiInterface$Section,
  state: ApiInterface$Section
}
