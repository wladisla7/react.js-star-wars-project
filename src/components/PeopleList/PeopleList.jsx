import { Link } from 'react-router-dom';
 

import PropTypes from 'prop-types'

import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.listContainer}>
            {people.map(({ id, name, img }) =>
                <li key={id} className={styles.listItem}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.photo} src={img} alt={name} />
                    </Link>
                    <p>{name}</p>
                </li>
            )
            }
        </ul >
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList