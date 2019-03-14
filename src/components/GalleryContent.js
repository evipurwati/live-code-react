import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
import icongallery from '../ico/ico-gallery.png';
import img1 from '../img/exp-gallery/jake-allison-1322894-unsplash.jpg';
import img2 from '../img/exp-gallery/jay-lee-1323073-unsplash.jpg';
import img3 from '../img/exp-gallery/nic-yee-1321843-unsplash.jpg';
import img4 from '../img/exp-gallery/nordwood-themes-1319985-unsplash.jpg';
import img5 from '../img/exp-gallery/phil-desforges-1322844-unsplash.jpg';
import img6 from '../img/exp-gallery/ryan-1321510-unsplash.jpg';


class GalleryContent extends Component {
    render() {
      return (        
      <div className="App">
        <section>
            <div class="horrizontal-line">
                <span style={{marginLeft: '50px'}}><img src={icongallery}/></span><span style={{marginLeft: '30px'}}>GALERY</span>
            </div>
            <div class="wrapper-galery row">
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img1} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img2} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img3} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img4} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img5} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img6} alt="" class="galery-photo"/></div>
            </div>
        </section>
        </div>

      );
    }
  }
  

export default GalleryContent;