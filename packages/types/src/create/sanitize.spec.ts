// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { alias } from './sanitize';

describe('sanitize', (): void => {
  describe('alias', (): void => {
    const exec = alias(['String'], 'Text');

    it('replaces all occurrences for types', (): void => {
      expect(exec('(String,Address,MasterString,String)')).toEqual(
        '(Text,Address,MasterString,Text)'
      );
    });

    it('replaces actual types, but leaves struct names', (): void => {
      expect(exec('{"system":"String","versionString":"String"}')).toEqual(
        '{"system":"Text","versionString":"Text"}'
      );
    });

    it('handles the preceding correctly', (): void => {
      // NOTE This type doesn't make sense
      expect(exec('String String (String,[String;32],String)"String<String>')).toEqual(
        'Text Text (Text,[Text;32],Text)"Text<Text>'
      );
    });
  });
});
