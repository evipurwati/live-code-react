import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/style.css';
import logo from '../logo.svg';

class Navbar extends Component {
    render() {
      return (        
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="col-md-12">
                <a class="navbar-brand" href="#">Movie</a>
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to='/' class="nav-link">Home</Link>   
                </li>                
                <li class="nav-item">
                    <Link to='/Profile' class="nav-link">Profile</Link>   
                </li>  
                <li class="nav-item">
                    <Link to='/signin' class="nav-link">Log in</Link>   
                </li>
                <li class="nav-item">
                    <Link to="/" class="nav-link" onClick={() => this.props.postSignout()} style={{textDecoration:'none'}}>Log Out</Link>
                </li>                 
                </ul>
            </div>
        </nav>
      </div>

);
}
}


export default Navbar;