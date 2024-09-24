// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ITuple, Registry } from "@polkadot/types-codec/types";
import type { Extension, ExtensionVersion, ExtrinsicSignatureV4, ExtrinsicVersion, MultiAddress, Preamble } from "@polkadot/types/interfaces";

export class GenericPreamble implements Preamble {
    #preambleType: 'Bare' | 'Signed' | 'General';
    #asBare?: ExtrinsicVersion;
    #asGeneral?: ITuple<[ExtensionVersion, Extension]>;
    #asSigned?: ITuple<[MultiAddress, ExtrinsicSignatureV4, ExtensionVersion, Extension, ExtrinsicVersion]>;

    constructor(registry: Registry, type: 'Bare' | 'Signed' | 'General', data: any) {
        this.#preambleType = type;

        if (type === 'Bare') {
            this.#asBare = registry.createTypeUnsafe<ExtrinsicVersion>('u8', data);
        } else if (type === 'Signed') {
            this.#asSigned = registry.createTypeUnsafe<ITuple<[MultiAddress, ExtrinsicSignatureV4, ExtensionVersion, Extension, ExtrinsicVersion]>>('(MultiAddress, ExtrinsicSignatureV4, ExtensionVersion, Extension, ExtrinsicVersion)', data);
        } else {
            this.#asGeneral = registry.createTypeUnsafe<ITuple<[ExtensionVersion, Extension]>>('(ExtensionVersion, Extension)', data)
        }
    }

    get isBare(): boolean {
        return this.#preambleType === 'Bare';
    }

    get asBare(): ExtrinsicVersion {
        if (!this.isBare) {
            throw new Error("Not a Bare type");
        }
        return this.#asBare!;
    }

    get isSigned(): boolean {
        return this.#preambleType === 'Signed';
    }

    get asSigned(): ITuple<[MultiAddress, ExtrinsicSignatureV4, ExtensionVersion, Extension, ExtrinsicVersion]> {
        if (!this.isSigned) {
            throw new Error("Not a Signed type");
        }
        return this.#asSigned!;
    }

    get isGeneral(): boolean {
        return this.#preambleType === 'General';
    }

    get asGeneral(): ITuple<[ExtensionVersion, Extension]> {
        if (!this.isGeneral) {
            throw new Error("Not a General type");
        }
        return this.#asGeneral!;
    }

    get type(): 'Bare' | 'Signed' | 'General' {
        return this.#preambleType;
    }


}