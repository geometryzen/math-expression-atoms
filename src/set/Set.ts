import { U } from "math-expression-tree";
import { Atom } from "../atom/Atom";

export class Set extends Atom {
    /**
     * @param members
     * @param pos
     * @param end 
     */
    constructor(readonly members: U[], pos?: number, end?: number) {
        super('Set', pos, end);
        if (!Array.isArray(members)) {
            throw new Error("members must be an Array");
        }
    }
    toString(): string {
        // This is only for debugging.
        throw new Error(`{${this.members.map((element) => element.toString()).join(' ')}}`);
        // return `{${this.elements.map((element) => element.toString()).join(' ')}}`;
    }
}

export function is_set(x: unknown): x is Set {
    return x instanceof Set;
}

export function assert_set(expr: U): Set | never {
    if (is_set(expr)) {
        return expr;
    }
    else {
        // Don't need anything fancy here because this is an assertion for dev eyes only.
        throw new Error(`Expecting a Set but got expression ${expr}.`);
    }
}
