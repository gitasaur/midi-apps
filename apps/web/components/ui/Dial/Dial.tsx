import { Knob, Arc, Value, Pointer } from 'rc-knob';
import styles from './Dial.module.css';

interface DialProps {
  size?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  showValue?: boolean;
  value?: number;
  label: string;
}

const labelToID = (label: string) => label.replace(/\W/g,'_');

export const Dial = ({size = 60, min = 0, max = 100, onChange, showValue, value, label }: DialProps) => {
  const id = labelToID(label);
  return (
    <div className={styles.dialContainer}>
      <Knob
        id={id}
        className={styles.knob}
        size={size}
        angleOffset={220}
        angleRange={280}
        min={min}
        max={max}
        onChange={onChange}
        value={value}
      >
        <Arc
          arcWidth={3}
          color="#FC5A96"
          background="#202124"
          radius={25}
        />
        <Pointer
          width={4}
          radius={19}
          type={'circle'}
          color={'#ffffff'}
        />
        <Value
          hide={showValue}
          marginBottom={25}
          styles={{
            display: showValue ? 'block' : 'none',
            fontSize: size / 4
          }}
          className={styles.knobValue}
        />
      </Knob>
      <label
        className={styles.knobLabel}
        htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export const MiniDial = ({size = 50, min = 0, max = 100, onChange, showValue, value, label }: DialProps) => {
  const id = labelToID(label);
  return (
    <div className={styles.miniDialContainer}>
      <Knob
        id={id}
        className={styles.knob}
        size={size}
        angleOffset={220}
        angleRange={280}
        min={min}
        max={max}
        onChange={onChange}
        value={value}
      >
        <Arc
          arcWidth={3}
          color="#FC5A96"
          background="#202124"
          radius={20}
        />
        <Pointer
          width={4}
          radius={15}
          type={'circle'}
          color={'#ffffff'}
        />
      </Knob>
      <label
        className={styles.knobLabel}
        htmlFor={id}>
        {label}
      </label>
    </div>
  )
}