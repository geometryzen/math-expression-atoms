import { U } from "math-expression-tree";
import { JsAtom } from "../atom/JsAtom";

/**
 * An Err is synonymous with undefined.
 * undefined means that the types are correct but the expression is not meaningful because of the values. 
 * An error that may be used as a return value. This MUST not be thrown.
 * Err may be considered to be synonymous with undefined.
 */
export class Err extends JsAtom {
    #cause: U;
    constructor(cause: U, pos?: number, end?: number) {
        super("Err", pos, end);
        this.#cause = cause;
    }
    get cause(): U {
        return this.#cause;
    }
    override equals(other: U): boolean {
        if (this === other) {
            return true;
        }
        if (other instanceof Err) {
            return this.equalsErr(other);
        }
        else {
            return false;
        }
    }
    equalsErr(other: Err): boolean {
        return this.cause.equals(other.cause);
    }
    override toString(): string {
        return `Err(${this.#cause.toString()})`;
    }
    toInfixString(): string {
        throw new Error();
    }
    toListString(): string {
        throw new Error();
    }
}

export function is_err(expr: unknown): expr is Err {
    return expr instanceof Err;
}

export function assert_err(expr: U, context?: string, argName?: string): Err {
    if (is_err(expr)) {
        return expr;
    }
    else {
        if (typeof context === 'string') {
            // TODO: This should be a reusable message for consistency.
            throw new Error(`${context}: Expecting ${argName} to be a Err but got ${expr}.`);
        }
        else {
            throw new Error("Expecting Err");
        }
    }
}
