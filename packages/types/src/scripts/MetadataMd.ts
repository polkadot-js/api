// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const fs = require('fs');
import { stringCamelCase, stringLowerFirst } from '@polkadot/util/string';

import interfaces from '../../../type-jsonrpc/src';
import Metadata from '../Metadata';
import rpcdata from '../Metadata.rpc';
import Method from '../Method';

const ANCHOR_TOP = `<a id='top' style='text-decoration: none;'>`;
const LINK_BACK_TO_TOP = `<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>`;

const DESC_EXTRINSICS = '\n\n_The following sections contain Extrinsics methods are part of the default Substrate runtime. Since an Extrinsic is a holder of an object that is just an array of bytes to be included, it does not have a return._\n';
const DESC_EVENTS = '\n\nEvents are emitted for cerain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.\n';
const DESC_RPC = '\n\n_The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself. The RPCs are never exposed by the runtime._';
const DESC_STORAGE = '\n\n_The following sections contain Storage methods are part of the default Substrate runtime._\n';

function sectionLink (sectionName: string) {
  return `- **[${stringCamelCase(sectionName)}](#${stringCamelCase(sectionName)})**\n\n`;
}

function generateSectionLinks (sectionName: string, metadata: Metadata) {
  switch (sectionName) {
    case 'events':
      return metadata.events.map((i) => i).sort().map((data: any) =>
        sectionLink(data.name.toString())
      ).join('');

    case 'extrinsics':
    case 'storage':
      return metadata.modules.map((i) => i).sort().map((runtimeModuleMetadata: any) =>
        sectionLink(runtimeModuleMetadata.prefix.toString())
      ).join('');

    default:
      console.error('Unknown section name provided to generate anchors');
      break;
  }
}

function generateSectionHeader (md: string, sectionName: string) {
  return `${md}\n___\n${LINK_BACK_TO_TOP}\n\n### <a id='${sectionName}'></a>${sectionName}\n`;
}

function addRpc () {
  const renderHeading = `## ${ANCHOR_TOP}JSON-RPC${DESC_RPC}\n`;
  const orderedSections = Object.keys(interfaces).sort();
  const renderAnchors = Object.keys(interfaces).sort().map((sectionName) =>
    sectionLink(sectionName)
  ).join('');

  return orderedSections.reduce((md, sectionName) => {
    const section = interfaces[sectionName];
    const renderSection = generateSectionHeader(md, sectionName) + `\n_${section.description}_\n`;
    const orderedMethods = Object.keys(section.methods).sort();

    return orderedMethods.reduce((md, methodName) => {
      const method = section.methods[methodName];
      const args = method.params.map(({ name, isOptional, type }) => {
        return name + (isOptional ? '?' : '') + ': `' + type + '`';
      }).join(', ');
      const type = '`' + method.type + '`';
      const isSub = method.isSubscription;
      const renderMethod = `${md}\n▸ **${methodName}**(${args})`;
      const renderReturnType = `: ${type}`;
      const renderSignature = `${renderMethod}${renderReturnType}`;
      const renderSignatureSub = `${renderMethod}**.subscribe**(CALLBACK)${renderReturnType}`;
      const renderSummary = `${method && method.description ? `\n- **summary**: ${method.description}\n` : `\n\n`}`;

      return isSub ? `${renderSignatureSub}${renderSummary}` : `${renderSignature}${renderSummary}`;
    }, renderSection);
  }, renderHeading + renderAnchors);
}

function sortExtrinsicsSectionMethods () {
  return function (a: any, b: any) {
    // ignore upper and lowercase
    const nameA = a.name.toString().toUpperCase();
    const nameB = b.name.toString().toUpperCase();

    return nameA.localeCompare(nameB);
  };
}

function addEvents (metadata: Metadata) {
  const renderHeading = `## ${ANCHOR_TOP}Events${DESC_EVENTS}`;
  const orderedSections = metadata.events.map((i) => i).sort();
  const renderAnchors = generateSectionLinks('events', metadata);

  return orderedSections.reduce((md: string, meta: any) => {
    if (!meta.events || !meta.events.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.name.toString());
    const renderSection = generateSectionHeader(md, sectionName);

    const orderedMethods = meta.events.map((i: any) => i).sort(sortExtrinsicsSectionMethods());

    return orderedMethods.reduce((md: string, func: any) => {
      const methodName = func.name.toString();
      const args = func.arguments.map((type: any) => '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, renderHeading + renderAnchors);
}

function addExtrinsics (metadata: Metadata) {
  const renderHeading = `## ${ANCHOR_TOP}Extrinsics${DESC_EXTRINSICS}`;
  const orderedSections = metadata.modules.map((i) => i).sort();
  const renderAnchors = generateSectionLinks('extrinsics', metadata);

  return orderedSections.reduce((md: string, meta: any) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.prefix.toString());
    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = meta.module.call.functions.map((i: any) => i).sort(sortExtrinsicsSectionMethods());

    return orderedMethods.reduce((md: string, func: any) => {
      const methodName = stringCamelCase(func.name.toString());
      const args = Method.filterOrigin(func).map(({ name, type }) => `${name}: ` + '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, renderHeading + renderAnchors);
}

function addStorage (metadata: Metadata) {
  const renderHeading = `## ${ANCHOR_TOP}Storage${DESC_STORAGE}`;
  const orderedSections = metadata.modules.map((i: any) => i).sort();
  const renderAnchors = generateSectionLinks('storage', metadata);

  return orderedSections.reduce((md: string, moduleMetadata: any) => {
    if (!moduleMetadata.storage) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.storage.prefix.toString());
    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = moduleMetadata.storage.functions.map((i: any) => i).sort();

    return orderedMethods.reduce((md: string, func: any) => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? ('`' + func.type.asMap.key.toString() + '`') : '';
      const doc = func.documentation.reduce((md: string, doc: string) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${arg}): ` + '`' + func.type + '`';
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, renderHeading + renderAnchors);
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

function writeToStorageMd (metadata: Metadata) {
  const optionsRead = { flags: 'r', encoding: 'utf8' };
  fs.readFile('packages/types/src/scripts/METHODS_STORAGE_SUBSTRATE.md', optionsRead, function read (err: Error, data: string) {
    if (err) {
      throw err;
    }

    // 'utf8', 'ascii', 'binary', 'hex', 'base64', or 'utf16le'
    const options = { flags: 'w', encoding: 'utf8' };
    const writeStream = fs.createWriteStream('docs/METHODS_STORAGE.md', options);

    writeStream.write(addStorage(metadata));
    writeStream.write(data);

    // finish emitting event when all data flushed from stream
    writeStream.on('finish', () => {
      console.log('wrote all storage metadata to Gitbook Markdown file');
    });

    writeStream.end();
  });
}

function writeToExtrinsicsMd (metadata: Metadata) {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream('docs/METHODS_EXTRINSICS.md', options);

  writeStream.write(addExtrinsics(metadata));

  writeStream.on('finish', () => {
    console.log('wrote all extrinsics metadata to Gitbook Markdown file');
  });

  writeStream.end();
}

function writeToEventsMd (metadata: Metadata) {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream('docs/METHODS_EVENTS.md', options);

  writeStream.write(addEvents(metadata));

  writeStream.on('finish', () => {
    console.log('wrote all event metadata to Gitbook Markdown file');
  });

  writeStream.end();
}

const metadata = new Metadata(rpcdata);

writeToRpcMd();
writeToStorageMd(metadata);
writeToExtrinsicsMd(metadata);
writeToEventsMd(metadata);
