import { el } from '@elemaudio/core';
import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial, MiniDial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';
import { Slider } from '@mui/joy';

// let synthVoice = (hz: any) => el.mul(
//   0.5,
//   el.add(
//     el.blepsaw(el.mul(hz, 1.001)),
//     el.blepsquare(el.mul(hz, 0.994)),
//     el.blepsquare(el.mul(hz, 0.501)),
//     el.blepsaw(el.mul(hz, 0.496)),
//   ),
// );

interface VoiceProps {
  hz: any;
  detune: number;
}

interface OcilatorsProps {
  input: any;
  output: any;
  hz: any;
  volume: number;
  sawOne: VoiceProps;
  sawTwo: VoiceProps;
  squareOne: VoiceProps;
  squareTwo: VoiceProps;
}

export const OcilatorModule = () => {

  return (
    <SynthModule>
      <SynthModuleHeader>
        <h2>Ocilator</h2>
        <p>Maths that makes music.</p>
      </SynthModuleHeader>
      <SynthModuleBody>
        <MiniDial
          label={'Saw 1'}
          onChange={value => console.log(value)}
        />
        <MiniDial
          label={'Saw 2'}
          onChange={value => console.log(value)}
        />
        <MiniDial
          label={'Square 1'}
          onChange={value => console.log(value)}
        />
        <MiniDial
          label={'Square 2'}
          onChange={value => console.log(value)}
        />
        <MiniDial
          label={'hz'}
          onChange={value => console.log(value)}
        />
        <MiniDial
          label={'Volume'}
          onChange={value => console.log(value)}
        />
        <InputOutput />
      </SynthModuleBody>
    </SynthModule>
  )

}