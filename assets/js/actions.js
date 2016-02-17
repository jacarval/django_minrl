import request from 'superagent'

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

export function createResource(data) {

	return dispatch => {

		dispatch(createResourceRequest(data))

		return request
		.post('/add')
		.send(data)
		.set('Accept', 'application/json')
		.end((err, res) => {
			if (err) {
				dispatch(createResourceFailure(err, data))
			} else {
				dispatch(createResourceSuccess(res.body))
			}
		})
	}
}