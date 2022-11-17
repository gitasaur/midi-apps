import { el } from '@elemaudio/core';
import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';

// let filt = (x: any) => el.lowpass(
//   el.add(40, el.mul(modulate(1840, 0.05, 1800), env)),
//   1,
//   x
// );


interface FilterState {
  props: [{}];
  cutoff: number;
  q: number;
  input: any;
}

export const FilterModule = () => {
  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>Filter</h2>
        <p>A compressor, of sorts.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <Dial
          label={'Cutoff'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Q'}
          onChange={value => console.log(value)}
        />
        <InputOutput />
      </SynthModuleBody>
    </SynthModule>
  )
}