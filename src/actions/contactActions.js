import { CONTACT_LIST } from './types'

export const contactList = () => dispatch => {
    Promise.all([
        fetch('https://reqres.in/api/users?page=1').then(res => res.json()),
        fetch('https://reqres.in/api/users?page=2').then(res => res.json())
    ])
        .then(async ([aa, bb]) => {
            const a = await aa.data;
            const b = await bb.data;
            return [...a, ...b]
        })
        .then(contacts => {
            // modifica el estado que esta almacenado en el store / estado
            dispatch({
                type: CONTACT_LIST,
                payload: contacts
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}