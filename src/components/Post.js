import React, {Component} from 'react'

class Post extends Component {
    state = {
        id: null
    }
/* This is where we want to indentify what the route paremeter is */
componentDidMount () {
    // console.log(this.props)
    let id = this.props.match.params.post_id;
    this.setState ({
        id: id
    })

}

    render () {
        return(
            <div className="container">

                {/*<h4>route parameter</h4>*/}
                <h4>{this.state.id}</h4>

            </div>
        )
    }
    

}
export default Post