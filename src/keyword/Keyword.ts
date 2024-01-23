import { U } from "math-expression-tree";
import { Atom } from "../atom/Atom";

export class Keyword extends Atom {
    constructor(readonly localName: string, readonly namespace: string, pos?: number, end?: number) {
        super("Keyword", pos, end);
    }
    key(): string {
        if (this.namespace.length > 0) {
            return `:${this.namespace}/${this.localName}`;
        }
        else {
            return `:${this.localName}`;
        }
    }
    toString(): string {
        return `Keyword(${JSON.stringify(this.localName)},${JSON.stringify(this.namespace)})`;
    }
}

export function is_keyword(x: unknown): x is Keyword {
    return x instanceof Keyword;
}

export function assert_keyword(expr: U): Keyword | never {
    if (is_keyword(expr)) {
        return expr;
    }
    else {
        // Don't need anything fancy here because this is an assertion for dev eyes only.
        throw new Error(`Expecting a Keyword but got expression ${expr}.`);
    }
}
