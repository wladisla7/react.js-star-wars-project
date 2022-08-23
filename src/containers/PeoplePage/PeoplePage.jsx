import { useState, useEffect } from 'react';

import PeopleList from '@components/PeopleList'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network.js';
import { API_PEOPLE } from '@constants/api.js';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData.js';



const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);


    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {

            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    name,
                    url,
                    img
                }
            })

            setPeople(peopleList)
            setErrorApi(false);
        } else {
            setErrorApi(true);
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