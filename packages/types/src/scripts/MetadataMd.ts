// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import interfaces from '../../../type-jsonrpc/src';
import Method from '../primitive/Method';
import Metadata from '../Metadata';
import rpcdata from '../Metadata/static';
import MetadataV0 from '../Metadata/v0';

const ANCHOR_TOP = `<a id='top' style='text-decoration: none;'>`;
const LINK_BACK_TO_TOP = `<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>`;

const DESC_EXTRINSICS = '\n\n_The following sections contain Extrinsics methods are part of the default Substrate runtime._\n';
const DESC_EVENTS = '\n\nEvents are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.\n';
const DESC_RPC = '\n\n_The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself._';
const DESC_STORAGE = '\n\n_The following sections contain Storage methods are part of the default Substrate runtime._\n';

function sectionLink (sectionName: string) {
  return `- **[${stringCamelCase(sectionName)}](#${stringCamelCase(sectionName)})**\n\n`;
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
      // const isSub = method.isSubscription;
      const renderMethod = `${md}\n▸ **${methodName}**(${args})`;
      const renderReturnType = `: ${type}`;
      const renderSignature = `${renderMethod}${renderReturnType}`;
      const renderSummary = `${method && method.description ? `\n- **summary**: ${method.description}\n` : `\n\n`}`;

      return `${renderSignature}${renderSummary}`;
    }, renderSection);
  }, renderHeading + renderAnchors);
}

function sortExtrinsicsSectionMethods (a: any, b: any) {
  // ignore upper and lowercase
  const nameA = a.name.toString().toUpperCase();
  const nameB = b.name.toString().toUpperCase();

  return nameA.localeCompare(nameB);
}

function addEvents (metadata: MetadataV0) {
  const renderHeading = `## ${ANCHOR_TOP}Events${DESC_EVENTS}`;
  const orderedSections = metadata.events.map((i) => i).sort();
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, meta) => {
    if (!meta.events || !meta.events.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);

    const orderedMethods = meta.events.sort(sortExtrinsicsSectionMethods);

    return orderedMethods.reduce((md, func) => {
      const methodName = func.name.toString();
      const args = func.arguments.map((type) => '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addExtrinsics (metadata: MetadataV0) {
  const renderHeading = `## ${ANCHOR_TOP}Extrinsics${DESC_EXTRINSICS}`;
  const orderedSections = metadata.modules.map((i) => i).sort();
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, meta) => {
    if (!meta.module.call || !meta.module.call.functions.length) {
      return md;
    }

    const sectionName = stringCamelCase(meta.prefix.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = meta.module.call.functions.sort(sortExtrinsicsSectionMethods);

    return orderedMethods.reduce((md, func) => {
      const methodName = stringCamelCase(func.name.toString());
      const args = Method.filterOrigin(func).map(({ name, type }) => `${name}: ` + '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addStorage (metadata: MetadataV0) {
  const renderHeading = `## ${ANCHOR_TOP}Storage${DESC_STORAGE}`;
  const orderedSections = metadata.modules.sort();
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.storage.unwrap().prefix.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = moduleMetadata.storage.unwrap().functions.sort();

    return orderedMethods.reduce((md, func) => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? ('`' + func.type.asMap.key.toString() + '`') : '';
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${arg}): ` + '`' + func.type + '`';
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sectionLink('substrate') + sections;
}

function writeFile (name: string, ...chunks: Array<any>) {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream(name, options);

  writeStream.on('finish', () => {
    console.log(`Completed writing ${name}`);
  });

  chunks.forEach((chunk) =>
    writeStream.write(chunk)
  );

  writeStream.end();
}

function writeToRpcMd () {
  writeFile('docs/METHODS_RPC.md', addRpc());
}

function writeToStorageMd (metadata: MetadataV0) {
  const options = { flags: 'r', encoding: 'utf8' };
  const data = fs.readFileSync('packages/types/src/scripts/METHODS_STORAGE_SUBSTRATE.md', options);

  writeFile('docs/METHODS_STORAGE.md', addStorage(metadata), data);
}

function writeToExtrinsicsMd (metadata: MetadataV0) {
  writeFile('docs/METHODS_EXTRINSICS.md', addExtrinsics(metadata));
}

function writeToEventsMd (metadata: MetadataV0) {
  writeFile('docs/METHODS_EVENTS.md', addEvents(metadata));
}

const metadata = new Metadata(rpcdata).asV0;

writeToRpcMd();
writeToStorageMd(metadata);
writeToExtrinsicsMd(metadata);
writeToEventsMd(metadata);
