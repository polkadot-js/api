// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { stringCamelCase, stringLowerFirst } from '@polkadot/util/string';

import Method from './Method';
import Metadata from './Metadata';
import rpcdata from './Metadata.rpc';

// some intro text goes in here
const DESC_EXTRINSICS = '\n\n...';
const DESC_STORAGE = '\n\n...';

function addExtrinsics (metadata) {
  return metadata.modules.reduce((md, meta) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.prefix.toString());

    return meta.module.call.functions.reduce((md, func) => {
      const methodName = stringCamelCase(func.name.toString());
      const args = Method.filterOrigin(func).map(({ name, type }) => `${name}: ${type}`).join(', ');
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');

      return `${md}\n${sectionName}.${methodName}(${args})\n${doc}`;
    }, `${md}\n\n### ${sectionName}`);
  }, `\n\n## Extrinsics${DESC_EXTRINSICS}`);
}

function addStorage (metadata) {
  return metadata.modules.reduce((md, moduleMetadata) => {
    if (!moduleMetadata.storage) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.storage.prefix.toString());

    return moduleMetadata.storage.functions.reduce((md, func) => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? func.type.asMap.key.toString() : '';
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');

      return `${md}\n${sectionName}.${methodName}(${arg}): ${func.type}\n${doc}`;
    }, `${md}\n\n### ${sectionName}`);
  }, `\n\n## Storage${DESC_STORAGE}`);
}

const metadata = new Metadata().fromJSON(rpcdata);

console.error('# Metadata', addStorage(metadata), addExtrinsics(metadata));

describe('Metadata (md)', () => {
  it('does something', () => {
    expect(true).toBe(true);
  });
});
