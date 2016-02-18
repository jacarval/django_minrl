import request from 'superagent'
import Cookies from 'js-cookie'

function createResourceRequest(data) {
	return {
		type: 'CREATE_RESOURCE_REQUEST',
		data
	}
}

function createResourceSuccess(data) {
	return {
		type: 'CREATE_RESOURCE_SUCCESS',
		data
	}
}

function createResourceFailure(data) {
	return {
		type: 'CREATE_RESOURCE_FAILURE',
		data
	}
}

export function updateFormInput(input) {
	return {
		type: 'UPDATE_FORM_INPUT',
		input
	}
}

export function createResource(data) {

	return dispatch => {

		let csrftoken = Cookies.get('csrftoken')

		dispatch(createResourceRequest(data))

		return request
		.post('/add/')
		.type('form')
		.send(data)
		.set('Accept', 'application/json')
		.set('X-CSRFToken', csrftoken)
		.end((err, res) => {
			if (err) {
				dispatch(createResourceFailure(err, data))
			} else {
				dispatch(createResourceSuccess(res.body))
			}
		})
	}
}