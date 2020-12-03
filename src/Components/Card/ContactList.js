import React, { useEffect, useState } from 'react';
import { CardList } from '../styledComponents'
import Pagination from "react-js-pagination";


function ContactListPager() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1)
    const PerPage = 3;

    useEffect(() => {
        getList()
    }, []);

    function getList() {
        fetch(`https://reqres.in/api/users?page=1`)
        .then(data => data.json())
        .then(items => {
            setList(items.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Logic for displaying current todos
    const indexOfLastTodo  = page * PerPage;
    const indexOfFirstTodo = indexOfLastTodo - PerPage;
    const currentTodos = list.slice( indexOfFirstTodo, indexOfLastTodo );

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setPage( pageNumber )
    };

    return (
        <>
        <CardList>
            {currentTodos.map(item => 
                <li key={item.id}>
                    {item.email}
                    {item.first_name}
                    {item.last_name}
                    <img src={item.avatar} alt="avatar" />
                </li>)}
        </CardList>
        <div className="pagination">
            <Pagination
                hideDisabled
               page = { page }
               itemsCountPerPage= { 3 }
               totalItemsCount= { list.length }
               pageRangeDisplayed= { 3 }
               onChange={ handlePageChange }
            />
         </div>
        </>
    );
}

export default ContactListPager