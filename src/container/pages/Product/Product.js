import React, { Component } from 'react';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../../context/context';
import "./Product.css";

class Product extends Component {


		render() {
			return(
				<div>
				<p>Halaman Product</p>
				<hr/>
				<div className="header">
					<div className="logo">
						<img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
					</div>
			
					<div className="troley">
						<img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
						<div className="count">{this.props.state.totalOrder}</div>
					</div>
				</div>
				<CardProduct />                                                                                              
			</div>
			 
			   
			);
		}
	}

	export default GlobalConsumer(Product);