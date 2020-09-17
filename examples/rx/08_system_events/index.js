/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API and selected RxJs operators
const { switchMap } = require('rxjs/operators');
const { ApiRx } = require('@polkadot/api');

async function main () {
  // Create our API with a default connection to the local node
  ApiRx.create()
    .pipe(
      switchMap((api) =>
        // subscribe to system events via storage
        api.query.system.events()
      )
    )
    // Then we're subscribing to the emitted results
    .subscribe((events) => {
      console.log(`\nReceived ${events.length} events:`);
      // loop through the Vec<EventRecord>
      events.forEach((record) => {
      // extract the phase, event and the event types
        const { event, phase } = record;
        const types = event.typeDef;

        // show what we are busy with
        console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
        console.log(`\t\t${event.meta.documentation.toString()}`);

        // loop through each of the parameters, displaying the type and data
        event.data.forEach((data, index) => {
          console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
        });
      });
    });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
