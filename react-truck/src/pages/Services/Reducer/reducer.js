import {ADD_TO_CART} from '../constants'
const initialValue = {
    cartData:[]
}

export default function cartItems(state=initialValue,action)
{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData:action.data
            }
            break;

        default:
            return state
    }
}