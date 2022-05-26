// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { OptionBool } from '@polkadot/types-codec';

describe('OptionBool', (): void => {
  const registry = new TypeRegistry();

  describe('decodes', (): void => {
    it('decodes none', (): void => {
      expect(new OptionBool(registry).toJSON()).toEqual(null);
    });

    it('decodes true', (): void => {
      expect(new OptionBool(registry, true).toJSON()).toEqual(true);
    });

    it('decodes false', (): void => {
      expect(new OptionBool(registry, false).toJSON()).toEqual(false);
    });
  });

  describe('encodes', (): void => {
    it('encodes none', (): void => {
      expect(new OptionBool(registry).toU8a()).toEqual(new Uint8Array([0]));
    });

    it('encodes true', (): void => {
      expect(new OptionBool(registry, true).toU8a()).toEqual(new Uint8Array([1]));
    });

    it('encodes false', (): void => {
      expect(new OptionBool(registry, false).toU8a()).toEqual(new Uint8Array([2]));
    });
  });

  it('has a sane toRawType representation', (): void => {
    expect(new OptionBool(registry).toRawType()).toEqual('Option<bool>');
  });

  it('has a sane inspect', (): void => {
    expect(new OptionBool(registry, true).inspect()).toEqual({
      outer: [new Uint8Array([1])]
    });
  });
});
