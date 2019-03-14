import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
import Movie from '../components/Blog';
import Navbar from '../components/Navbar';
import action from '../img/action.jpg';
import putriayako from '../img/putriayako.jpeg'

const urlMovie = "https://api-todofancy.herokuapp.com/api/movies";

class Comedy extends Component {
  constructor (props){
    super(props);
    this.state = {
      listMovie: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios 
      .get(urlMovie)
      .then(function (response) {
        self.setState({ listMovie: response.data.movies });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);        
      });
  }
  
  render() {
    console.log("here")
    const {listMovie} = this.state;
    return (
      <div className="App">
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <div class="row">
            <div class="col-md-12">
                <Navbar />
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    {listMovie.filter(movie => movie.Category === 'comedy').map((item, key) => {
                      const src_img = item.Poster === null ? action : item.Poster;
                      const title = item.Title !== null ? item.Title : "";
                      const year = item.Year !== null ? item.Year: "";
                      const synopsis = item.Synopsis !== null ? item.Synopsis: "";
                      const index = key;
                      return <Movie key={key} title={title} img={src_img} year={year} index={key} synopsis={synopsis} />;
                    })}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Comedy;