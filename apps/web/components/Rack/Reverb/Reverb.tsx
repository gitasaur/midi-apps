import { freeverb } from '../../../utils/effects/freeverb.ts';
import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';

// let reverb = freeverb({
//   props: { name: 'fv' },
//   children: [0.94, 0.14, dry]
// })

interface ReverbState {
  input: any;
  output: any;
  length: number;
  position: number;
  signal: any;
}


export const ReverbModule = () => {

  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>Reverb</h2>
        <p>Kind of like an echo, only weirder.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <Dial
          label={'Length'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Position'}
          onChange={value => console.log(value)}
        />
        <InputOutput />
      </SynthModuleBody>
    </SynthModule>
  )

}