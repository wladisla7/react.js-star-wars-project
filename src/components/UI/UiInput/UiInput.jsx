import cn from 'classnames'
import styles from './UiInput.module.css'

import cancelIcon from './img/cancel.svg'

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes,
}) => {

    return (
        <div className={cn(styles.wrapperInput, classes)}>
            <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                onClick={() => value && handleInputChange('')}
                src={cancelIcon}
                className={cn(styles.clear, !value && styles.clearDisabled)}
                alt=''
            />
        </div>
    )
}

export default UiInput
