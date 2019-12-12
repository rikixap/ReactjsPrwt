import React,{ Component } from 'react';
import axios from 'axios';
import Post from '../../../component/Post/Post';
import API from '../../../service';
import './BlogPost.css';

class BlogPost extends Component {

	state = {
		post : [],
		formBlogPost: {
			id: 1,
			title:'',
			body:'',
			userId:1
		 },
		 isUpdate : false,
		 comments : []
		}
		getPostAPI = () => {
			API.getNewsBlog().then(result => {
				this.setState({
					post: result
				})
			})
			API.getComments().then(result => {
				this.setState({
					comments: result
				})
			})
		}
		postDataToAPI = () => {
			API.postNewsBlog(this.state.formBlogPost).then((res) => {
				this.getPostAPI();
				this.setState({
					formBlogPost: {
						id:1,
						title: '',
						body: '',
						userId: 1
					},
				})
			})
		}
		putDataToAPI = () => {
			API.updateNewsBlog(this.state.formBlogPost,this.state.formBlogPost.id).then(res => {
				this.getPostAPI();
				this.setState({
					isUpdate: false,
					formBlogPost: {
						id: 1,
						title: '',
						body:'',
						userId:1
					},
				})
			})
		}
		handleRemove = (data) => {
			API.deleteNewsBlog(data).then(res => {
				this.getPostAPI();
			})
		}
		handleUpdate = (data) => {
			console.log(data);
			this.setState({
				formBlogPost: data,
				isUpdate: true
			})
		}
		
		handleFormChange = (event) => {
			console.log('form-change',event.target)

			let formBlogPostNew = {...this.state.formBlogPost};
			let timestamp = new Date().getTime();
			if(!this.state.isUpdate){
				formBlogPostNew['id'] = timestamp;
			}
			formBlogPostNew[event.target.name] = event.target.value;
			this.setState({
				formBlogPost: formBlogPostNew
			})
		}
		handleSubmit = () => {
			if (this.state.isUpdate){
				this.putDataToAPI();
			}else {
				this.postDataToAPI();
			}
		}
		handleDetail = (id) => {
			this.props.history.push(`/detail-post/${id}`);
		}
		componentDidMount(){
			this.getPostAPI();
		}
	render(){
		return(
			<div>
				<p>Halaman Blog Post</p>
				<hr/>
				<p className="section-title">Blog Post</p>
				<div className="form-add-post">
					<label htmlFor="title">Title</label>
					<input 
						type="text" 
						value={this.state.formBlogPost.title} 
						name="title" placeholder="add title"
						onChange={this.handleFormChange} />
					<label htmlFor="body">Blog Content</label>
					<textarea 
					name="body" id="body" cols="30" rows="10" 
					value={this.state.formBlogPost.body}
					placeholder="add blog content" onChange={this.handleFormChange}></textarea>
					<button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
				</div>
				{
					this.state.post.map(post => {
						return <Post key={post.id} data={post} remove={this.handleRemove}
						update={this.handleUpdate} goDetail={this.handleDetail} />
					})
				}
			</div>
			)
	}
}

export default BlogPost;