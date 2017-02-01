import * as types from '../mutation-types'



const state = {
	isMaximize: false,
	isMinimize: false
}

const mutations = {
	[types.TOGGLE_WINDOW_MAX] (state) {
    console.log(state.isMaximize)
		state.isMaximize = !state.isMaximize
	},
	[types.TOGGLE_WINDOW_MINI] (state) {
    console.log(state.isMinimize)
		state.isMinimize = !state.isMinimize
	}
}

export default {
	state,
	mutations
}