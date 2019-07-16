// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import interfaces from '../../../type-jsonrpc/src';
import Method from '../primitive/Method';
import Metadata from '../Metadata';
import rpcdata from '../Metadata/static';
import MetadataV6, { ModuleMetadataV6 } from '../Metadata/v6';

const ANCHOR_TOP = '';
const LINK_BACK_TO_TOP = '';

const DESC_CONSTANTS = '\n\n_The following sections contain the module constants, also known as parameter types.\n';
const DESC_EXTRINSICS = '\n\n_The following sections contain Extrinsics methods are part of the default Substrate runtime._\n';
const DESC_EVENTS = '\n\nEvents are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.\n';
const DESC_RPC = '\n\n_The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself._';
const DESC_STORAGE = '\n\n_The following sections contain Storage methods are part of the default Substrate runtime._\n';

function sectionLink (sectionName: string): string {
  return `- **[${stringCamelCase(sectionName)}](#${stringCamelCase(sectionName)})**\n\n`;
}

function generateSectionHeader (md: string, sectionName: string): string {
  return `${md}\n___\n${LINK_BACK_TO_TOP}\n\n### ${sectionName}\n`;
}

function addRpc (): string {
  const renderHeading = `## ${ANCHOR_TOP}JSON-RPC${DESC_RPC}\n`;
  const orderedSections = Object.keys(interfaces).sort();
  const renderAnchors = Object.keys(interfaces).sort().map((sectionName): string =>
    sectionLink(sectionName)
  ).join('');

  return orderedSections.reduce((md, sectionName): string => {
    const section = interfaces[sectionName];
    const renderSection = generateSectionHeader(md, sectionName) + `\n_${section.description}_\n`;
    const orderedMethods = Object.keys(section.methods).sort();

    return orderedMethods.reduce((md, methodName): string => {
      const method = section.methods[methodName];
      const args = method.params.map(({ name, isOptional, type }): string => {
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

function addConstants (metadata: MetadataV6): string {
  const renderHeading = `## ${ANCHOR_TOP}Constants${DESC_CONSTANTS}`;
  const orderedSections = metadata.modules.sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, moduleMetadata): string => {
    if (moduleMetadata.constants.isEmpty) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedConstants = moduleMetadata.constants.sort(sortByName);

    return orderedConstants.reduce((md, func): string => {
      const methodName = stringLowerFirst(func.name.toString());
      const doc = func.documentation.reduce((md, doc): string => `${md} ${doc}`, '');
      const type = func.type;
      const renderSignature = `${md}\n▸ **${methodName}**: ` + '`' + type + '`';
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addEvents (metadata: MetadataV6): string {
  const renderHeading = `## ${ANCHOR_TOP}Events${DESC_EVENTS}`;
  const orderedSections = metadata.modules.sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, meta): string => {
    if (meta.events.isNone || !meta.events.unwrap().length) {
      return md;
    }

    const events = meta.events.unwrap();
    const sectionName = stringCamelCase(meta.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = events.sort(sortByName);

    return orderedMethods.reduce((md, func): string => {
      const methodName = func.name.toString();
      const args = func.args.map((type): string => '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md, doc): string => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addExtrinsics (metadata: MetadataV6): string {
  const renderHeading = `## ${ANCHOR_TOP}Extrinsics${DESC_EXTRINSICS}`;
  const orderedSections = metadata.modules.map((i): ModuleMetadataV6 => i).sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, meta): string => {
    if (meta.calls.isNone || !meta.calls.unwrap().length) {
      return md;
    }

    const calls = meta.calls.unwrap();
    const sectionName = stringCamelCase(meta.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = calls.sort(sortByName);

    return orderedMethods.reduce((md, func): string => {
      const methodName = stringCamelCase(func.name.toString());
      const args = Method.filterOrigin(func).map(({ name, type }): string => `${name}: ` + '`' + type + '`').join(', ');
      const doc = func.documentation.reduce((md, doc): string => `${md} ${doc}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addStorage (metadata: MetadataV6): string {
  const renderHeading = `## ${ANCHOR_TOP}Storage${DESC_STORAGE}`;
  const orderedSections = metadata.modules.sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, moduleMetadata): string => {
    if (moduleMetadata.storage.isNone) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedMethods = moduleMetadata.storage.unwrap().sort(sortByName);

    return orderedMethods.reduce((md, func): string => {
      const methodName = stringLowerFirst(func.name.toString());
      const arg = func.type.isMap ? ('`' + func.type.asMap.key.toString() + '`') : '';
      const doc = func.documentation.reduce((md, doc): string => `${md} ${doc}`, '');
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

function writeFile (name: string, ...chunks: any[]): void {
  const options = { flags: 'w', encoding: 'utf8' };
  const writeStream = fs.createWriteStream(name, options);

  writeStream.on('finish', (): void => {
    console.log(`Completed writing ${name}`);
  });

  chunks.forEach((chunk): void => {
    writeStream.write(chunk);
  });

  writeStream.end();
}

function writeToRpcMd (): void {
  writeFile('docs/METHODS_RPC.md', addRpc());
}

function writeToConstantsMd (metadata: MetadataV6): void {
  writeFile('docs/METHODS_CONSTANTS.md', addConstants(metadata));
}

function writeToStorageMd (metadata: MetadataV6): void {
  const options = { flags: 'r', encoding: 'utf8' };
  const data = fs.readFileSync('packages/types/src/scripts/METHODS_STORAGE_SUBSTRATE.md', options);

  writeFile('docs/METHODS_STORAGE.md', addStorage(metadata), data);
}

function writeToExtrinsicsMd (metadata: MetadataV6): void {
  writeFile('docs/METHODS_EXTRINSICS.md', addExtrinsics(metadata));
}

function writeToEventsMd (metadata: MetadataV6): void {
  writeFile('docs/METHODS_EVENTS.md', addEvents(metadata));
}

const metadata = new Metadata(rpcdata).asV6;

writeToRpcMd();
writeToConstantsMd(metadata);
writeToStorageMd(metadata);
writeToExtrinsicsMd(metadata);
writeToEventsMd(metadata);
