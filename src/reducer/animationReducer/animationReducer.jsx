import { DEPART_BUS, RESET_DEPART_BUS } from "../../actions/constant";

const animationReducer=(state={ busPropAnimate:{} },action)=>{
    switch(action.type){
        case DEPART_BUS:
            return{...state, busPropAnimate:action.style}
        case RESET_DEPART_BUS:
            return{...state, busPropAnimate:action.style}
        default:
            return(state)
    }
}

export default animationReducer;