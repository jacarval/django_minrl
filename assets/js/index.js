import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import * as actionCreators from './actions'
import reducer from './reducer'

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer)

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div>
			<input name="url"></input>
			<button onClick={e => this.props.createResource({url:"http://www.google.com/"})}>submit</button>
		</div>
	}
}

function mapStateToProps(state){
	return {
		urls: state.urls
	}
}

const AppContainer = connect(mapStateToProps, actionCreators)(App)

ReactDOM.render( 
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('root')
)