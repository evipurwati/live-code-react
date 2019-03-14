import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
import Search from '../components/Search';
import ListNews from '../components/ListNews';
import Blog from '../components/Blog';
import Navbar from '../components/Navbar';
import romance from '../img/romance.jpg';
import action from '../img/action.jpg';
import fiction from '../img/fiction.jpg';
import comedy from '../img/comdey.jpg';
import { connect } from 'unistore/react';
import { withRouter } from 'react-router-dom';
import { actions } from '../Store';
import '../css/style-product-country.css';


const urlNews = "https://api-todofancy.herokuapp.com/api/movies?q=romance";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  componentDidMount(){
    this.props.listMovie5()
  }


  render() {
    console.log("here")
    const { listNews } = this.state;
    const { blog } = this.state;
    const { is_login } = this.state;
    console.log('is_login', is_login);
    console.log('ini data dari global store', this.props.blog)

    return (
      <div className="App">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <link href="../css/style-product-country.css" rel="stylesheet" type="text/css" />
        
        <div class="row">
          <div class="col-md-12">
            <Navbar />
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 col-sm-6">
              <div class="product-grid4">
                  <div class="movie-label">
                     <h6>ROMANCE</h6>
                  </div>
                  <div class="product-image4">
                      <a href="#">
                          <img class="pic-1" src={romance}
                              style={{width: '200px', height: '275px'}}/>
                      </a>
                      <ul class="social">
                          <li><a href="#" data-tip="Quick View"><i class="fas fa-eye"></i></a></li>
                      </ul>
                  </div>
                  <div class="product-content">
                      <Link to='/romance'><a class="add-to-cart" href="cart.html">See Movies</a></Link>
                  </div>
              </div>
          </div>
          <div class="col-md-3 col-sm-6">
              <div class="product-grid4">
                  <div class="movie-label">
                     <h6>ACTION</h6>
                  </div>
                  <div class="product-image4">
                      <a href="#">
                          <img class="pic-1" src={action}
                              style={{width: '200px', height: '275px'}}/>
                      </a>
                      <ul class="social">
                          <li><a href="#" data-tip="Quick View"><i class="fas fa-eye"></i></a></li>
                      </ul>
                  </div>
                  <div class="product-content">
                    <Link to='/action'><a class="add-to-cart" href="cart.html">See Movies</a></Link>
                  </div>
              </div>
          </div>
          <div class="col-md-3 col-sm-6">
              <div class="product-grid4">
                  <div class="movie-label">
                     <h6>FICTION</h6>
                  </div>
                  <div class="product-image4">
                      <a href="#">
                          <img class="pic-1" src={fiction}
                              style={{width: '200px', height: '275px'}}/>
                      </a>
                      <ul class="social">
                          <li><a href="#" data-tip="Quick View"><i class="fas fa-eye"></i></a></li>
                      </ul>
                  </div>
                  <div class="product-content">
                    <Link to='/fiction'><a class="add-to-cart" href="cart.html">See Movies</a></Link>
                  </div>
              </div>
          </div>
          <div class="col-md-3 col-sm-6">
              <div class="product-grid4">
                  <div class="movie-label">
                     <h6>COMEDY</h6>
                  </div>
                  <div class="product-image4">
                      <a href="#">
                          <img class="pic-1" src={comedy}
                              style={{width: '200px', height: '275px'}}/>
                      </a>
                      <ul class="social">
                          <li><a href="#" data-tip="Quick View"><i class="fas fa-eye"></i></a></li>
                      </ul>
                  </div>
                  <div class="product-content">
                  <Link to='/comedy'><a class="add-to-cart" href="cart.html">See Movies</a></Link>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );

  }
}

export default connect("is_login, username, password, listMovie, blog", actions) (withRouter(News))