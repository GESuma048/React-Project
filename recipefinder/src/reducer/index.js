import {SET_RECIPES} from '../action';
import {combineReducers} from 'redux';

function recipes(state=[],action){
    switch(action.type){
        case SET_RECIPES:
            console.log(action.items);
            return action.items;
        default:
            return state;
    }
}
const rootReducer=combineReducers({recipes});

export default rootReducer;