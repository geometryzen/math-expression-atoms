import { U } from "math-expression-tree";
import { Atom } from "../atom/Atom";

function strcmp(str1: string, str2: string): 0 | 1 | -1 {
    if (str1 === str2) {
        return 0;
    }
    else if (str1 > str2) {
        return 1;
    }
    else {
        return -1;
    }
}

/**
 * A map of printname to symbol.
 */
// const cache: Map<string, Sym> = new Map();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NOOP = (expr: U) => {
    return;
};

export function create_sym(printname: string, pos?: number, end?: number): Sym {
    /*
    const cached: Sym = cache.get(printname);
    if (cached) {
        if (typeof pos === 'number' && typeof end === 'number') {
            cached.pos = pos;
            cached.end = end;
        }
        return cached;
    }
    */
    const sym = new Sym(printname, NOOP, pos, end);
    // cache.set(printname, sym);
    return sym;
}

export class Sym extends Atom {
    readonly #text: string;
    func: (expr: U, $: unknown) => void;
    /**
     * Use create_sym to create a new Sym instance.
     */
    constructor(text: string, func: (expr: U, $: unknown) => void, pos?: number, end?: number) {
        super('Sym', pos, end);
        this.#text = text;
        this.func = func;
    }
    compare(other: Sym): 1 | -1 | 0 {
        // console.lg("compare", "this", this.ln, "other", other.ln);
        return strcmp(this.#text, other.#text);
    }
    contains(needle: U): boolean {
        if (needle instanceof Sym) {
            return this.equalsSym(needle);
        }
        return false;
    }
    /**
     * Creates a new symbol with exactly the same local name and namespace as this symbol.
     * However it allows scanning information to be carried along with the new instance.
     * @param pos The start position of the symbol in the source text.
     * @param end The end position of the symbol in the source text.
     */
    clone(pos: number | undefined, end: number | undefined): Sym {
        return create_sym(this.#text, pos, end);
    }
    override equals(other: U): boolean {
        if (other instanceof Sym) {
            return this.equalsSym(other);
        }
        return false;
    }
    equalsSym(other: Sym): boolean {
        if (this === other) {
            return true;
        }
        else {
            return this.#text === other.#text;
        }
    }
    key(): string {
        return this.#text;
    }
    get printname(): string {
        return this.#text;
    }
    get text(): string {
        return this.#text;
    }
    override toString(): string {
        return this.#text;
    }
}

export function is_sym(expr: U): expr is Sym {
    return expr instanceof Sym;
}

export function assert_sym(expr: U): Sym {
    if (is_sym(expr)) {
        return expr;
    }
    else {
        // Don't need anything fancy here because this is an assertion for dev eyes only.
        throw new Error(`Expecting a Sym but got expression ${expr}.`);
    }
}
