import { U } from "math-expression-tree";

export abstract class Atom implements U {
    constructor(public readonly name: string, public readonly pos?: number, public readonly end?: number) {

    }
    contains(needle: U): boolean {
        return this.equals(needle);
    }
    equals(other: U): boolean {
        if (this === other) {
            return true;
        }
        else {
            return false;
        }
    }
    isCons(): boolean {
        return false;
    }
    isNil(): boolean {
        return false;
    }
    toString(): string {
        return this.name;
    }
}