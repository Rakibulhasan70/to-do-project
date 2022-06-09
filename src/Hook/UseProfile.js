import { useEffect, useState } from 'react';

const UseProfile = id => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const url = `https://morning-oasis-64867.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [id])
    return [profile, setProfile]
};

export default UseProfile;