import React, {Component} from 'react'
import axios from 'axios'
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
    axios
    //this action returns a poromise
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
  }

  render() {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map (post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="ceneter"></div>
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