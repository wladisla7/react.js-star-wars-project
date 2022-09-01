import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import { makeCouncurrentRequest, changeHTTP } from '@utils/network'

import styles from './PersonFilm.module.css'

const PersonFilm = ({ personFilms }) => {

    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const response = await makeCouncurrentRequest(filmsHTTPS);



            setFilmsName(response);

        })();

    }, [])
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {filmsName
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({ title, episode_id }) =>
                        <li
                            className={styles.listItem}
                            key={episode_id}>
                            <span className={styles.itemEpisode}>Episode {episode_id}</span>
                            <span className={styles.colon}> : </span>
                            <span className={styles.title}>{title}</span>
                        </li>
                    )}
            </ul>
        </div>
    )
}

PersonFilm.protoType = {
    PersonFilm: PropTypes.array
}

export default PersonFilm
