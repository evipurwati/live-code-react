import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
import Search from '../components/Search';
import ListNews from '../components/ListNews';
import Blog from '../components/Blog';
import Navbar from '../components/Navbar';
import az from '../img/putriayako.jpeg';
import putriayako from '../img/putriayako.jpeg'

const apiKey = "31e59cd2d87747ddbfb14d1c08412411";
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=31e59cd2d87747ddbfb14d1c08412411"; 
const urlNews = "https://newsapi.org/v2/everything?q=politik&apiKey=31e59cd2d87747ddbfb14d1c08412411"; 

class Sepakbola extends Component {
  constructor (props){
    super(props);
    this.state = {
      listNews: [],
      blog: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios 
      .get(urlHeadline)
      .then(function (response) {
        self.setState({ listNews: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);        
      });
    axios 
      .get(urlNews)
      .then(function (response) {
        self.setState({ blog: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);        
      });
  }
  
  render() {
    console.log("here")
    const {listNews} = this.state;
    const {blog} = this.state;
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
                <div class="col-md-4">
                    <Search title="Cari" placeholder="type keyword.."/><br></br>
                    {listNews.slice(0,5).map((item, key) => {
                      const title = item.title !== null ? item.title : "";
                      return <ListNews key={key} title={title} index={key}/>;
                    })}
                </div>
                <div class="col-md-8">
                    {blog.slice(0,5).map((item, key) => {
                      const src_img = item.urlToImage === null ? az : item.urlToImage;
                      const content = item.content !== null ? item.content: "";
                      const title = item.title !== null ? item.title : "";
                      const index = key;
                      return <Blog key={key} title={title} img={src_img} content={content} index={key}/>;
                    })}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Sepakbola;