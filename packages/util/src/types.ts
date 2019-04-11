// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface ExtErrorInterface {
  code: number;
  data: any;
  message: string;
  stack: string;
}

type Logger$Data$Fn = () => Array<any>;
export type Logger$Data = Array<any | Logger$Data$Fn>;

export type Logger = {
  debug: (...values: Logger$Data) => void,
  error: (...values: Logger$Data) => void,
  log: (...values: Logger$Data) => void,
  noop: (...values: Logger$Data) => void,
  warn: (...values: Logger$Data) => void
};

export interface ToBnOptions {
  isLe?: boolean;
  isNegative?: boolean;
}
