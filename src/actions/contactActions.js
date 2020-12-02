import { CONTACT_LIST } from './types'

export const contactList = () => dispatch => {
    fetch('https://reqres.in/api/users?page=1')
        .then(data => data.json())
        .then(contacts =>{
            // modifica el estado que esta almacenado en el store / estado
            dispatch({
                type: CONTACT_LIST,
                payload: contacts
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}