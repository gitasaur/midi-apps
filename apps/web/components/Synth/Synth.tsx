import { Dispatch, useEffect, useReducer } from 'react';
import { synthReducer } from '../../state/Synth/Synth.reducer';
import { SynthState } from '../../state/Synth/Synth.state';

type SynthProps = {
  synth: SynthState,
  onChange: Dispatch<SynthState>
}

export const Synth = ({ synth: state, onChange}: SynthProps) => {
  const [synth, synthDispatch] = useReducer(synthReducer, state);

  useEffect(() => {
    onChange(synth);
  }, [synth])

  return (
    <>
      {/*<div><br /></div>*/}
      {/*<div>Hello I am a synth</div>*/}
      {/*<div>My bpm is: {synth.bpm}</div>*/}
      {/*<div>*/}
      {/*  <button>Sequence</button>*/}
      {/*  <button>Sequence</button>*/}
      {/*  {arp}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button>Modulator</button>*/}
      {/*  <button>Modulator</button>*/}
      {/*  {Modulator}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button>Filter</button>*/}
      {/*  <button>Filter</button>*/}
      {/*  {Filter}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button>Reverb</button>*/}
      {/*  <button>Reverb</button>*/}
      {/*  {Filter}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button>Dry</button>*/}
      {/*  <button>Wet</button>*/}
      {/*  {Filter}*/}
      {/*</div>*/}
    </>
  )
}