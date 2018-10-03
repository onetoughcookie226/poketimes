import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        // id: null
        posts: null
    }
/* This is where we want to indentify what the route paremeter is */
componentDidMount () {
    // console.log(this.props)
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post:res.data
            })
        // console.log(res)    
        })
    // this.setState ({
    //     id: id
    // })

}

    render () {
        //check and see if we have a post yet
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading ...</div>
        )
        return(
            <div className="container">

                {/*<h4>route parameter</h4>*/}
                {/*<h4>{this.state.id}</h4>*/}
                {post}

            </div>
        )
    }
    

}
export default Post