export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as null | string
}

type InitialStateType = typeof initialState

export const appReducer = (
    state: InitialStateType = initialState,
    action: ActionsTypeApp
): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        default:
            return state
    }
}
export const setAppEntityStatusAC = (status:RequestStatusType)=>({type:'APP/SET-STATUS',status} as const)
export const setAppErrorAC = (error:null | string)=>({type:'APP/SET-ERROR',error} as const)
export type setAppEntityStatusTodolistACType = ReturnType<typeof setAppEntityStatusAC>;
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>;
export type ActionsTypeApp = ReturnType<typeof setAppEntityStatusAC> | ReturnType<typeof setAppErrorAC>