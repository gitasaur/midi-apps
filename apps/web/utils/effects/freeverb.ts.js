import { el } from '@elemaudio/core';

/* First, our Schroeder-Moorer filtered-feedback comb-filters
 *
 * @param {string} name – for identifying our feedback taps
 * @param {number} size – for defining our feedback tap lengths
 * @param {Node | number} feedback: [0, 1) – how long the reverb should ring out
 * @param {Node | number} damping : [0, 1) – pole position of the lowpass filter
 * @param {Node} xn – input signal to filter
 *
 * @see https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html
 */
function lbcf(name, size, feedback, damping, xn) {
  let fb = el.add(xn, el.mul(feedback, el.tapIn({name})));

  return el.add(
    fb,
    el.mul(0, el.tapOut({name, size}, el.smooth(damping, fb)))
  );
}

/* Then a simple Schroeder allpass implementation. Quite similar to our
 * feedback comb filter above
 *
 * @param {string} name – for identifying our feedback taps
 * @param {number} size – for defining our feedback tap lengths
 * @param {Node | number} g: [0, 1) – Feedback gain around the allpass
 * @param {Node} xn – input signal to filter
 *
 * @see https://ccrma.stanford.edu/~jos/pasp/Schroeder_Allpass_Sections.html
 */
function schroeder(name, size, g, xn) {
  let fb = el.add(xn, el.mul(g, el.tapIn({name})));
  return el.add(el.mul(-g, fb), el.tapOut({name, size}, fb));
}

/* Finally, the Freeverb implementation itself
 *
 * @param {string} name – for identifying our feedback taps
 * @param {Node | number} feedback: [0, 1) – how long the reverb should ring out
 * @param {Node | number} damping : [0, 1) – pole position of the lowpass filters
 * @param {Node} xn – input signal to filter
 *
 * @see https://ccrma.stanford.edu/~jos/pasp/Freeverb.html
 */
export function freeverb({props, children: [feedback, damping, xn]}) {
  let combSizes = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116];
  let allpassSizes = [525, 556, 641, 537];

  // Map over our eight comb filter sizes to produce the eight parallel
  // lowpass feedback comb sections
  let parCombs = combSizes.map(function(size, i) {
    return lbcf(`${props.name}:lbcf:${i}`, size, feedback, damping, xn);
  });

  // Then left fold over our allpass sizes to produce the four series
  // allpasses over the sum of the combs
  return allpassSizes.reduce(function(acc, size, i) {
    return schroeder(`${props.name}:ap:${i}`, size, 0.5, acc);
  }, el.add(...parCombs));
}