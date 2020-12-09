import react, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Form(){
    const initialContacts = useSelector(state => state.contacts.contacts)
    const [contact, setContact] = useState(initialContacts)

    const [formData, setFormData] = useState('')

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const createContact = () =>{
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({formData})
        })
            .then((res) => res.json())
            .then(res => setFormData({
                first_name: '',
                last_name: '',
                email: '',
                id: res.id
            })
            )
            .catch((err) => console.log(err))
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        let arr = contact.concat(formData)
        setContact(arr)
        localStorage.setItem('allContacts', JSON.stringify(arr))

        createContact()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Firts Name
                <input name="first_name" type="text" onChange={handleChange} value={formData.first_name} required />
            </label>
            <label>
                Last Name
                <input name="last_name" type="text" onChange={handleChange} value={formData.last_name} required />
            </label>
            <label>
                Email
                <input name="email" type="email" onChange={handleChange} value={formData.email} />
            </label>
            <input type="submit" value="Save" />
        </form>
    )

}

export default Form