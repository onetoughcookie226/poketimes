import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//functional component
//no states
//create a function , call it Home, 
//return some jsx
//Need to change this functional component to a class base componenet so we can use Lifecycle

class Home extends Component {
  state= {
    posts: []
  }
  componentDidMount (){
    //This going to get some data
    axios.get('https://jsonplaceholder.typicode.com/posts')
    //this action returns a poromise
   
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
  }

  render() {
    //distructuring, grabing the post property from the state
    const {posts} = this.state;
    //cycle through the posts if there is anything in there
    const postList = posts.length ? (
      //fire the function for each post
      posts.map (post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
            <Link to={'/' + post.id}>
              <span className="card-title">{post.title}</span>
            </Link> 
              //outputing jsx
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="ceneter">No posts yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}


export default Home