import { SynthAction, SynthActionKind } from './Synth.actions';
import { SynthState } from './Synth.state';


export const synthReducer = (state: SynthState, action: SynthAction) => {
  const { type } = action;
  switch (type) {
    case SynthActionKind.INCREASE_BPM:
      return {
        ...state,
        bpm: state.bpm + 1
      };
    case SynthActionKind.DECREASE_BPM:
      return {
        ...state,
        bpm: state.bpm - 1
      };
    default:
      throw new Error();
  }
}