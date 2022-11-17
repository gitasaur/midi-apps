import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';

interface MixerState {
  dry: number;
  wet: number;
  q: number;
  input: any;
}

export const MixerModule = () => {

  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>Mixer</h2>
        <p>Mixes the effects together.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <Dial
          label={'Dry'}
          onChange={value => console.log(value)}
        />
        <Dial
          label={'Wet'}
          onChange={value => console.log(value)}
        />
        <InputOutput />
      </SynthModuleBody>
    </SynthModule>
  )

}