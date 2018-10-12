// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const fs = require('fs');
import { stringCamelCase, stringLowerFirst } from '@polkadot/util/string';

import interfaces from '../../../type-jsonrpc/src';
import Metadata from '../Metadata';
import rpcdata from '../Metadata.rpc';
import Method from '../Method';

// some intro text goes in here
const DESC_RPC = '\n\n_The following RPC methods are the Remote Calls that are available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself. The RPCs are never exposed by the runtime._';
const DESC_EXTRINSICS = '\n\n_The following Extrinsics methods are part of the default Substrate runtime. Since an Extrinsic is a holder of an object that is just an array of bytes to be included, it does not have a return._';
const DESC_STORAGE = '\n\n_The following Storage methods are part of the default Substrate runtime._';

function addRpc () {
  return Object.keys(interfaces).reduce((md, sectionName) => {
    const section = interfaces[sectionName];

    return Object.keys(section.methods).reduce((md, methodName) => {
      const method = section.methods[methodName];
      const args = method.params.map(({ name, isOptional, type }) => {
        return name + (isOptional ? '?' : '') + ': `' + type + '`';
      }).join(', ');
      const type = '`' + method.type + '`';
      const isSub = method.isSubscription;

      return `${md}\n▸ **${methodName}**(${args}): ${type}` + `${method && method.description ? `\n- **summary**: ${method.description}` : `\n`}` + `${isSub ? `\n- **isSubscription**: ${isSub}\n` : `\n`}`;
    }, `${md}\n___\n\n### ${sectionName}\n\n_${section.description}_\n`);
  }, `## JSON-RPC${DESC_RPC}\n`);
}

function addExtrinsics (metadata: any) {
  return metadata.modules.reduce((md: string, meta: any) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.prefix.toString());

    return meta.module.call.functions.reduce((md: string, func: any) => {
      const methodName = stringCamelCase(func.name.toString());
      const args = Method.filterOrigin(func).map(({ name, type }) => `${name}: ` + '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');

      return `${md}\n▸ **${methodName}**(${args})` + `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;
    }, `${md}\n___\n### ${sectionName}\n`);
  }, `## Extrinsics${DESC_EXTRINSICS}`);
}

function addStorage (metadata: any) {
  return metadata.modules.reduce((md: string, moduleMetadata: any) => {
    if (!moduleMetadata.storage) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.storage.prefix.toString());

    return moduleMetadata.storage.functions.reduce((md: string, func: any) => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? ('`' + func.type.asMap.key.toString() + '`') : '';
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');

      return `${md}\n▸ **${methodName}**(${arg}): ` + '`' + func.type + '`' + `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;
    }, `${md}\n___\n### ${sectionName}\n`);
  }, `## Storage${DESC_STORAGE}`);
}

function metadataStorageMethodsAsText () {
  const metadata = new Metadata().fromJSON(rpcdata);
  return addStorage(metadata);
}

function metadataExtrinsicsMethodsAsText () {
  const metadata = new Metadata().fromJSON(rpcdata);
  return addExtrinsics(metadata);
}

function writeToRpcMd () {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream('docs/METHODS_RPC.md', options);

  writeStream.write(addRpc());

  writeStream.on('finish', () => {
    console.log('wrote all rpc method metadata to Gitbook Markdown file');
  });

  writeStream.end();
}

function writeToStorageMd () {
  const optionsRead = { flags: 'r', encoding: 'utf8' };
  fs.readFile('packages/types/src/scripts/METHODS_STORAGE_SUBSTRATE.md', optionsRead, function read (err: Error, data: string) {
    if (err) {
      throw err;
    }

    // 'utf8', 'ascii', 'binary', 'hex', 'base64', or 'utf16le'
    const options = { flags: 'w', encoding: 'utf8' };
    const writeStream = fs.createWriteStream('docs/METHODS_STORAGE.md', options);

    writeStream.write(metadataStorageMethodsAsText());
    writeStream.write(data);

    // finish emitting event when all data flushed from stream
    writeStream.on('finish', () => {
      console.log('wrote all storage method metadata to Gitbook Markdown file');
    });

    writeStream.end();
  });
}

function writeToExtrinsicsMd () {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream('docs/METHODS_EXTRINSICS.md', options);

  writeStream.write(metadataExtrinsicsMethodsAsText());

  writeStream.on('finish', () => {
    console.log('wrote all extrinsics method metadata to Gitbook Markdown file');
  });

  writeStream.end();
}

writeToRpcMd();
writeToStorageMd();
writeToExtrinsicsMd();
