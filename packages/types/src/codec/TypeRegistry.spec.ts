// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from './typeRegistry';
import Text from '../Text';
import U32 from '../U32';

describe('TypeRegistry', () => {
  let registry: TypeRegistry;

  beforeEach(() => {
    registry = new TypeRegistry();
  });

  it('Handles non exist type', () => {
    expect(registry.get('non-exist')).toBeUndefined();
  });

  it('Able to register type', () => {
    registry.register(Text);
    expect(registry.get('Text')).toBe(Text);
  });

  it('Able to register type with a different name', () => {
    registry.register('TextRenamed', Text);
    expect(registry.get('TextRenamed')).toBe(Text);
  });

  it('Able to register multiple types', () => {
    registry.register({
      Text,
      'U32Renamed': U32
    });
    expect(registry.get('Text')).toBe(Text);
    expect(registry.get('U32Renamed')).toBe(U32);
  });
});
