const { combineLatest } = require('rxjs');
const { concatMap, concatMapTo, finalize, tap } = require('rxjs/operators');
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Initialise the provider to connect to the local node
const wsProvider = new WsProvider('ws://127.0.0.1:9944');

// Known account to use (available on dev chain with funds)
// FIXME: How are we associating Alice's account with funding the
// proposal and referendum creation
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  const api = await ApiRx.create(wsProvider);

  const proposedNewRuntimeCode = new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef]);
  const voteYay = true;

  // Create API. Wait until ready. Subscribe to API changes. Pass optional provider.
  api
    .pipe(
      // `concatMap` subscribes to observables in order
      concatMap((api) =>
        combineLatest([
          // Query the Current Runtime Code stored on-chain
          // Use the Storage chain state (runtime) Node Interface.
          api.query.substrate.code(),
          // Retrieve Alice's Free Balance to check for sufficient balance to
          // start a Referendum and obtain enough votes for obtain approval
          // to change the runtime code.
          api.query.balances.freeBalance(Alice),
          // Query the Minimum Deposit required to start a Public Referendum
          api.query.democracy.minimumDeposit(),
          // Query the Voting Period (frequency in blocks that it checks for new votes)
          api.query.democracy.votingPeriod(),
          // Query Launch Period (frequency in blocks that new Proposed Public Referenda are launched active)
          api.query.democracy.launchPeriod(),
          // Submit a Public Proposal to change the Runtime Code.
          // See comments in promise/09_change_runtime_code for details
          // FIXME: Error api.tx.consensus.setCode(...).pipe is not a function
          api.tx.consensus.setCode(proposedNewRuntimeCode)
            .pipe(
              // `concatMapTo` waits for setCode to complete before next
              concatMapTo((proposalToSetCode) => {
                api.tx.democracy.propose(proposalToSetCode, 100000)
                  .pipe(
                    tap(proposalSubmitted => console.log(`Proposal Submitted: ${proposalSubmitted}`)),
                    concatMapTo((proposalSubmitted) => {
                      // Query the current list of Public Proposals
                      api.query.democracy.publicProps()
                        .pipe(
                          tap(publicProposals => console.log(`Public Proposals: ${publicProposals}`)),
                          concatMapTo((publicProposals) => {
                            // Start a Public Referendum with a vote threshold of 'Super majority approval' (index of 0)
                            // FIXME: How do we provide the minimum funding to start a public referendum?
                            api.tx.democracy.startReferendum(proposalSubmitted, 0)
                              .pipe(
                                tap(referendumPublicId => console.log(`Public Referendum ID Submitted: ${referendumPublicId}`)),
                                concatMapTo((referendumPublicId) => {
                                  // Query the current amount of public referendums
                                  api.query.chain.referendumCount()
                                    .pipe(
                                      tap(referendumCount => console.log(`Public Referendum Count: ${referendumCount}`)),
                                      concatMapTo((referendumCount) => {
                                        // Query information about the specific Public Referendum ID we created including its block number
                                        api.query.democracy.referendumInfoOf(referendumPublicId)
                                          .pipe(
                                            tap(referendumInfo => console.log(`Information about Referendum ID ${referendumPublicId}: `, referendumInfo)),
                                            concatMapTo((referendumInfo) => {
                                              // Vote on a Referendum ID in the Proposed Public Referenda (before Voting Period expires)
                                              api.tx.democracy.vote(referendumPublicId, voteYay)
                                                .pipe(
                                                  tap(voted => console.log(`Voted for Proposed Public Referendum ID ${referendumPublicId} with ${voteYay ? 'yay' : 'nay'} vote`)),
                                                  concatMapTo((voted) => {
                                                    // Wait unit the referendum becomes an Active Referendum
                                                    api.query.democracy.isActiveReferendum(referendumPublicId)
                                                      .pipe(
                                                        tap(isActiveReferendum => console.log(`Detected Referendum ID ${referendumPublicId} to be Active/Launched: `, isActiveReferendum)),
                                                        concatMapTo((isActiveReferendum) => {
                                                          // Query the list of Active Referendums (Launched Referenda on the Table of Referenda)
                                                          api.query.democracy.activeReferendums()
                                                            .pipe(
                                                              tap(activeReferendums => console.log(`Active Referendums: `, activeReferendums)),
                                                              concatMapTo((activeReferendums) => {
                                                                // Vote on the Referendum ID in the Active Referenda (before Launch Period expires)
                                                                api.tx.democracy.vote(referendumPublicId, voteYay)
                                                                  .pipe(
                                                                    tap(votedActiveReferendumHash => console.log(`Voted for Active Referendum ID ${referendumPublicId} with ${voteYay ? 'yay' : 'nay'} vote`))
                                                                    // View Substrate Node logs until it says 'Super majority approval' as confirmation that
                                                                    // change to runtime code was successfully approved and deployed
                                                                  );
                                                              })
                                                            );
                                                        })
                                                      );
                                                  })
                                                );
                                            })
                                          );
                                      })
                                    );
                                })
                              );
                          })
                        );
                    }),
                    finalize(() => console.log('Sequence complete'))
                  );
              })
            )
        ])
      )
    )
    // Subscribe
    .subscribe(([
      currentRuntimeCode,
      aliceFreeBalance,
      minimumReferendumDeposit,
      publicReferendumVotingPeriod,
      activeReferendumLaunchPeriod
    ]) => {
      console.log('Current runtime code: ', currentRuntimeCode.toHex()); // Ox
      console.log(`Balance available for Alice: ${aliceFreeBalance}`);
      console.log('Minimum deposit required to start a referendum: ',
        minimumReferendumDeposit.toNumber());
      console.log(`Voting period for public referendums: `, publicReferendumVotingPeriod);
      console.log(`Launch period for active referendums: `, activeReferendumLaunchPeriod);
      if (currentRuntimeCode === proposedNewRuntimeCode) {
        console.log('New runtime code was successfully approved and deployed');
      }
    });
}

main().catch(console.error);
