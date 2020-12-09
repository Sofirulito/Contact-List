import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Components/Card/Card'
import { Title, CardList, ButtonDelete, ButtonAdd, CardContent} from '../Components/styledComponents'
import { contactList } from '../actions/contactActions'

function Contactos(){
    const contacts = useSelector(state => state.contacts.contacts)
    const favorites = useSelector(state => state.contacts.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(contactList())
    }, [])
    
    return(
        <section>
        <Title>Favorites</Title>
        <CardList>
            { favorites.lenght !== '' ?
               favorites.slice(0, 4).map((favorite)=> (
                    <CardContent key={favorite.id} >
                        <Card {...favorite}>
                            {favorite.body}
                        </Card>
                    </CardContent>
                )) : (
                    <div>No hay Favoritos</div>
                )
            }
        </CardList>

        <Title>Contact List</Title>
        <CardList>
            { Array.isArray(contacts) ?
                contacts.slice(0, 6).map((contact)=> (
                    <CardContent key={contact.id} >
                        <Card {...contact}>
                            {contact.body}
                        </Card>
                        <ButtonAdd onClick={() => dispatch({type: 'ADD_FAVORITES', contact})}>Add Favorite</ButtonAdd>
                    </CardContent>
                )) : (
                    <div>No hay contactos</div>
                )
            }
            
        </CardList>
        </section>
    )   
}

export default Contactos;