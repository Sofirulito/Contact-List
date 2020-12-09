import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CardList from '../Components/CardList/CardList'
import { Title } from '../Components/styledComponents'


function Favorites(){
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.contacts.favorites)
    /*const [data, setData] = useState([])

    useEffect(() =>{    	
        const data = localStorage.getItem('favorites')
        if (data){
            setData(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    })*/

    return(
        <>
            <Title>Favorites</Title>
            <CardList section="favorites" data={favorites} />
        </>
    )
}

export default Favorites