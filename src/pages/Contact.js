import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
import logoalta from '../logo/logo-alterra-academy-plain@2x.png';
import iconuser from '../ico/ico-user.png';
import iconemail from '../ico/ico-email.png';
import iconphone from '../ico/ico-phone.png';

// import logo from './logo.svg';
// import './App.css';


class Contact extends Component {
    render() {
      return (        
      <div className="App">
          <div class="page-contact">
            <div class="row">
                <div class="left col-md-6" >
                    <img id="alterra-at-contact" src={logoalta}/>
                </div>
                <div class="right col-md-6">
                    <h5><strong>Contact Us</strong></h5>
                    <p>Send us a message and we will get back to you as soon as possible</p>

                    <form action="index.html">
                        <label for="name">Name<span style={{color:'red'}}>*</span></label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="name"><img src={iconuser}/></span>
                                </div>
                                <input type="text" class="form-control" id="name" aria-describedby="basic-addon3"/>
                            </div>

                        <label for="email">Email<span style={{color:'red'}}>*</span></label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="email"><img src={iconemail}/></span>
                                </div>
                                <input type="text" class="form-control" id="email" aria-describedby="basic-addon3"/>
                            </div>

                        <label for="phone">Phone Number<span style={{color:'red'}}>*</span></label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="phone"><img src={iconphone}/></span>
                                </div>
                                <input type="text" class="form-control" id="phone" aria-describedby="basic-addon3"/>
                            </div>
                        
                        <label for="national">National</label>
                            <select class="form-control" id="national">
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Singapore</option>
                                <option>Japan</option>
                            </select>
                
                        <label for="message">Message</label>
                            <textarea class="form-control" rows="5" id="message" style={{resize: 'none'}}></textarea>

                        <a href="index.html"><button type="button" class="form-control contact-button" id="submit">Submit</button></a>
                    </form>
                </div>
            </div>
        </div>
        
        </div>

      );
    }
  }
  

export default Contact;