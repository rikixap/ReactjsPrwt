import React, { Component,createContext } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import DetailPost from '../pages/BlogPost/DetailPost.js/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import './Home.css';
class Home extends Component {
	render () {
		return(
			<Router>
				<div>
						<div className="navigation">
							<Link to="/">BLog Post</Link>
							<Link to="/product">Product</Link>
							<Link to="/lifecycle">Lifecycle</Link>
							<Link to="youtubecomponent">Youtube</Link>
							<Link to="/hooks">Hooks</Link>
                        </div>

					<Route path="/" exact component={BlogPost} />
					<Route path="/detail-post/:postID" component={DetailPost}/>
					<Route path="/product" component={Product}/>
					<Route path="/lifecycle" component={LifeCycleComp}/>
					<Route path="/youtubecomponent" component={YoutubeCompPage}/>
					<Route path="/hooks" component={Hooks}/>
				</div>
			</Router>	
			)
	}
}
export default GlobalProvider(Home); 