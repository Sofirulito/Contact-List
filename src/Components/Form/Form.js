import react, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FormContent, InputForm, InputButton} from './styles'

function Form(){
    const dispatch = useDispatch();
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
        createContact()  
        dispatch({
            type: 'NEW_CONTACT', 
            formData
        })
    }

    return(
        <FormContent onSubmit={handleSubmit}>
            <InputForm name="first_name" type="text" onChange={handleChange} value={formData.first_name} placeholder='First name' required />
            <InputForm name="last_name" type="text" onChange={handleChange} value={formData.last_name} placeholder='Last name' required />
            <InputForm name="email" type="email" onChange={handleChange} value={formData.email} placeholder='Email' required/>
            <input type="checkbox" id="favorites" name="favorites" />
            <label for="favorites">Enable like favorites</label>
            <InputButton type="submit" value="Save"> Save </InputButton>
        </FormContent>
    )
}

export default Form