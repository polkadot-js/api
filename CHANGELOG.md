# 0.34.1

- Changed the send signature (for future expansion of eg. events) to return `result: { status: ExtrinsicStatus }` instead of `status: ExtrinsicStatus`. For most cses using just the `toString` checks, i.e. `status.toString() === 'Finalised'` this should not be a breaking change. Deep inspection of the status object however will need to adapt.
