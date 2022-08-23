import PropTypes from 'prop-types'

import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.listContainer}>
            {people.map(({ id, name, img }) =>
                <li className={styles.listItem} key={id}>
                    <img className={styles.photo} src={img} alt={name} />
                    <p>{name}</p>
                </li>
            )}
        </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList