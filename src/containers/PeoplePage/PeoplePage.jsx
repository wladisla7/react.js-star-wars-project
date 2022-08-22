import { useState, useEffect } from 'react';
import { withErrorApi } from '../../hoc-heplers/withErrorApi'
import { getApiResource } from '../../utils/network.js';
import { API_PEOPLE } from '../../constatns/api.js';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData.js';
import PeopleList from '../../components/PeopleList'

// import styles from './PeoplePage.module.css'

const PeoplePage = ({ setEerrorApi }) => {
    const [people, setPeople] = useState(null);


    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {

            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                console.log(id);
                console.log(img)

                return {
                    name,
                    url,
                    img
                }
            })

            setPeople(peopleList)
            setEerrorApi(false);
        } else {
            setEerrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);
    return (
        <>
            <h1>Navigator</h1>
            {people && <PeopleList people={people} />}
        </>

    )
}

export default withErrorApi(PeoplePage);