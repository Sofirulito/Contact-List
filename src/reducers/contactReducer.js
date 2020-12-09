import { CONTACT_LIST} from '../actions/types'

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
            case 'ADD_FAVORITES':
                console.log('favorites', state.favorites)
                return {
                    ...state,
                    favorites: state.favorites.concat(action.contact)
                }
            case 'REMOVE_FAVORITE':
                return {
                    ...state,
                    favorites: state.favorites.filter(contact => contact.id !== action.contact.id)
                }
            default: 
                return state;
        }
    }
