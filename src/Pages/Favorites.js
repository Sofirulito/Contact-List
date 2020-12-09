import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Favorites(){
    const dispatch = useDispatch()
    
    const favorites = useSelector(state => state.contacts.favorites)
    const [data, setData] = useState([])

    useEffect(() =>{    	
        const data = localStorage.getItem('favorites')
        if (data){
            setData(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    })

    return(
        <>
            <h2>Favoritos</h2>
            <div>
                { favorites.lenght !== '' ?
                    favorites.map(contact => (
                        <div key={contact.id}>
                            <p>state</p>
                            <img src={contact.image} alt={contact.name} />
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                            <button onClick={() => dispatch({type: 'REMOVE_FAVORITES', contact})}>Remover de favoritos</button>
                        </div>
                    )) : (
                        data.map(contact => (
                            <div key={contact.id}>
                                <p>memoria</p>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default Favorites