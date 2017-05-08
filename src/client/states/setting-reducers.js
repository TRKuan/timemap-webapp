const initSettingState = {
    transportation: 'walking'
};

export function setting(state = initSettingState, action) {
    switch (action.type) {
    case '@SETTING/SET_TRANSPORTATION':
        return {
            ...state,
            transportation: action.trans
        };
    default:
        return state;
    }
}
