type ActionType = ReturnType<typeof changeThemeId>
type StateType = {
    themeId: number
}

const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            const copy = {...state}
            return {...copy, themeId: action.id}
        }
        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: any): changeThemeIdType => ({type: 'SET_THEME_ID', id} as const)// fix any
