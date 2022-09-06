import React, { useState, useEffect, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import UiLoading from '@ui/UiLoading'

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData'
import { API_PERSON } from '@constants/api'

import styles from './PersonPage.module.css'


const PersonFilm = React.lazy(() => import('@components/PersonPage/PersonFilms'));



const PersonPage = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams();

    useEffect(() => {
        (async () => { 
            
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setPersonId(id);

            const res = await getApiResource(`${API_PERSON}/${id}`);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender }
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })();
    }, []);
    return (
        <>
            <PersonLinkBack />

            <div className={styles.wrapper}>
                <h1 className={styles.personeName}>{personName}</h1>

                <div className={styles.container}>

                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}

                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {personFilms &&
                        <Suspense fallback={<UiLoading />}>
                            <PersonFilm personFilms={personFilms} />
                        </Suspense>
                    }

                </div>

            </div>

        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(PersonPage);
