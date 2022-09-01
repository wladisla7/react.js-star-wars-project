import { useState, useEffect } from 'react'
import styles from './UiLoading.module.css';

import loaderWhite from './img/loader-white.svg'
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'


const UiLoading = ({ theme = 'white' }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'white': setLoaderIcon(loaderWhite); break;
            case 'blue': setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loaderWhite)
        }
    }, [])

    return (
        <img
            className={styles.loading}
            src={loaderIcon}
            alt="Loader"
        />
    )
}

export default UiLoading
