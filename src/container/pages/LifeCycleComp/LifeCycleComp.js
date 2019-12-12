import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		}
		console.log('constructor')
	}
	static getDerivedStateFromProps(props, state){
		console.log('getDerivedStateFromProps')
		return null;
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log('shouldComponentUpdate');
		console.log('nextState',nextState);
		console.log('this state',this.state);
		console.groupEnd();
		if(nextState.count >=4) {
			return false;
		}
		return true;
	}
	getSnapshotBeforeUpdate(prevProps,prevState){
		console.log('getSnapshotBeforeUpdate')
	}
	componentDidupdated(prevProps,prevState,snapshot) {
		console.log('componentDidupdated')
	}
	componentWillMount(){
		console.log('componentWillMount')
	}
	changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
	render(){
		return(
			<div>
				<p>Halaman LifeCycleComp</p>
				<button className="btn" onClick={this.changeCount}>Component Button{this.state.count}</button>
				<hr/>
				<p>Total Order : {this.props.state.totalOrder}</p>
			</div>
			)
	}
}

export default GlobalConsumer(LifeCycleComp);