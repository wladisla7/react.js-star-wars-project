import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import UiButton from '@ui/UiButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
    const hendleChangeNext = () => getResource(nextPage);
    const hendleChangePrev = () => getResource(prevPage);
    return (
        <div className={styles.navigateContainer}>
            <h1 className="headerText">Heroes of Star Wars</h1>
            <div>
                <Link to={`/people/?page=${counterPage - 1}`} classNames={styles.link}>
                    <UiButton
                        text="Previous"
                        disabled={!prevPage}
                        onClick={hendleChangePrev}

                    />
                </Link>
                <Link to={`/people/?page=${counterPage + 1}`} classNames={styles.link}>
                    <UiButton
                        text="Next"
                        disabled={!nextPage}
                        onClick={hendleChangeNext}

                    />
                </Link>
            </div>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation
