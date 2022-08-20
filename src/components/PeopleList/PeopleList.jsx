
import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.listContainer}>
            {people.map(({ id, name, img }) =>
                <li className={styles.listItem} key={id}>
                    <img  className={styles.photo} src={img} alt={name} />
                    <p>{name}</p>
                </li>
            )}
        </ul>
    )
}

export default PeopleList