import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
	render(){
		return(
			<div>
				<div>
					<img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="" />
				</div>
				<p>Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 cartoon - 10 pack]</p>
				<p className="product-price">Rp 410,000</p>
				<Counter />
			</div>
			)
	}
}

export default CardProduct;