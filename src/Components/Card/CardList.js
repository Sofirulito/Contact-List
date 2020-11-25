import React, { useEffect, useState } from 'react';
import { CardList } from '../styledComponents'

function getList() {
    return fetch('https://reqres.in/api/users?page=1')
        .then(data => data.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

function ContactList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList()
        .then(items => {
            setList(items.data)
            console.log(items.data)
        })
    }, []);

    return (
        <CardList>
            {list.map(item => 
                <li key={item.id}>
                    {item.email}
                    {item.first_name}
                    {item.last_name}
                    <img src={item.avatar} alt="avatar" />
                </li>)}
        </CardList>
    );
}

export default ContactList