import {createStore, combineReducers} from 'redux'
import {formReact} from './React-form/form.reducer'

const rootReducer = combineReducers({
    formReact

});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());