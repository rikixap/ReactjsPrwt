import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../../context/context';
import ActionType from '../../../../redux/reducer/globalActionType';

class Counter extends Component {
	render(){
		return(
		<div>
			<button onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
			<input type="text" value={this.props.state.totalOrder}/>
			<button onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
		</div>
		)
	}
}

export default GlobalConsumer(Counter);