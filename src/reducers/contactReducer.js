import { CONTACT_LIST } from '../actions/types'

const initialState = {
    contacts: [],
    favorites: []
}

// accion pura que toma un estado previo y una acción y la retorna en el siguiente estado
export default function(state = initialState, action){
    switch(action.type){
            case CONTACT_LIST:
                return{
                    ...state,
                    contacts: action.payload
                }
            case 'NEW_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.concat(action.formData)
                }
            case 'ADD_FAVORITES':
                return {
                    ...state,
                    favorites: state.favorites.concat(action.contact)
                }
            case 'REMOVE_FAVORITE':
                return {
                    ...state,
                    favorites: state.favorites.filter(contact => contact.id !== action.contact.id)
                }
            case 'REMOVE_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.filter(contact => contact.id !== action.contact.id)
                }
            default: 
                return state;
        }
    }
