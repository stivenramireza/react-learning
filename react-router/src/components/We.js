import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const We = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async() => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const { data } = await axios.get(url)
            setUsers(data)
        } catch (err) {
            console.error(`Error to get users: ${err}`)
        }
    }

    return (
        <div>
            <h1>We</h1>
            <ul>
                {
                    users.map(item => (
                        <li key={item.id}>
                            <Link to={`/we/${item.id}`}>
                                {item.name} - {item.email}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default We;