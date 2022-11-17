import { el } from '@elemaudio/core';
import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';

// let modulate = (x: any, rate: any, amt: any) => el.add(x, el.mul(amt, el.cycle(rate)));

interface ModulatorState {
  input: any;
  output: any;
  rate: any;
  amount: any;
}

export const ModulatorModule = () => {
  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>Modulator</h2>
        <p>Modulates a frequency.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <Dial
          label={'Rate'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Amount'}
          onChange={value => console.log(value)}
        />
        <InputOutput />
      </SynthModuleBody>
    </SynthModule>
  )

}