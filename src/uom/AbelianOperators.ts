/**
 * @hidden
 * Special methods for operators on elements of abelian groups (additive).
 * This is provided for interface consistency.
 * It may not adhere to strict mathematical definitions.
 */
export interface AbelianOperators<T, UNIT> {
    /**
     * Binary this + other
     */
    __add__(other: UNIT | T): T | undefined

    /**
     * Binary other + this
     */
    __radd__(other: UNIT | T): T | undefined

    /**
     * Binary this - other
     */
    __sub__(other: UNIT | T): T | undefined

    /**
     * Binary other - this
     */
    __rsub__(other: UNIT | T): T | undefined

    /**
     * Unary +
     */
    __pos__(): T

    /**
     * Unary -
     */
    __neg__(): T

    /**
     * The additive inverse is denoted by neg.
     */
    neg(): T

    /**
     * Determines whether this element is the additive identity, <b>0</b>.
     */
    isZero(): boolean
}
