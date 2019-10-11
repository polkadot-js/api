// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../injector';

import fs from 'fs';
import Metadata from '@polkadot/api-metadata';
import rpcdata from '@polkadot/api-metadata/Metadata/static';
import MetadataV8, { ModuleMetadataV8 } from '@polkadot/api-metadata/Metadata/v8';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import interfaces from '../../../type-jsonrpc/src';
import Call from '../primitive/Generic/Call';

const ANCHOR_TOP = '';
const LINK_BACK_TO_TOP = '';

const STATIC_TEXT = '\n\n(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)';

const DESC_CONSTANTS = `\n\nThe following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via \`api.consts.<module>.<method>\`. ${STATIC_TEXT}\n`;
const DESC_EXTRINSICS = `\n\nThe following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via \`api.tx.<module>.<method>\`. ${STATIC_TEXT}\n`;
const DESC_EVENTS = `\n\nEvents are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. ${STATIC_TEXT}\n`;
const DESC_RPC = '\n\nThe following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.\n';
const DESC_STORAGE = `\n\nThe following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via \`api.query.<module>.<method>\`. ${STATIC_TEXT}\n`;

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
      const renderSummary = `${method && method.description ? `\n- **summary**: ${method.description}\n` : '\n\n'}`;

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

function addConstants (metadata: MetadataV8): string {
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
      const methodName = stringCamelCase(func.name.toString());
      const doc = func.documentation
        .reduce((md, doc): string => `${md.length ? `${md} ` : ''}${doc.trim()}`, '');
      const type = func.type;
      const renderSignature = `${md}\n▸ **${methodName}**: ` + '`' + type + '`';
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addEvents (metadata: MetadataV8): string {
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
      const doc = func.documentation
        .reduce((md, doc): string => `${md.length ? `${md} ` : ''}${doc.trim()}`, '');

      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addExtrinsics (metadata: MetadataV8): string {
  const renderHeading = `## ${ANCHOR_TOP}Extrinsics${DESC_EXTRINSICS}`;
  const orderedSections = metadata.modules.map((i): ModuleMetadataV8 => i).sort(sortByName);
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
      const args = Call.filterOrigin(func).map(({ name, type }): string => `${name}: ` + '`' + type + '`').join(', ');
      const doc = func.documentation
        .reduce((md, doc): string => `${md.length ? `${md} ` : ''}${doc.trim()}`, '');
      const renderSignature = `${md}\n▸ **${methodName}**(${args})`;
      const renderSummary = `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;

      return renderSignature + renderSummary;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

function addStorage (metadata: MetadataV8): string {
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
    const orderedMethods = moduleMetadata.storage.unwrap().items.sort(sortByName);

    return orderedMethods.reduce((md, func): string => {
      const arg =
        func.type.isMap
          ? ('`' + func.type.asMap.key.toString() + '`')
          : func.type.isDoubleMap
            ? ('`' + func.type.asDoubleMap.key1.toString() + ', ' + func.type.asDoubleMap.key2.toString() + '`')
            : '';
      const doc = func.documentation
        .reduce((md, doc): string => `${md.length ? `${md} ` : ''}${doc.trim()}`, '');
      let result = (
        func.type.isDoubleMap
          ? func.type.asDoubleMap.value
          : func.type
      ).toString();

      if (func.modifier.isOptional) {
        result = `Option<${result}>`;
      }

      return `${md}\n▸ **${stringLowerFirst(func.name.toString())}**(${arg}): ` + '`' + result + '`' + `${doc ? `\n- **summary**: ${doc}\n` : '\n'}`;
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
  writeFile('docs/substrate/rpc.md', addRpc());
}

function writeToConstantsMd (metadata: MetadataV8): void {
  writeFile('docs/substrate/constants.md', addConstants(metadata));
}

function writeToStorageMd (metadata: MetadataV8): void {
  const options = { flags: 'r', encoding: 'utf8' };
  const data = fs.readFileSync('docs/substrate/storage-known.md', options);

  writeFile('docs/substrate/storage.md', addStorage(metadata), data);
}

function writeToExtrinsicsMd (metadata: MetadataV8): void {
  writeFile('docs/substrate/extrinsics.md', addExtrinsics(metadata));
}

function writeToEventsMd (metadata: MetadataV8): void {
  writeFile('docs/substrate/events.md', addEvents(metadata));
}

const metadata = new Metadata(rpcdata).metadata.asLatest;

writeToRpcMd();
writeToConstantsMd(metadata);
writeToStorageMd(metadata);
writeToExtrinsicsMd(metadata);
writeToEventsMd(metadata);
