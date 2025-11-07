import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useTopProvider = () => {
    const [topRated, setTopRated] = useState([])
    const [error,setError] =useState(false)
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        setLoading(true)
        axios('/TopProviderData.json')
            .then(data => setTopRated(data.data))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))

    }, [])

    return { topRated, loading, error }
};

export default useTopProvider;