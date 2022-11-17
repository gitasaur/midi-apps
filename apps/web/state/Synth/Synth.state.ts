import { NodeRepr_t } from '@elemaudio/core';

export interface NodeGraph {
  left: number | NodeRepr_t,
  right: number | NodeRepr_t
}

export interface SynthState {
  bpm: number;

  synthVoiceVolume: number;



  graph: NodeGraph;
}