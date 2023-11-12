/**
 * @template T
 * @this {import("./literals.js").HoleDetails}
 * @param {Node} node
 * @param {T} value
 * @returns {T}
 */
export function hole<T>(this: import("./literals.js").HoleDetails, node: Node, value: T): T;
export class hole<T> {
    /**
     * @template T
     * @this {import("./literals.js").HoleDetails}
     * @param {Node} node
     * @param {T} value
     * @returns {T}
     */
    constructor(this: import("./literals.js").HoleDetails, node: Node, value: T);
    n: Object;
}
export function array<T>(node: Node, value: T, _: string, prev: Node[]): T;
export function attribute(element: Element, name: string): <T>(element: Element, value: T, name: string) => T;
export function text<T>(element: Element, value: T): T;