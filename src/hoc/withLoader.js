import React, { useState, useMemo, useEffect } from 'react';
import Spinner from '../components/UI/Spinner/Spinner';

const withLoader = (WrappedComponent, axios) => {
    return function WithLoader(props) {
        const [loading, setLoading] = useState(false);

            axios.interceptors.request.use(request =>{
                setLoading(true);
                return request;
            });

            axios.interceptors.response.use(response =>{
                setLoading(false);
                return response;
            });

        return (
            <>
                {loading ? <Spinner/> : null}
                <WrappedComponent {...props}/>
            </>
        )


    }
}

export default withLoader;