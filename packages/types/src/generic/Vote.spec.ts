// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import Vote from './Vote';

describe('Vote', (): void => {
  const registry = new TypeRegistry();

  describe('construction', (): void => {
    it('constructs via boolean true', (): void => {
      expect(new Vote(registry, true).toU8a()).toEqual(new Uint8Array([128]));
      expect(new Vote(registry, true).isAye).toBe(true);
      expect(new Vote(registry, true).isNay).toBe(false);
    });

    it('constructs via boolean false', (): void => {
      expect(new Vote(registry, false).toU8a()).toEqual(new Uint8Array([0]));
      expect(new Vote(registry, false).isNay).toBe(true);
      expect(new Vote(registry, false).isAye).toBe(false);
    });

    it('constructs via undefined', (): void => {
      expect(new Vote(registry).isNay).toBe(true);
    });

    it('has isYay for positive', (): void => {
      // eslint-disable-next-line no-new-wrappers
      expect(new Vote(registry, true).isAye).toBe(true);
    });

    it('has isNay for negative', (): void => {
      // eslint-disable-next-line no-new-wrappers
      expect(new Vote(registry, false).isNay).toBe(true);
    });

    it('is Aye for negative numbers', (): void => {
      expect(new Vote(registry, -128).isAye).toBe(true);
    });

    it('is Nay for positive numbers', (): void => {
      expect(new Vote(registry, 127).isNay).toBe(true);
    });

    it('is Nay for 0', (): void => {
      expect(new Vote(registry, 0).isNay).toBe(true);
    });

    it('constructs via empty', (): void => {
      expect(new Vote(registry).isNay).toBe(true);
    });

    it('constructs via Uint8Array (empty)', (): void => {
      expect(new Vote(registry, new Uint8Array()).isNay).toBe(true);
    });

    it('constructs via Uint8Array (nay)', (): void => {
      expect(new Vote(registry, new Uint8Array([1])).isNay).toBe(true);
    });

    it('constructs via Uint8Array (aye)', (): void => {
      const test = new Vote(registry, new Uint8Array([0b10000010]));

      expect(test.isNay).toBe(false);
      expect(test.conviction.toString()).toEqual('Locked2x');
    });
  });

  describe('Vote with conviction', (): void => {
    it('constructs Vote with raw boolean', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 'Locked1x'
        }).toU8a()
      ).toEqual(new Uint8Array([0b10000001]));
    });

    it('constructs with Vote aye is false, conviction is None', (): void => {
      expect(
        new Vote(registry, {
          aye: false,
          conviction: 'None'
        }).toU8a()
      ).toEqual(new Uint8Array([0b00000000]));
    });

    it('constructs with Vote aye is true, conviction is Locked4x', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 'Locked4x'
        }).toU8a()
      ).toEqual(new Uint8Array([0b10000100]));
    });
  });

  describe('getters', (): void => {
    it('Conviction getter works', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 'Locked2x'
        }).conviction.toString()
      ).toEqual('Locked2x');
    });

    it('Conviction getter works with raw boolean and string conviction', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 'Locked2x'
        }).conviction.toString()
      ).toEqual('Locked2x');
    });

    it('Conviction getter works with raw boolean and conviction index', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 2
        }).conviction.toString()
      ).toEqual('Locked2x');
    });

    it('Conviction getter works with raw boolean and no conviction', (): void => {
      const test = new Vote(registry, { aye: true });

      expect(test.isAye).toEqual(true);
      expect(test.conviction.toString()).toEqual('None');
    });

    it('isAye getter works', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 'None'
        }).isAye)
        .toEqual(true);
    });

    it('isNay getter works', (): void => {
      expect(
        new Vote(registry, {
          aye: true,
          conviction: 'None'
        }).isNay)
        .toEqual(false);
    });
  });

  describe('utils', (): void => {
    it('has a sane toRawType', (): void => {
      expect(new Vote(registry).toRawType()).toEqual('Vote');
    });
  });
});
