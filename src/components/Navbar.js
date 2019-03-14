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
            <div class="col-md-4">
                <img src={logo} class="logo-footer" style={{ width: '20%', height: '20%'}}/>
                <a class="navbar-brand" href="#">KabarKabar</a>
            </div>

            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}


            <div class="col-md-5 collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to='/Sepakbola' class="nav-link">Sepakbola</Link>
                </li>
                <li class="nav-item">
                    <Link to='/Ekonomi' class="nav-link">Ekonomi</Link>   
                </li>
                <li class="nav-item">
                    <Link to='/Politik' class="nav-link">Politik</Link>   
                </li>
                <li class="nav-item">
                    <Link to='/Hiburan' class="nav-link">Hiburan</Link>   
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lainnya
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}

                </ul>
            </div>
{/* 
            <div class="col-md-4">
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: '200px'}}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{width: '75px'}}>Search</button>
                </form>
            </div> */}

            <div class="col-md-3 collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to='/' class="nav-link">Home</Link>   
                </li>                
                {/* <li class="nav-item">
                    <Link to='/Ekonomi' class="nav-link">Sign Up</Link>   
                </li> */}
                <li class="nav-item">
                    <Link to='/signin' class="nav-link">Sign In</Link>   
                </li>   
                <li class="nav-item">
                    <Link to='/Profile' class="nav-link">Profile</Link>   
                </li>           
                <li class="nav-item">
                    <Link to="/" class="nav-link" onClick={() => this.props.postSignout()} style={{textDecoration:'none'}}>Sign Out</Link>
                </li>        
                </ul>
            </div>
        </nav>
      </div>

);
}
}


export default Navbar;