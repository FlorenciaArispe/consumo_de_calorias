import { Activity } from "../types"

export type ActivityActions = {
    //ACCION
    type: 'save-activity' , payload : {newActivity : Activity} //TYPE: describe lo que se esta haciendo. PAYLOAD: los datos que se agregan al state
}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState= {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        //ACA VA LA LOGICA PARA ACTUALIZAR EL STATE

        return{
            //retorno el estado nuevo
            ...state, 
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state;
    
}