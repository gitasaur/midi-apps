import styles from './SynthModule.module.css'

interface SynthModuleProps {
  children?: any;
  className?: any;
}

export const SynthModule = ({ children, className }: SynthModuleProps) => {
  return (
    <div className={className ?? styles.synthModule}>
      {children}
    </div>
  )
}

export const SynthModuleHeader = ({ children }: SynthModuleProps) => {
  return (
    <div className={styles.synthModuleHeader}>
      {children}
    </div>
  )
}

export const SynthModuleBody = ({ children, className }: SynthModuleProps) => {
  return (
    <div className={className ?? styles.synthModuleBody}>
      {children}
    </div>
  )
}