import { LambdaExpr } from "math-expression-context";
import { U } from "math-expression-tree";
import { JsAtom } from "../atom/JsAtom";

export class Lambda extends JsAtom {
    readonly #hash: string;
    readonly #body: LambdaExpr;
    constructor(body: LambdaExpr, hash: string, pos?: number, end?: number) {
        super('Lambda', pos, end);
        this.#body = body;
        this.#hash = hash;
    }
    get hash(): string {
        return this.#hash;
    }
    get body(): LambdaExpr {
        return this.#body;
    }
    override equals(other: U): boolean {
        if (this === other) {
            return true;
        }
        if (other instanceof Lambda) {
            return true;
        }
        else {
            return false;
        }
    }
    override toString(): string {
        return '(lambda ...)';
    }
}

export function is_lambda(expr: U): expr is Lambda {
    return expr instanceof Lambda;
}
