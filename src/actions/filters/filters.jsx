import { DEPART_BEFORE_6, DEPART_6_12, DEPART_12_18, DEPART_AFTER_18, TYPE_AC, TYPE_NON_AC, TYPE_SLEEPER, ARRIVE_BEFORE_6, ARRIVE_6_12, ARRIVE_12_18, ARRIVE_AFTER_18, RESET_FILTERS } from "../constant"

export const departBefore6=(apply) => {
    return{
        type:DEPART_BEFORE_6,
        apply:apply,
    }
}

export const depart612=(apply)=>{
    return{
        type:DEPART_6_12,
        apply:apply,
    }
}

export const depart1218=(apply)=>{
    return{
        type: DEPART_12_18,
        apply:apply,
    }
}

export const departAfter18=(apply)=>{
    return{
        type: DEPART_AFTER_18,
        apply:apply,
    }
}

export const typeAC=(apply)=>{
    return{
        type: TYPE_AC,
        apply:apply,
    }
}

export const typeNonAC=(apply)=>{
    return{
        type: TYPE_NON_AC,
        apply:apply,
    }
}

export const typeSleeper=(apply)=>{
    return{
        type: TYPE_SLEEPER,
        apply:apply,
    }
}

export const arriveBefore6=(apply)=>{
    return{
        type: ARRIVE_BEFORE_6,
        apply:apply,
    }
}

export const arrive612=(apply)=>{
    return{
        type: ARRIVE_6_12,
        apply:apply,
    }
}

export const arrive1218=(apply)=>{
    return{
        type: ARRIVE_12_18,
        apply:apply,
    }
}

export const arriveAfter18=(apply)=>{
    return{
        type: ARRIVE_AFTER_18,
        apply:apply,
    }
}

export const resetFilters=()=>{
    return{
        type: RESET_FILTERS
    }
}

export const filterRemove=(filters)=>{
    return(dispatch)=>{
        dispatch(resetFilters());
        filters.forEach(filter=>{
            dispatch(filter);
        })
    }
}