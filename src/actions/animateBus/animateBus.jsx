import { DEPART_BUS, RESET_DEPART_BUS } from "../constant"

export const animateBus=()=>{
    return{
        type:DEPART_BUS,
        style:{
            animationName:'bus-depart',
        }
    }
}

export const resetAnimateBus=()=>{
    return{
        type:RESET_DEPART_BUS,
        style:{},
    }
}