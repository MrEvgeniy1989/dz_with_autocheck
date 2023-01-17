export type initStateType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}
type ActionType = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const
