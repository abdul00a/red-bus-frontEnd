import { TOGGLE_MODIFY } from "../../actions/constant";

const TripModifyFormReducer=(state=false, action)=>{
    switch(action.type){
        case TOGGLE_MODIFY:
            return !state;
        default:
            return state;
    }
}

export default TripModifyFormReducer;