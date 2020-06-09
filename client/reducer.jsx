const initState = {
	number: 0
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
    	case 'INCREASE':
			return { ...state, number: state.number + 1 };
		case 'DECREASE':
			return state
	default:
		return { ...state, number: state.number - 1 };
}

export default rootReducer