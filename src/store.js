// estado de toda la aplicación, es creado pasando un reducer, y se llama con el metodo getState
import { applyMiddleware, createStore, compose} from 'redux';
// efectos secundarios de la aplicación como llamados a api
import thunk from 'redux-thunk'
import rootReducer from  './reducers'

const initialState = {}
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;