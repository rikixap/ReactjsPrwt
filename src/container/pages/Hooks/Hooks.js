import React, { Component, useState,useEffect } from 'react';
import { directive } from '@babel/types';
import './Hooks.css';


const Hooks = (props) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title  = `Title Change : ${count}`;
		return() => {
			document.title = `ReactJS Hello World`;
		}
	})
	return(
		<div className="p-hooks">
			<p>Nilai Saya Saat ini adalah : {count}</p>
			<button onClick={() => setCount(count + 1)}>Update Nilai</button>
		</div>
		)
}

export default Hooks;