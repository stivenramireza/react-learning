import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserInfo = async() => {
            try {
                const url = `https://jsonplaceholder.typicode.com/users/${id}`
                const { data } = await axios.get(url)
                setUser(data)
            } catch (err) {
                console.error(`Error to get user info: ${err}`)
            }
        }
        getUserInfo()
    }, [id])

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
    )
}

export default User;