// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// React Native does not have Object.setPrototypeOf
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function (obj: any, proto: any) {
    obj.__proto__ = proto;

    return obj;
  };
}
