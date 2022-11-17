import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';
import { el } from '@elemaudio/core';
import { useEffect, useState } from 'react';

interface BPMProps {
  output: any;
  bpm?: number;
}

interface BPMState {
  output: any;
  bpm?: number;
}

export const BPMModule = ({ bpm }: BPMProps) => {

  const initialState = {
    
  }

  const [state, setState] = useState()

  let train = el.train(4.8);

  useEffect(() => {

  });

  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>BPM</h2>
        <p>The beats per minute, or speed of the arrangement.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Dial
            label={'BPM'}
            min={70}
            max={220}
            onChange={value => console.log(value)}
          />
          <InputOutput hideInput={true} />
        </div>

      </SynthModuleBody>
    </SynthModule>
  )
}