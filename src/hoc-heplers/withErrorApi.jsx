import { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage'


export const withErrorApi = View => {
    return props => {
        const [errorApi, setEerrorApi] = useState(false);
        return (
            <>
                {errorApi
                    ? <ErrorMessage /> : (
                        <View
                            setEerrorApi={setEerrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}