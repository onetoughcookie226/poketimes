import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'
// import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      //this is where our route is set up
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        {/*  defining as route parameter and giving the parameter an id or anything else*/}
        {/*  the component is going to show a single post*/}
          <Route path= "/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
