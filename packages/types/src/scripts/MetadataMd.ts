// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import interfaces from '../../../type-jsonrpc/src';
import Method from '../primitive/Method';
import Metadata from '../Metadata';
import rpcdata from '../Metadata/static';
import MetadataV6 from '../Metadata/v6';

const ANCHOR_TOP = '';
const LINK_BACK_TO_TOP = '';

const DESC_EXTRINSICS = '\n\n_The following sections contain Extrinsics methods are part of the default Substrate runtime._\n';
const DESC_EVENTS = '\n\nEvents are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.\n';
const DESC_RPC = '\n\n_The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself._';
const DESC_STORAGE = '\n\n_The following sections contain Storage methods are part of the default Substrate runtime._\n';

function sectionLink (sectionName: string) {
  return `- **[${stringCamelCase(sectionName)}](#${stringCamelCase(sectionName)})**\n\n`;
}

function generateSectionHeader (md: string, sectionName: string) {
  return `${md}\n___\n${LINK_BACK_TO_TOP}\n\n### ${sectionName}\n`;
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

/**
 * Sort object by their `.name`
 */
function sortByName<T extends { name: any }> (a: T, b: T): number {
  // ignore upper and lowercase
  const nameA = a.name.toString().toUpperCase();
  const nameB = b.name.toString().toUpperCase();

  return nameA.localeCompare(nameB);
}

function addEvents (metadata: MetadataV6) {
  const renderHeading = `## ${ANCHOR_TOP}Events${DESC_EVENTS}`;
  const orderedSections = metadata.modules.sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, meta) => {
    if (meta.events.isNone || !meta.events.unwrap().length) {
      return md;
    }

    const events = meta.events.unwrap();

    const sectionName = stringCamelCase(meta.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);

    const orderedMethods = events.sort(sortByName);

    return orderedMethods.reduce((md, func) => {
      const methodName = func.name.toString();
      const args = func.args.map((type) => '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addExtrinsics (metadata: MetadataV6) {
  const renderHeading = `## ${ANCHOR_TOP}Extrinsics${DESC_EXTRINSICS}`;
  const orderedSections = metadata.modules.map((i) => i).sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, meta) => {
    if (meta.calls.isNone || !meta.calls.unwrap().length) {
      return md;
    }

    const calls = meta.calls.unwrap();

    const sectionName = stringCamelCase(meta.prefix.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = calls.sort(sortByName);

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

function addStorage (metadata: MetadataV6) {
  const renderHeading = `## ${ANCHOR_TOP}Storage${DESC_STORAGE}`;
  const orderedSections = metadata.modules.sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, moduleMetadata) => {
    if (moduleMetadata.storage.isNone) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = moduleMetadata.storage.unwrap().sort(sortByName);

    return orderedMethods.reduce((md, func) => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? ('`' + func.type.asMap.key.toString() + '`') : '';
      const doc = func.documentation.reduce((md, doc) => `${md} ${doc}`, '');
      const type = func.modifier.isOptional
        ? `Option<${func.type}>`
        : func.type;
      const renderSignature = `${md}\n▸ **${methodName}**(${arg}): ` + '`' + type + '`';
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

function writeToStorageMd (metadata: MetadataV6) {
  const options = { flags: 'r', encoding: 'utf8' };
  const data = fs.readFileSync('packages/types/src/scripts/METHODS_STORAGE_SUBSTRATE.md', options);

  writeFile('docs/METHODS_STORAGE.md', addStorage(metadata), data);
}

function writeToExtrinsicsMd (metadata: MetadataV6) {
  writeFile('docs/METHODS_EXTRINSICS.md', addExtrinsics(metadata));
}

function writeToEventsMd (metadata: MetadataV6) {
  writeFile('docs/METHODS_EVENTS.md', addEvents(metadata));
}

const metadata = new Metadata(rpcdata).asV6;

writeToRpcMd();
writeToStorageMd(metadata);
writeToExtrinsicsMd(metadata);
writeToEventsMd(metadata);
