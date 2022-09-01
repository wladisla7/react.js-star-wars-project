import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from './FavoritesPage.module.css';

import PeopleList from '@components/PeopleList'


const FavoritesPage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res)
        }
    }, []);

    return (
        <>
            <h1 className="headerText">FavoritesPage</h1>
            {people.length ? <PeopleList people={people} />
                : <h2 className={styles.data}>No data</h2>
            }
        </>
    )
}

export default FavoritesPage;