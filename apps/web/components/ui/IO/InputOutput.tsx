import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import styles from './InputOutput.module.css';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Output';

interface IOProps {
  hideInput?: boolean;
  hideOutput?: boolean;
}

export const InputOutput = ({ hideOutput, hideInput }: IOProps) => {
  return(
    <div className={styles.io}>
      { !hideInput &&
        <Select
          color="primary"
          placeholder="Input"
          startDecorator={<InputIcon fontSize={'small'}/>}
          size="sm"
          variant="plain">
          <Option value="none">None</Option>
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
        </Select>
      }
      { !hideOutput &&
        <Select
          color="primary"
          placeholder="Output"
          startDecorator={<OutputIcon fontSize={'small'}/>}
          size="sm"
          variant="plain">
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
        </Select>
      }
    </div>
  )
}