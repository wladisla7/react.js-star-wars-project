import { NavLink } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.headerContainer}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;