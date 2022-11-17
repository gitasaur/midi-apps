import { Reducer, ReducerAction, useReducer } from 'react';
import { AudioState, INIT_AUDIO_STATE } from '../Audio/Audio.state';
import { audioReducer } from '../Audio/Audio.reducer';
import { AudioAction, AudioActionKind } from '../Audio/Audio.actions';

export interface AppState {
  audioState: AudioState
}
//
// export enum AppActionKind {
//   AUDIO = 'AUDIO'
// }
//
// export interface AppAction {
//   type: AppActionKind;
//   payload?: any;
// }
//
// export const appReducer = (state: AppState, action: any) => {
//   const { type, payload } = action;
//   switch (type) {
//     case AppActionKind.AUDIO:
//       const [audio, dispatch] = useReducer(synthReducer, state.audioState);
//       dispatch({type, payload})
//       return {
//         ...state,
//         audioState: audio
//       }
//     default:
//       throw new Error();
//   }
// }
//
// export const INIT_APP_STATE = {
//   audioState: INIT_AUDIO_STATE
// }

