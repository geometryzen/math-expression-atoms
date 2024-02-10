/* eslint-disable @typescript-eslint/no-unused-vars */
import { is_atom, U } from "math-expression-tree";
import { Adapter, SumTerm } from "../src/blade/Adapter";
import { BasisBlade } from "../src/blade/BasisBlade";
import { create_algebra } from '../src/blade/createAlgebra';
import { booT, create_boo } from "../src/boo/Boo";
import { create_int } from "../src/rat/Rat";

class Field implements Adapter<U, U> {
    ε: U;
    one: U;
    zero: U;
    abs(arg: U): U {
        throw new Error("Method not implemented.");
    }
    add(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    sub(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    eq(lhs: U, rhs: U): boolean {
        throw new Error("Method not implemented.");
    }
    ne(lhs: U, rhs: U): boolean {
        throw new Error("Method not implemented.");
    }
    le(lhs: U, rhs: U): boolean {
        throw new Error("Method not implemented.");
    }
    lt(lhs: U, rhs: U): boolean {
        throw new Error("Method not implemented.");
    }
    ge(lhs: U, rhs: U): boolean {
        throw new Error("Method not implemented.");
    }
    gt(lhs: U, rhs: U): boolean {
        throw new Error("Method not implemented.");
    }
    max(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    min(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    mul(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    div(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    neg(arg: U): U {
        throw new Error("Method not implemented.");
    }
    asString(arg: U): string {
        throw new Error("Method not implemented.");
    }
    cos(arg: U): U {
        throw new Error("Method not implemented.");
    }
    isField(arg: U | BasisBlade<U, U>): arg is U {
        throw new Error("Method not implemented.");
    }
    isOne(arg: U): boolean {
        throw new Error("Method not implemented.");
    }
    isZero(arg: U): boolean {
        throw new Error("Method not implemented.");
    }
    sin(arg: U): U {
        throw new Error("Method not implemented.");
    }
    sqrt(arg: U): U {
        throw new Error("Method not implemented.");
    }
    isDimension(arg: U): boolean {
        throw new Error("Method not implemented.");
    }
    dim(arg: U): number {
        throw new Error("Method not implemented.");
    }
    sum(terms: SumTerm<U, U>[]): U {
        throw new Error("Method not implemented.");
    }
    extractGrade(arg: U, grade: number): U {
        throw new Error("Method not implemented.");
    }
    treeAdd(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    treeLco(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    treeMul(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    treeScp(lhs: U, rhs: U): U {
        throw new Error("Method not implemented.");
    }
    treeSqrt(arg: U): U {
        throw new Error("Method not implemented.");
    }
    treeZero(): U {
        throw new Error("Method not implemented.");
    }
    weightToTree(arg: U): U {
        throw new Error("Method not implemented.");
    }
    scalarCoordinate(arg: U): U {
        throw new Error("Method not implemented.");
    }
    bladeToTree(blade: BasisBlade<U, U>): U {
        throw new Error("Method not implemented.");
    }

}

test("Blade", function () {
    const field = new Field();
    const algebra = create_algebra([create_int(1), create_int(1)], field, ["ex", "ey"]);
    expect(create_boo(true)).toBe(booT);
    expect(is_atom(create_boo(true))).toBe(true);
    const units = algebra.units;
    expect(units.length).toBe(2);
    const e1 = units[0];
    expect(e1.name).toBe("Blade");
    expect(e1.type).toBe("blade");
    expect(e1.toInfixString()).toBe("ex");
    expect(is_atom(e1)).toBe(true);
    const e2 = units[1];
    expect(e2.name).toBe("Blade");
    expect(e2.type).toBe("blade");
    expect(e2.toInfixString()).toBe("ey");
    expect(is_atom(e2)).toBe(true);
});
