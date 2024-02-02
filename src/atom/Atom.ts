import { U } from "math-expression-tree";

export abstract class Atom implements U {
    constructor(public readonly name: string, public readonly pos?: number, public readonly end?: number) {

    }
    addRef(): void {
    }
    release(): void {
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
    iscons(): boolean {
        return false;
    }
    isnil(): boolean {
        return false;
    }
    toString(): string {
        // TODO: This probably should be abstract or left undefined?
        return this.name;
    }
}