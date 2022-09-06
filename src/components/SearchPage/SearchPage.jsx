import { Link } from 'react-router-dom'
import styles from './SearchPage.module.css'

const SearchPage = ({ people }) => {
    return (
        <div>
            {people.length
                ? (
                    <ul className={styles.container}>
                        {people.map(({ id, name, img }) =>

                            <li className={styles.item} key={id}>
                                <Link to={`/people/${id}`}>
                                    <img src={img} alt={name} className={styles.photo} />
                                    <p className={styles.name}>{name}</p>
                                </Link>
                            </li>

                        )}
                    </ul>
                )
                : <h2 className={styles.comment}>No results</h2>
            }
        </div >
    )
}

export default SearchPage
