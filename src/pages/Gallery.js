import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
import Header from '../components/Header';
import GalleryContent from '../components/GalleryContent';
import Footer from '../components/Footer';

class Gallery extends Component {
    render() {
      return (        
      <div className="App">
            <Header />
            <GalleryContent />
            <Footer />
        </div>

      );
    }
  }
  

export default Gallery;