import { SynthState } from '../Synth/Synth.state';

export enum AudioActionKind {
  PLAY = 'PLAY',
  STOP = 'STOP',
  RENDER = 'RENDER'
}

export interface AudioAction {
  type: AudioActionKind;
  payload: SynthState;
}