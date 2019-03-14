import React, { Component } from 'react';
import MainRoute from './Routes/MainRoute';
import { withRouter } from 'react-router-dom';

//App styles
import './css/style.css';

// Custom components
import Navbar from './components/Navbar';

class AppAjax extends Component {
    postSignout = () => {
        localStorage.removeItem('is_login');
        this.props.history.push('/');
    };
    render() {
        return (
            <div className='App'>
                {/* <Navbar postSignout={this.postSignout} /> */}
                {/* <Navbar /> */}
                <MainRoute postSignout={this.postSignout} />
            </div>
        );
    }
}

export default withRouter(AppAjax);