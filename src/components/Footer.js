import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
import logo from '../logo/logo-alterra-academy.png';
import logoprofil from '../img/profile.png';
import iconlocation from '../ico/ico-location.png';
import logoalta from '../logo/logo-alterra-academy-plain.png';
import iconfb from '../ico/ico-facebook.png';
import icontwitter from '../ico/ico-twitter.png';
import iconig from '../ico/ico-instagram.png';
// import logo from './logo.svg';
// import './App.css';


class Footer extends Component {
    render() {
      return (        
      <div className="App">
        {/* <!-- Start of Footer --> */}
        <footer>
            <div class="row">
                <div class="col-md-3 col-sm">
                    <div>
                        <img src={logoalta} class="logo-footer"/>
                    </div>
                    <div>
                        <p class="copyright"> © Copyright Alterra Group 2019</p>
                    </div>
                </div>
                <div class="col-md-2 col-sm">
                    <div class="socmed">Follow Us on:</div>
                    <div>
                        <table>
                            <tr>
                                <td><img src={iconfb}/></td>
                                <td>Facebook</td>
                            </tr>
                            <tr>
                                <td><img src={icontwitter}/></td>
                                <td>Twitter</td>
                            </tr>
                            <tr>
                                <td><img src={iconig}/></td>
                                <td>Instagram</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- End of Footer --> */}
        
        </div>

      );
    }
  }
  

export default Footer;