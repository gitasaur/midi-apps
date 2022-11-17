// let arp = [0, 4, 7, 11, 12, 11, 7, 4].map(x => 261.63 * 0.5 * Math.pow(2, x / 12));

import { SynthModule, SynthModuleBody, SynthModuleHeader } from '../../ui/SynthModule/SynthModule';
import { Dial } from '../../ui/Dial/Dial';
import { InputOutput } from '../../ui/IO/InputOutput';
import styles from './Sequencer.module.css';

interface SequencerState {
  grid: [number];
}

const NotePicker = () => {
  return (
    <div className={styles.noteStack}>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
      <div className={styles.note}></div>
    </div>
  )
}

const Grid = () => {
  return (
    <div className={styles.grid}>
      <NotePicker />
      <NotePicker />
      <NotePicker />
      <NotePicker />
      <NotePicker />
      <NotePicker />
      <NotePicker />
      <NotePicker />
    </div>
  )
}

export const SequencerModule = () => {


  return (
    <SynthModule className={styles.sequencer}>
      <SynthModuleHeader>
        <h2>Sequencer</h2>
      </SynthModuleHeader>
      <SynthModuleBody className={styles.sequencerBody}>
        <div>
          <Grid />
          <InputOutput />
        </div>
      </SynthModuleBody>
    </SynthModule>
  )
}