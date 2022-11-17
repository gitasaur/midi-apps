import { useEffect, useReducer, useState } from 'react';
import { AudioActionKind } from '../state/Audio/Audio.actions';
import { audioReducer } from '../state/Audio/Audio.reducer';
import { SynthState } from '../state/Synth/Synth.state';
import init from '../state/Synth/init';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import IconButton from '@mui/joy/IconButton';
import { EnvelopeModule } from '../components/Rack/Envelope/Envelope';
import { FilterModule } from '../components/Rack/Filter/Filter';
import { MixerModule } from '../components/Rack/Mixer/Mixer';
import { ModulatorModule } from '../components/Rack/Modulator/Modulator';
import { ReverbModule } from '../components/Rack/Reverb/Reverb';
import { Sequencer, SequencerModule } from '../components/Rack/Sequencer/Sequencer';
import { BPMModule } from '../components/Rack/BPM/BPM';
import { OcilatorModule } from '../components/Rack/Ocilator/Ocilator';

export default function Web() {
  const [audio, audioDispatch] = useReducer(audioReducer, { isPlaying: false });

  const [synthState, setSynthState] = useState<SynthState>({
    bpm: 144,
    graph: init
  });

  useEffect(() => {
    audioDispatch({type: AudioActionKind.RENDER, payload: synthState})
  },[synthState]);

  const play = () => { audioDispatch({type: AudioActionKind.PLAY, payload: synthState}) };
  const stop = () => { audioDispatch({type: AudioActionKind.STOP, payload: synthState}) };

  return (
    <>
      <header>
        <div className={'title'}>
          <h1>🎹 midi-apps</h1>
        </div>
        <div className={'audioControls'}>
          <IconButton className={audio.isPlaying ? 'active' : ''} variant="outlined" onClick={play}><PlayArrowRoundedIcon /></IconButton>
          <IconButton variant="outlined" onClick={stop}><StopRoundedIcon /></IconButton>
        </div>
      </header>
      <main>

        <BPMModule />
        <OcilatorModule />
        <SequencerModule />
        <ModulatorModule />
        <EnvelopeModule />
        <FilterModule />
        <ReverbModule />
        <MixerModule />

      </main>

    </>
  );
}