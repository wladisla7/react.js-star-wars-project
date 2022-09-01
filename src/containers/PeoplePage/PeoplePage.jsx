import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PeopleList from '@components/PeopleList'
import PeopleNavigation from '@components/PeopleNavigation';

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource, changeHTTP } from '@utils/network.js';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData.js';
import { API_PEOPLE } from '@constants/api.js';
import { useQueryParams } from '@hooks/useQueryParams'



const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');


    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {

            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    name,
                    id,
                    img
                }
            })

            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);
    return (
        <>
            <PeopleNavigation 
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>

    )
}

export default withErrorApi(PeoplePage);