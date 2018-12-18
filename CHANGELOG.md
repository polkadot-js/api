# 0.34.1

- Changed the send signature (for future expansion of eg. events) to return `result: { status: ExtrinsicStatus }` instead of `status: ExtrinsicStatus`. For most cases where only status `toString` checks are used, i.e. `status.toString() === 'Finalised'` this should not be a breaking change. Deep inspection of the status object however will need to adapt.
