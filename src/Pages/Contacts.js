import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Pagination from "react-js-pagination";
import CardList from '../Components/CardList/CardList'
import { Title } from '../Components/styledComponents'
import './styles.css'

function Contacts() {
    const storeState = useSelector(state => state.contacts)
    const [contacts, setContact] = useState(storeState.contacts)

    const [page, setPage] = useState(1)
    const PerPage = 8;

    // Logic for displaying current todos
    const indexOfLastTodo  = page * PerPage;
    const indexOfFirstTodo = indexOfLastTodo - PerPage;
    const currentTodos = contacts.slice( indexOfFirstTodo, indexOfLastTodo );

    const handlePageChange = ( pageNumber ) => {
        setPage( pageNumber )
    };

    return (
        <>  
            <Title>Contact List</Title>
            <CardList section="contacts" data={currentTodos} />
            <Pagination
                hideDisabled
                activePage={page}
                page={page}
                itemsCountPerPage={PerPage}
                totalItemsCount={contacts.length}
                onChange={handlePageChange}
            />
        </>
    );
}

export default Contacts