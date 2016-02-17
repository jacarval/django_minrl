import chai, { expect } from 'chai'
import { createStore } from 'redux'

import reducer from '../assets/js/reducer.js'
import createResource from '../assets/js/actions.js'


describe('reducer', () => {

	it('handles CREATE_RESOURCE_FAILURE', () => {
		const initialState = { urls: [] }
		const action = {
			type: 'CREATE_RESOURCE_FAILURE',
			error: 'some error message'
		}
		const nextState = reducer(initialState, action)

		expect(nextState.fetching).to.equal(false)
		expect(nextState.error).to.equal('some error message')
	})

	it('handles CREATE_RESOURCE_REQUEST', () => {
		const initialState = { urls: [] }
		const action = {
			type: 'CREATE_RESOURCE_REQUEST'
		}
		const nextState = reducer(initialState, action)

		expect(nextState.fetching).to.equal(true)
	})

	it('handles CREATE_RESOURCE_SUCCESS', () => {
		const initialState = { urls: [] }
		const action = {
			type: 'CREATE_RESOURCE_SUCCESS',
			data: { key: 'fKne2h', url: 'http://www.recurse.com/'}
		}
		const nextState = reducer(initialState, action)

		expect(nextState.fetching).to.equal(false)
		expect(nextState.urls[0].key).to.equal('fKne2h')
		expect(nextState.urls[0].url).to.equal('http://www.recurse.com/')
	})
})

describe('store', () => {

	it('is a Redux store configured with the correct reducer', () => {
		const store = createStore(reducer)
		expect(store.getState()).to.have.property('urls')
		expect(store.getState().urls).to.have.length(0)

		store.dispatch({
			type: 'CREATE_RESOURCE_SUCCESS',
			data: { key: 'fKne2h', url: 'http://www.recurse.com/'}
		})
		
		expect(store.getState().urls[0].key).to.equal('fKne2h')
		expect(store.getState().urls[0].url).to.equal('http://www.recurse.com/')
	})
})

