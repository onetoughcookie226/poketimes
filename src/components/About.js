import React from 'react'
import Rainbow from '../hoc/Rainbow'
//functional component
//no states
//create a function , call it Home, 
//return some jsx
const About = () => {
    return (
      <div className="container">
        <h4 className="center">About</h4>
        <p>lorrem ibu</p>
      </div>
    )
}

export default Rainbow(About)