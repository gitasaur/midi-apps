import { el } from '@elemaudio/core';
import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';

// let env = el.adsr(0.01, 0.5, 0, 0.4, train);

interface EnvelopeState {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  signal: any;
}

export const EnvelopeModule = () => {
  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>Envelope</h2>
        <p>A one-pole envelope follower node with different attack and release times.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <Dial
          label={'Attack'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Decay'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Sustain'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Release'}
          onChange={value => console.log(value)}
        />
        <InputOutput />
      </SynthModuleBody>
    </SynthModule>
  )

}