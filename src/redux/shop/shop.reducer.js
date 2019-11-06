
import SHOP_DATA from './shop.data';
import { shopActionsTypes } from './shop.types';

const INITIAL_STATE = {
    // collections:SHOP_DATA,
    collections:null
}

const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case shopActionsTypes.UPDATE_COLLECTIONS:
                console.log('c ',action.payload)
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;