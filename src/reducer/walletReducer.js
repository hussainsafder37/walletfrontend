
import {GET_WALLETS, DELETE_WALLETS, GET_WALLET} from '../Actions/types'

const initialState = {
wallets: {},
wallet:''

}

export default function(state=initialState,action){
    switch(action.type){

        case GET_WALLETS: 
        return {...state,wallets:action.payload};
        
        case DELETE_WALLETS:
            return{...state,wallets:state.wallets.filter(x=>x.id!==action.payload)};

            case GET_WALLET:
                return {...state,wallet:action.payload}
    
        default:
            return state;

           

   
   
            }



}