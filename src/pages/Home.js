import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/style.css';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
      return (        
      <div className="App">
        <Header />
        <HomeContent />
        <Footer />
      </div>
      );
    }
  }

export default Home;