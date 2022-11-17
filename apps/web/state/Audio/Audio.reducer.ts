import { AudioState } from './Audio.state';
import { AudioAction, AudioActionKind } from './Audio.actions';
import WebRenderer from '@elemaudio/web-renderer';
import { SynthState } from '../Synth/Synth.state';

const core = new WebRenderer();
// SSR async hackery
let initialized = false;

const initializeAudio = ({ graph }: SynthState) => {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

  core.addListener('load', () => {
    core.render(
      graph.left,
      graph.right
    );
  });

  core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  }).then(node => {
    node.connect(ctx.destination);

    core.addListener('stop', () => {
      node.disconnect();
      core.reset();
      initialized = false;
    });
  })
}

export const audioReducer = (state: AudioState, action: AudioAction) => {
  console.log(action.type, initialized);
  const { type, payload } = action;
  switch (type) {
    case AudioActionKind.PLAY:
      if (state.isPlaying) return state;
      if (!initialized) {
        initialized = true;
        initializeAudio(payload);
      }
      return {
        ...state,
        isPlaying: true
      };
    case AudioActionKind.STOP:
      if (!state.isPlaying) return state;
      core.emit('stop');
      return {
        ...state,
        isPlaying: false
      };
    case AudioActionKind.RENDER:
      const { graph } = payload;
      if (initialized) {
        core.render(
          graph.left,
          graph.right
        );
      }
      return state;
    default:
      throw new Error();
  }
}