import { ADD_MESSAGE } from '../consts';
const message = (state={}, action='') => {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state,action.message];
		default: 
			return state;
	}
}

export default message;