import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
import Search from '../components/Search';
import ListNews from '../components/ListNews';
import Blog from '../components/Blog';
import Navbar from '../components/Navbar';
import az from '../img/putriayako.jpeg';
import putriayako from '../img/putriayako.jpeg';
import { connect } from 'unistore/react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'unistore/react';
import { actions } from '../Store';

const apiKey = "31e59cd2d87747ddbfb14d1c08412411";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=31e59cd2d87747ddbfb14d1c08412411";
const urlNews = "https://newsapi.org/v2/everything?q=rampage&apiKey=31e59cd2d87747ddbfb14d1c08412411";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // listNews: [],
      // blog: [],
      searchText: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount(){
    // axios.get(urlHeadline).then(function(response){
    //     self.setState({listNews : response.data.articles});
    //     //console.log(response.data);
    // })
    // .catch(function(error){
    //     console.log(error);
    // });

    // axios.get(urlNews).then(function(response){
    //     self.setState({blog : response.data.articles});
    //     //console.log(response.data);
    // })
    // .catch(function(error){
    //     console.log(error);
    // });
    // this.props.ListNews5()
    this.props.listNews5()
    this.props.blog5()
  }
  
  doSearch(keyword){
    console.log(keyword)
    let self = this;
    let urlSearch = baseUrl + "everything?q="+ keyword + "&apiKey=" + apiKey;
    // console.log("testing do search", urlSearch)
    if(keyword.length > 2){
        axios.get(urlSearch).then(function(response){
          console.log(response)
            self.setState({blog : response.data.articles});
            console.log('test response', response)
        }).catch(function(error){
            console.log(error);
        });
    }
  }

  handleChange = e => {
    let value = e.target.value;
    this.setState(
      {
        search: value
      },
      () => {
        this.props.searchNews(value);
      }
    );
  };

  // searchNews = async keywords => {
  //   console.log("searchNews", keywords);
  //   const self = this;
  //   if (keywords.length > 2) {
  //     try {
  //       const response = await axios.get(
  //         baseUrl + "everything?q=" + keywords + "&apiKey=" + apiKey
  //       );
  //       console.log(response);
  //       self.setState({ blog : response.data.articles })
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }

  render() {
    console.log("here")
    const { listNews } = this.state;
    const { blog } = this.state;
    const { is_login } = this.state;
    // const { is_login  } = JSON.parse(localStorage.getItem("is_login"));
    console.log('is_login', is_login);
    console.log('ini data dari global store', this.props.blog)

    // if (is_login === null){
    //   return <Redirect to={{pathname: '/signin'}} />;
    // }
    // else{
    return (
      <div className="App">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
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
            <Search handleChange={this.handleChange}/><br></br>
              {this.props.listNews.slice(0,5).map((item, key) => {
                const title = item.title !== null ? item.title : "";
                return <ListNews key={key} title={title} index={key} />;
              })}
            </div>
            <div class="col-md-8">
              {this.props.blog.slice(0,5).map((item, key) => {
                const src_img = item.urlToImage === null ? az : item.urlToImage;
                const content = item.content !== null ? item.content : "";
                const title = item.title !== null ? item.title : "";
                const index = key;
                return <Blog key={key} title={title} img={src_img} content={content} index={key} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );

  }
}

// render() {
//   console.log("here")
//   const {listNews} = this.state;
//   const {blog} = this.state;
//   const is_login = JSON.parse(localStorage.getItem("is_login"));
//   if(is_login === null) {
//     return <Redirect to = {{pathname : "/signin"}}/>
//   }
//   else {
//     return (
//       <div>
//         <Blog handleChange={this.handleChange} listNews={listNews} blog={blog}/>
//       </div>
//     );
//   }
//   }
// }

//   return (
//     <div className="App">
//           <meta charset="utf-8"/>
//           <meta name="viewport" content="width=device-width, initial-scale=1"/>
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
//           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
//       <div class="row">
//           <div class="col-md-12">
//               <Navbar />
//           </div>
//       </div>

//       <div class="container">
//           <div class="row">
//               <div class="col-md-4">
//                   <Search title="Cari" placeholder="type keyword.."/><br></br>
//                   {listNews.slice(0,5).map((item, key) => {
//                     const title = item.title !== null ? item.title : "";
//                     return <ListNews key={key} title={title} index={key}/>;
//                   })}
//               </div>
//               <div cldeLogind-8">
//                   {bldeLogin,5).map((item, key) => {
//                     cdeLoginmg = item.urlToImage === null ? az : item.urlToImage;
//                     cdeLoginnt = item.content !== null ? item.content: "";
//                     cdeLogin = item.title !== null ? item.title : "";
//                     cdeLogin = key;
//                     rdeLoging key={key} title={title} img={src_img} content={content} index={key}/>;
//                   })}deLogin
//               </div>
//           </div>
//       </div>
//     </div>
//   );
// }


// export default News;
export default connect("is_login, username, password, listNews, blog", actions) (withRouter(News))