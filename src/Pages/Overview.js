import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CardList from '../Components/CardList/CardList'
import { Title } from '../Components/styledComponents'
import { contactList } from '../actions/contactActions'

function Contactos(){
    const contacts = useSelector(state => state.contacts.contacts.slice(0,6))
    const favorites = useSelector(state => state.contacts.favorites.slice(0, 4))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(contactList())
    }, [])
    
    return(
        <section>
            
            { favorites == '' ? 
                (<>
                    <Title>Favorites</Title>
                    <br></br>
                    <div>No tienes favoritos</div>
                    <br></br>
                </>)
                
                : (<>
                    <Title>Favorites</Title>
                    <CardList section="favorites" data={favorites} />
                </>)
            }
            <>
                <Title>Contact List</Title>
                <CardList section="contact" data={contacts} />
            </>
        </section>
    )   
}

export default Contactos;