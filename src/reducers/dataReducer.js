
export const dataReducer = (state = [], action) => {
	switch (action.type) {
		case 'data':
			state = action.payload
			return state	

		default:
			state = action.payload
			return state	
	}
}
