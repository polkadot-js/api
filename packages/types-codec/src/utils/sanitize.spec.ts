// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { alias, flattenSingleTuple, removeColons, removeExtensions } from '@polkadot/types-codec/utils/sanitize';

describe('sanitize', (): void => {
  describe('alias', (): void => {
    const fn = alias('String', 'Text');

    it('replaces all occurrences for types', (): void => {
      expect(fn('(String,Address,MasterString,String)')).toEqual(
        '(Text,Address,MasterString,Text)'
      );
    });

    it('replaces actual types, but leaves struct names', (): void => {
      expect(fn('{"system":"String","versionString":"String"}')).toEqual(
        '{"system":"Text","versionString":"Text"}'
      );
    });

    it('handles the preceding correctly', (): void => {
      // NOTE This type doesn't make sense
      expect(fn('String String (String,[String;32],String)"String<String>')).toEqual(
        'Text Text (Text,[Text;32],Text)"Text<Text>'
      );
    });

    it('handles embedded Vec/Tuples', (): void => {
      const ann = alias('Announcement', 'ProxyAnnouncement');

      expect(ann('(Vec<Announcement>,BalanceOf)')).toEqual(
        '(Vec<ProxyAnnouncement>,BalanceOf)'
      );
    });
  });

  describe('removeColons', (): void => {
    const fn = removeColons();

    it('removes preceding ::Text -> Text', (): void => {
      expect(fn('::Text')).toEqual('Text');
    });

    it('removes middle voting::TallyType -> TallyType', (): void => {
      expect(fn('voting::TallyType')).toEqual('TallyType');
    });

    it('removes on embedded values (one)', (): void => {
      expect(fn('(T::AccountId, SpanIndex)')).toEqual('(AccountId, SpanIndex)');
    });

    it('removes on embedded values (all)', (): void => {
      expect(fn('(T::AccountId, slashing::SpanIndex)')).toEqual('(AccountId, SpanIndex)');
    });

    it('keeps with allowNamespaces', (): void => {
      expect(fn('::slashing::SpanIndex', { allowNamespaces: true })).toEqual('slashing::SpanIndex');
    });
  });

  describe('bounded', (): void => {
    const fn = removeExtensions('Bounded', true);

    it('correctly cleans up bounded values', (): void => {
      expect(fn('BoundedVec<u32, 256>')).toEqual('Vec<u32>');
    });

    it('correctly cleans up nested bounded values', (): void => {
      expect(
        fn('BoundedBTreeMap<BoundedVec<BoundedVec<u32, 1>, 2>, BoundedBTreeSet<u32, BoundedVec<u64, 3>, 4>, 5>')
      ).toEqual('BTreeMap<Vec<Vec<u32>>,BTreeSet<u32,Vec<u64>>>');
    });

    it('cleans up values with trailing commas', (): void => {
      expect(
        flattenSingleTuple()(
          fn('(BoundedVec<Announcement<T::AccountId, CallHashOf<T>, T::BlockNumber>, T::MaxPending,>,BalanceOf<T>,)')
        )
      ).toEqual('(Vec<Announcement<T::AccountId,CallHashOf<T>,T::BlockNumber>>,BalanceOf<T>)');
    });
  });

  describe('weak', (): void => {
    const fn = removeExtensions('Weak', false);

    it('correctly cleans up weak values', (): void => {
      expect(fn('WeakVec<u32>')).toEqual('Vec<u32>');
    });
  });
});
