import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../Store';

class Profile extends Component {
    render() {
        if (this.props.is_login !== true) {
            return <Redirect to={{ pathname: '/signin' }} />;
        } else {
            return (
                <div className='article-content-wrapper row info-box' style={{marginTop : "50px", marginLeft: '600px'}}>
                <section>
                    <h1 style={{ textAlign : 'center' }}>Profile</h1>
                    <p>
                        <label className='form-label'>Email: </label><br/>
                        <strong><i>{this.props.email}</i></strong>
                    </p>
                    <p>
                        <label className='form-label'>Full Name:</label><br/>
                        <strong><i>{this.props.full_name}</i></strong>
                    </p>
                </section>
                </div>
            );
        }
        
    };
    
    }

export default connect("is_login, email, full_name", actions)(withRouter(Profile));