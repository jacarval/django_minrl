import { combineReducers } from 'redux'

const INITIAL_STATE = { urls: [] }

export default function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'CREATE_RESOURCE_SUCCESS':
			return state.merge({
				fetching: false
				urls: state.get('urls').push(action.data),
			})

		case 'CREATE_RESOURCE_REQUEST':
			return state.merge({
				fetching: true
			})

		case 'CREATE_RESOURCE_FAILURE':
			return state.merge({
				fetching: false,
				error: action.error
			})
	}

	return state
}
