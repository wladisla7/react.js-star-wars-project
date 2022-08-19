import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constatns/api'

import styles from './PeoplePage.module.css'

const PeoplePage = () => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResource(url);
        const peopleList = res.results.map(({ name, url }) => {
            return {
                name: name,
                url: url
            }
        })

        setPeople(peopleList)
    }

    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);
    return (
        <>
            {people && (
                <ul>
                    {people.map(({ name, url }) =>
                        <li key={name}>{name}</li>
                    )}
                </ul>
            )}
        </>
    )

}

export default PeoplePage