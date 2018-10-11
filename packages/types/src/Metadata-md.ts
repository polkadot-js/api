// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const fs = require('fs');
import { stringCamelCase, stringLowerFirst } from '@polkadot/util/string';

import Metadata from './Metadata';
import rpcdata from './Metadata.rpc';
import Method from './Method';

// intro text
const DESC_INTRO = '\n\n...';
const DESC_EXTRINSICS = '\n\n...';
const DESC_STORAGE = '\n\n...';

function addIntro () {
  return `# Metadata\n\n${DESC_INTRO}`;
}

function addExtrinsics (metadata: any) {
  return metadata.modules.reduce((md: string, meta: any) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.prefix.toString());

    return meta.module.call.functions.reduce((md: string, func: any) => {
      const methodName = stringCamelCase(func.name.toString());
      const args = '';
    //   const args = Method.filterOrigin(func).map(({ name, type }) => `${name}: ${type}`).join(', ');
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');

      return `${md}\n${sectionName}.${methodName}(${args})\n${doc}`;
    }, `${md}\n\n### ${sectionName}`);
  }, `\n\n## Extrinsics${DESC_EXTRINSICS}`);
}

function addStorage (metadata: any) {
  return metadata.modules.reduce((md: string, moduleMetadata: any) => {
    if (!moduleMetadata.storage) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.storage.prefix.toString());

    return moduleMetadata.storage.functions.reduce((md: string, func: any) => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? func.type.asMap.key.toString() : '';
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');

      return `${md}\n${sectionName}.${methodName}(${arg}): ${func.type}\n${doc}`;
    }, `${md}\n\n### ${sectionName}`);
  }, `\n\n## Storage${DESC_STORAGE}`);
}

function metadataMethodsAsText () {
  const metadata = new Metadata().fromJSON(rpcdata);
  return addIntro()//.concat(addStorage(metadata), addExtrinsics(metadata));
}

export function writeToMd () {
  const options = { encoding: 'utf16le' };
  const writeStream = fs.createWriteStream('docs/METHODS.md', options);

  writeStream.write(metadataMethodsAsText());

  // finish emitting event when all data flushed from stream
  writeStream.on('finish', () => {
    console.log('wrote all method metadata to Gitbook Markdown file');
  });

  writeStream.end();
}

writeToMd();
