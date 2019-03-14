import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../Store';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/style.css';

class SignIn extends Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
            console.log('this', this);
            this.props.history.replace('/profile');
        });
    };

    render() {
        console.log('signin props', this.props);
        return (
            <section className="content signin">
                <form onSubmit={e => e.preventDefault()}>
                    <h4>Sign In</h4>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={e => this.props.setField(e)}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            onChange={e => this.props.setField(e)}
                        />
                    </div>
                    <button onClick={() => this.doLogin()}>Sign In</button>
                    <button type='reset'>Reset</button>
                </form>
            
            </section>
        )
    }}

    
export default connect("is_login, username, password", actions)(withRouter(SignIn));