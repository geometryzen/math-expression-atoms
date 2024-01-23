import { U } from "math-expression-tree";
import { Atom } from "../atom/Atom";

export class Map extends Atom {
    /**
     * @param entries
     * @param pos
     * @param end 
     */
    constructor(readonly entries: [key: U, value: U][], pos?: number, end?: number) {
        super('Map', pos, end);
    }
    toString(): string {
        function entryToString(entry: [key: U, value: U]): string {
            return `[${entry.map(part => part.toString()).join(' ')}]`;
        }
        return `Map([${this.entries.map(entry => entryToString(entry)).join(', ')}])`;
    }
}

export function is_map(x: unknown): x is Map {
    return x instanceof Map;
}

export function assert_map(expr: U): Map | never {
    if (is_map(expr)) {
        return expr;
    }
    else {
        // Don't need anything fancy here because this is an assertion for dev eyes only.
        throw new Error(`Expecting a Map but got expression ${expr}.`);
    }
}
