import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
import putriayako from '../img/putriayako.jpeg'


// class Blog extends Component {
//     render() {
//       return (        
//       <div className="App">
//         <div class="container" style={{width: '100%'}}>
//             <div class="well">
//         <div class="media">
//             <a class="pull-left" href="#">
//                 <img class="media-object" src={putriayako} style={{height: '125px', width: '175px'}}/>
//             </a>
//             <div class="media-body">
//                 <h4 class="media-heading">Receta 1</h4>
//             <p class="text-right">By Francisco</p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
//     Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
//     dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
//     Aliquam in felis sit amet augue.</p>
//             <ul class="list-inline list-unstyled">
//                 <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
//                 <li>|</li>
//                 <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
//                 <li>|</li>
//                 <li>
//                 <span class="glyphicon glyphicon-star"></span>
//                             <span class="glyphicon glyphicon-star"></span>
//                             <span class="glyphicon glyphicon-star"></span>
//                             <span class="glyphicon glyphicon-star"></span>
//                             <span class="glyphicon glyphicon-star-empty"></span>
//                 </li>
//                 <li>|</li>
//                 <li>
//                 {/* <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ --> */}
//                 <span><i class="fa fa-facebook-square"></i></span>
//                 <span><i class="fa fa-twitter-square"></i></span>
//                 <span><i class="fa fa-google-plus-square"></i></span>
//                 </li>
//                 </ul>
//         </div>
//         </div>
//     </div>
//             </div>
//       </div>

//       );
//     }
//   }
  



//   const style = {
//     maxWidth: '200px'
//   };
  
const Blog = props => {
return (
    // <section className="content">
    //   <h3>{props.title}</h3>
    //   <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />
    //   <div className="right">{props.content}</div>
    // </section>

    <div class="container" style={{width: '100%'}}>
        <div class="well">
            <div class="media">
                <a class="pull-left" href="#">
                    <img class="media-object" src={props.img} style={{height: '125px', width: '175px'}}/>
                </a>
            <div class="media-body">
                <h4 class="media-heading">{props.title}</h4>
                    <p class="text-right">By Evi</p>
                    <p>{props.content}</p>
                <ul class="list-inline list-unstyled">
                    <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                    <li>|</li>
                    <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                    <li>|</li>
                    <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                </li>
                <li>|</li>
                <li>
                <span><i class="fa fa-facebook-square"></i></span>
                <span><i class="fa fa-twitter-square"></i></span>
                <span><i class="fa fa-google-plus-square"></i></span>
                </li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                    
                );
                };

Blog.propTypes = {
index: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
content: PropTypes.string.isRequired,
img: PropTypes.string
};

// export default ListNews;
  



export default Blog;


