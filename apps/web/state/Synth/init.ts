import { el } from '@elemaudio/core';
import { freeverb } from '../../utils/effects/freeverb.ts';

let train = el.train(4.8);

let synthVoice = (hz: any) => el.mul(
  0.5,
  el.add(
    el.blepsaw(el.mul(hz, 1.001)),
    el.blepsquare(el.mul(hz, 0.994)),
    el.blepsquare(el.mul(hz, 0.501)),
    el.blepsaw(el.mul(hz, 0.496)),
  ),
);

let arp = [0, 4, 7, 11, 12, 11, 7, 4].map(x => 261.63 * 0.5 * Math.pow(2, x / 12));

let modulate = (x: any, rate: any, amt: any) => el.add(x, el.mul(amt, el.cycle(rate)));

let env = el.adsr(0.01, 0.5, 0, 0.4, train);

let filt = (x: any) => el.lowpass(
  el.add(40, el.mul(modulate(1840, 0.05, 1800), env)),
  1,
  x
);

let dry = el.mul(0.25, filt(synthVoice(el.seq2({seq: arp, hold: true}, train, 0))));

let reverb = freeverb({
  props: { name: 'fv' },
  children: [0.94, 0.14, dry]
})

let wet = el.mul(0.25, reverb);

export default {
    left: el.add(el.mul(0.4, wet), dry),
    right: el.add(el.mul(0.4, wet), dry),
}