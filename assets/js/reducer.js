import { combineReducers } from 'redux'

const INITIAL_STATE = { urls: [] }

export default function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'CREATE_RESOURCE_SUCCESS':
			return Object.assign({}, state, {
				fetching: false,
				urls: state.urls.concat(action.data)
			})

		case 'CREATE_RESOURCE_REQUEST':
			return Object.assign({}, state, {
				fetching: true
			})

		case 'CREATE_RESOURCE_FAILURE':
			return Object.assign({}, state, {
				fetching: false,
				error: action.error
			})
		case 'UPDATE_FORM_INPUT':
			return Object.assign({}, state, {
				input: action.input
			})
	}
	return state
}
