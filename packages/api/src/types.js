// ISC, Copyright 2017-2018 Jaco Greeff
// @flow

export type ApiInterface$Section = {
  [string]: () => Promise<mixed>
};

export interface ApiInterface {
  +chain: ApiInterface$Section;
  +state: ApiInterface$Section;
}
