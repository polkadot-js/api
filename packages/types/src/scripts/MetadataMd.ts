// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataLatest, ModuleMetadataLatest } from '../interfaces/metadata';

import fs from 'fs';
import Decorated from '@polkadot/metadata/Decorated';
import rpcdata from '@polkadot/metadata/Metadata/static';
import { stringCamelCase, stringLowerFirst } from '@polkadot/util';

import interfaces from '../../../type-jsonrpc/src';
import { unwrapStorageType } from '../primitive/StorageKey';
import Call from '../primitive/Generic/Call';
import { TypeRegistry, Vec } from '../codec';
import { Text } from '../primitive';

const ANCHOR_TOP = '';
const LINK_BACK_TO_TOP = '';

const STATIC_TEXT = '\n\n(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)';

const DESC_CONSTANTS = `\n\nThe following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via \`api.consts.<module>.<method>\`. ${STATIC_TEXT}\n`;
const DESC_EXTRINSICS = `\n\nThe following sections contain Extrinsics methods are part of the default Substrate runtime. On the api, these are exposed via \`api.tx.<module>.<method>\`. ${STATIC_TEXT}\n`;
const DESC_ERRORS = `\n\nThis page lists the errors that can be encountered in the different modules. ${STATIC_TEXT}\n`;
const DESC_EVENTS = `\n\nEvents are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime. ${STATIC_TEXT}\n`;
const DESC_RPC = '\n\nThe following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.\n';
const DESC_STORAGE = `\n\nThe following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via \`api.query.<module>.<method>\`. ${STATIC_TEXT}\n`;

/** @internal */
function sectionLink (sectionName: string): string {
  return `- **[${stringCamelCase(sectionName)}](#${stringCamelCase(sectionName).toLowerCase()})**\n\n`;
}

/** @internal */
function generateSectionHeader (md: string, sectionName: string): string {
  return `${md}\n___\n${LINK_BACK_TO_TOP}\n\n## ${sectionName}\n`;
}

/** @internal */
function documentationVecToMarkdown (docLines: Vec<Text>, indent = 0): string {
  const md = docLines
    .map(docLine => docLine && docLine.substring(1)) // trim the leading space
    .reduce((md, docLine): string => // generate paragraphs
      !docLine.trim().length ? `${md}\n\n` // empty line
        : /^[*-]/.test(docLine.trimStart()) && !md.endsWith('\n\n') ? `${md}\n\n${docLine}` // line calling for a preceding linebreak
          : `${md}${docLine // line continuing the preceding line
            .replace(/^# <weight>$/g, '\\# \\<weight>\n\n')
            .replace(/^# <\/weight>$/g, '\n\n\\# \\</weight>')
            .replace(/^#{1,3} /, '#### ')} `
    , '');
  // prefix each line with indentation
  return md && md.split('\n\n').map(line => `${' '.repeat(indent)}${line}`).join('\n\n');
}

/** @internal */
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

      return `${md}\n### ${methodName}(${args}): ${type}\n- **jsonrpc**: ${sectionName}_${methodName}\n- **interface**: api.rpc.${sectionName}.${methodName}` + (method.description ? `\n- **summary**: ${method.description}\n` : '\n\n');
    }, renderSection);
  }, renderHeading + renderAnchors);
}

/**
 * Sort object by their `.name`
 */
/** @internal */
function sortByName<T extends { name: any }> (a: T, b: T): number {
  // ignore upper and lowercase
  const nameA = a.name.toString().toUpperCase();
  const nameB = b.name.toString().toUpperCase();

  return nameA.localeCompare(nameB);
}

/** @internal */
function addConstants (metadata: MetadataLatest): string {
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
      const doc = documentationVecToMarkdown(func.documentation, 2);

      return `${md}\n### ${methodName}: ` + '`' + func.type + '`' + `\n- **interface**: api.consts.${sectionName}.${methodName}` + (doc ? `\n- **summary**: ${doc.includes('\n\n') ? `\n\n${doc}` : doc}\n` : '\n');
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

/** @internal */
function addErrors (metadata: MetadataLatest): string {
  const renderHeading = `## ${ANCHOR_TOP}Errors${DESC_ERRORS}`;
  const orderedSections = metadata.modules.sort(sortByName);
  let renderAnchors = '';
  const sections = orderedSections.reduce((md, moduleMetadata): string => {
    if (moduleMetadata.errors.isEmpty) {
      return md;
    }

    const sectionName = stringLowerFirst(moduleMetadata.name.toString());

    renderAnchors += sectionLink(sectionName);

    const renderSection = generateSectionHeader(md, sectionName);
    const orderedErrors = moduleMetadata.errors.sort(sortByName);

    return orderedErrors.reduce((md, error): string => {
      const errorName = error.name.toString();
      const doc = documentationVecToMarkdown(error.documentation, 2);

      return `${md}\n### ${errorName}` + `${doc ? `\n- **summary**: ${doc.includes('\n\n') ? `\n\n${doc}` : doc}\n` : '\n'}`;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sectionLink('substrate') + sections;
}

/** @internal */
function addEvents (metadata: MetadataLatest): string {
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
      const doc = documentationVecToMarkdown(func.documentation, 2);

      return `${md}\n### ${methodName}(${args})` + `${doc ? `\n- **summary**: ${doc.includes('\n\n') ? `\n\n${doc}` : doc}\n` : '\n'}`;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

/** @internal */
function addExtrinsics (metadata: MetadataLatest): string {
  const renderHeading = `## ${ANCHOR_TOP}Extrinsics${DESC_EXTRINSICS}`;
  const orderedSections = metadata.modules.map((i): ModuleMetadataLatest => i).sort(sortByName);
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
      const doc = documentationVecToMarkdown(func.documentation, 2);

      return `${md}\n### ${methodName}(${args})` + `\n- **interface**: api.tx.${sectionName}.${methodName}` + `${doc ? `\n- **summary**:\n\n${doc}\n` : '\n'}`;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sections;
}

/** @internal */
function addStorage (metadata: MetadataLatest): string {
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
      const doc = documentationVecToMarkdown(func.documentation, 2);

      let result = unwrapStorageType(func.type);

      if (func.modifier.isOptional) {
        result = `Option<${result}>`;
      }

      const methodName = stringLowerFirst(func.name.toString());

      return `${md}\n### ${methodName}(${arg}): ` + '`' + result + '`' + `\n- **interface**: api.query.${sectionName}.${methodName}` + `${doc ? `\n- **summary**: ${doc.includes('\n\n') ? `\n\n${doc}` : doc}\n` : '\n'}`;
    }, renderSection);
  }, '');

  return renderHeading + renderAnchors + sectionLink('substrate') + sections;
}

/** @internal */
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

/** @internal */
function writeToRpcMd (): void {
  writeFile('docs/substrate/rpc.md', addRpc());
}

/** @internal */
function writeToConstantsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/constants.md', addConstants(metadata));
}

/** @internal */
function writeToStorageMd (metadata: MetadataLatest): void {
  const options = { flags: 'r', encoding: 'utf8' };
  const data = fs.readFileSync('docs/substrate/storage-known.md', options);

  writeFile('docs/substrate/storage.md', addStorage(metadata), data);
}

/** @internal */
function writeToExtrinsicsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/extrinsics.md', addExtrinsics(metadata));
}

/** @internal */
function writeToEventsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/events.md', addEvents(metadata));
}

/** @internal */
function writeToErrorsMd (metadata: MetadataLatest): void {
  writeFile('docs/substrate/errors.md', addErrors(metadata));
}

const registry = new TypeRegistry();
const decorated = new Decorated(registry, rpcdata);
const latest = decorated.metadata.asLatest;

writeToRpcMd();
writeToConstantsMd(latest);
writeToStorageMd(latest);
writeToExtrinsicsMd(latest);
writeToEventsMd(latest);
writeToErrorsMd(latest);
