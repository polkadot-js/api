// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// Be able to import json in TS
// https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript
declare module '*.json' {
  const value: any;
  export default value;
}
