import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData.js';
import { API_SEARCH } from '@constants/api'
import SearchPageInfo from '@components/SearchPage';
import UiInput from '@ui/UiInput'

import styles from './SearchPage.module.css'
import { style } from '@mui/system';

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState();
    const [people, setPeople] = useState([]);


    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img,
                }

            })
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }




    const debouncedGetResponce = useCallback(
        debounce(value => getResponse(value), 300)
    );

    const handleInputChange = (value) => {

        setInputSearchValue(value)
        debouncedGetResponce(value)
    }

    return (
        <div>

            <h1 className="headerText">SearchPage</h1>

            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="search your hero"
                classes={styles.inputSearch}
            />

            {people && <SearchPageInfo people={people} />}

        </div>
    )
}


export default withErrorApi(SearchPage)
