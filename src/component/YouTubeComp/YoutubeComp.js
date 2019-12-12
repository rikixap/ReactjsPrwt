import React from 'react';
import './YoutubeComp.css';
const YoutubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDD6DPWG5t9r4EdBQj0U5-vnDoyaQ" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
YoutubeComp.defaultProps = {
    time : '00.00',
    title: 'Title here',
    desc : "xx ditonton. x hari yang lalu"
}
export default YoutubeComp;