import React, { Component } from 'react';
import YoutubeComp from '../../../component/YouTubeComp/YoutubeComp' ;

class YoutubeCompPage extends Component {
	render(){
		return(
			<div>
				<p>Youtube Component</p>
				<hr/>
				<YoutubeComp 
				time="7.12"
				title="Tutorial React JS - Bagian 1"
				desc="2x ditonton 2hari yang lalu"
				 />

				 <YoutubeComp
                time="8.22"
                title="TutoriaL React JS - Bagian 2"
                desc="200x ditonton 10hari yang lalu"
                /> 

                <YoutubeComp
                time="5.04"
                title="TutoriaL React JS - Bagian 3"
                desc="500x ditonton 4hari yang lalu"
                />


                <YoutubeComp
                time="4.12"
                title="TutoriaL React JS - Bagian 4"
                desc="1k ditonton 2hari yang lalu"
                />

                <YoutubeComp/>
			</div>
			)
	}
}

export default YoutubeCompPage;