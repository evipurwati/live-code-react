import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
import logo from '../logo/logo-alterra-academy.png';


class Header extends Component {
    render() {
      return (        
      <div className="App">
          <header class="header1">
            <div class="row" style={{backgroundColor: '#f8f9fa'}}>
                <div class="col-md-3 col-sm-6">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={logo}/>
                    </nav>
                </div>
                <div class="col-md-9 col-sm-6">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <ul class="navbar-nav row" style={{width: '100%', justifyContent: 'flex-end'}}>
                            <li class="nav-item active col-lg-2">
                            <a class="nav-link" href="#" style={{color: '#F47522'}}>ABOUT <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item col-lg-2">
                            <a class="nav-link" href="#" style={{color: '#19345E'}}>GALERY</a>
                            </li>
                            <li class="nav-item col-lg-2">
                            <a class="nav-link" href="#" style={{color: '#19345E'}}>CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </div>

      );
    }
  }
  

export default Header;