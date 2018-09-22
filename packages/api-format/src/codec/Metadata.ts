// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BaseArray from './base/Array';
import BaseStruct from './base/Struct';
import String from './String';

class MetadataEventArguments extends BaseArray {
  constructor () {
    super(String);
  }
}

class MetadataEventDocumentation extends BaseArray {
  constructor () {
    super(String);
  }
}

class MetadataEvent extends BaseStruct {
  constructor () {
    super({
      name: String,
      args: MetadataEventArguments,
      docs: MetadataEventDocumentation
    });
  }
}

class MetadataEvents extends BaseArray {
  constructor () {
    super(MetadataEvent);
  }
}

class MetadataEventsOuter$Events$Event extends BaseStruct {
  constructor () {
    super({
      name: String,
      events: MetadataEvents
    });
  }
}

class MetadataEventsOuter$Events extends BaseArray {
  constructor () {
    super(MetadataEventsOuter$Events$Event);
  }
}

class MetadataEventsOuter extends BaseStruct {
  constructor () {
    super({
      name: String,
      events: MetadataEventsOuter$Events
    });
  }
}

class MetadataModules extends BaseStruct {
  constructor () {
    super({});
  }
}

export default class Metadata extends BaseStruct {
  constructor (value?: any) {
    super({
      outerEvent: MetadataEventsOuter,
      modules: MetadataModules
    }, value);
  }
}
