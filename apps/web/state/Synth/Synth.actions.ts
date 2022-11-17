import { SynthState } from './Synth.state';

export enum SynthActionKind {
  INCREASE_BPM = 'INCREASE_BPM',
  DECREASE_BPM = 'DECREASE_BPM',
}

export interface SynthAction {
  type: SynthActionKind;
  // TODO: Add this back in when we start doing things
  // payload: SynthState;
}