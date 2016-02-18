import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import * as actionCreators from './actions'
import reducer from './reducer'

import '../css/style.css'

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer)

const MinifyForm = (props) => {
	return <form action="#">
		<div className="input-group">
			<span className="input-group-label">url</span>
			<input className="input-group-field" type="text" onChange={props.handleChange}></input>
			<div className="input-group-button">
				<input type="submit" className="button" onClick={props.handleSubmit}></input>
			</div>
		</div>
	</form>
}

const ResourceList = (props) => {
	return <div>
		{props.urls.map(resource => {
			const { key, url } = resource
			const shortUrl = 'http://' + window.location.host + '/' + key
			return <div key={key} className="media-object">
				<div className="media-object-section">
					<div className="thumbnail">
						<img src={'http://www.google.com/s2/favicons?domain=' + url}/>
					</div>
				</div>
				<div className="media-object-section">
					<h4>{shortUrl}</h4>
					<p>{url}</p>
				</div>
			</div>
		})}
	</div>
}

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	handleSubmit(e) {
		const input = this.props.input 
		if (input) {
			const checkedInput = input.slice(0,7) === 'http://' || input.slice(0,8) === 'https://' ? input : 'http://' + input
			this.props.createResource({url: checkedInput})
		}
	}
	handleChange(e) {
		const input = e.target.value
		this.props.updateFormInput(input)
	}
	render() {
		return <div>
			<MinifyForm handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>	
			<ResourceList urls={this.props.urls}/>
		</div>
	}
}

function mapStateToProps(state){
	return {
		urls: state.urls,
		input: state.input
	}
}

const AppContainer = connect(mapStateToProps, actionCreators)(App)

ReactDOM.render( 
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('root')
)