import { create, drop } from 'gc-hook';

import render from './keyed.js';

/** @type {WeakMap<Element | DocumentFragment, Function>} */
const effects = new WeakMap;

/**
 * @param {Function} dispose
 * @returns {void}
 */
const onGC = dispose => dispose();

export default effect => {
  /**
   * Render with smart updates within a generic container.
   * @template T
   * @param {T} where the DOM node where to render content
   * @param {() => Hole} what the hole to render
   * @returns {T}
   */
  return (where, what) => {
    let dispose = effects.get(where);
    if (dispose) {
      drop(dispose);
      dispose();
    }
    const wr = new WeakRef(where);
    dispose = effect(() => { render(wr.deref(), what) });
    effects.set(where, dispose);
    return create(dispose, onGC, { return: where });
  };
};
