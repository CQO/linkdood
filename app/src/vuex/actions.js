import * as types from './mutation-types'

// 窗口 window
export const toggleWindowMax = ({ dispatch }) => {
	dispatch(types.TOGGLE_WINDOW_MAX)
}
export const toggleWindowMini = ({ dispatch }) => {
	dispatch(types.TOGGLE_WINDOW_MINI)
}

