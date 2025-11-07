import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSkilldata = () => {
    const [loading, setLoading] = useState(true)
    const [skills, setSkills] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios('/skillsData.json')
            .then(data => setSkills(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));

    }, [])

    return { skills, loading, error }
};

export default useSkilldata;
