const initialState = {
    differentColorFirstMenu: false,
    hideFixedFooterPopup: false,
    showArrowTop: false,
}

const TOGGLE_DIFFERENTCOLORFISRTMENU = 'TOGGLE_DIFFERENTCOLORFISRTMENU'
const TOGGLE_HIDEFIXEDFOOTERPOPUP = 'TOGGLE_HIDEFIXEDFOOTERPOPUP'
const TOGGLE_SHOWARROWTOP = 'TOGGLE_SHOWARROWTOP'


export const toggleDifferentColorFirstMenu = differentColorFirstMenu => ({
    type: TOGGLE_DIFFERENTCOLORFISRTMENU, differentColorFirstMenu
})
export const toggleHideFixedFooterPopup = hideFixedFooterPopup => ({
    type: TOGGLE_HIDEFIXEDFOOTERPOPUP, hideFixedFooterPopup
})
export const toggleShowArrowTop = showArrowTop => ({
    type: TOGGLE_SHOWARROWTOP, showArrowTop
})


const App =  (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DIFFERENTCOLORFISRTMENU:
            return { ...state, differentColorFirstMenu: action.differentColorFirstMenu }
        case TOGGLE_HIDEFIXEDFOOTERPOPUP:
            return { ...state, hideFixedFooterPopup: action.hideFixedFooterPopup }
        case TOGGLE_SHOWARROWTOP:
            return { ...state, showArrowTop: action.showArrowTop }
        default:
            return state
    }
}
export default App