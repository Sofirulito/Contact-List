import { CONTACT_LIST } from '../actions/types'
const initialState = {
    items: []
}

// accion pura que toma un estado previo y una acción y la retorna en el siguiente estado
export default function(state = initialState, action){
    switch(action.type){
            case CONTACT_LIST:
                return{
                    ...state,
                    items: action.payload
                }
            default: 
                return state;
        }
    }
