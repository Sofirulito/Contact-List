import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import Card from '../Components/Card/Card'
import { Title, CardList, CardContent } from '../Components/styledComponents'

function Contacts() {
    const contacts = JSON.parse(localStorage.getItem('allContacts'))

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
            <CardList>
                {currentTodos.map((item, index) =>
                <CardContent key={index}>
                    <Card  {...item}>
                        {item.body}
                    </Card>
                    <button></button>
                </CardContent>
                )}
            </CardList>
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