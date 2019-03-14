import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';


// class ListNews extends Component {
//     render() {
//       return (        
//       <div className="App">
//         <div class="single category">
//         <h3 class="side-title">Berita Terkini</h3>
//         <ul class="list-unstyled">
//             <li><span class="list-urutan">#1 </span><a href="" title="">Gabung Alpha Tech Academy Sekarang</a></li>
//             <li><span class="list-urutan">#2 </span><a href="" title="">Ada apa antara Kobar dan Hasan?</a></li>
//             <li><span class="list-urutan">#3 </span><a href="" title="">Mengenal Arafat sang master Python</a></li>
//             <li><span class="list-urutan">#4 </span><a href="" title="">Belajar react-Js itu seru. Kamu setuju?</a></li>
//             <li><span class="list-urutan">#5 </span><a href="" title="">Sudahkah kamu sehat mental?</a></li>
//         </ul>
//         </div>
//       </div>
//       );
//     }
//   }
  

// export default ListNews;


const style = {
  maxWidth: '200px'
};

const ListNews = props => {
  return (
    // <section className="content">
    //   <h3>{props.title}</h3>
    //   <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />
    //   <div className="right">{props.content}</div>
    // </section>



    <ul class="list-unstyled">
      <li><span class="list-urutan" style={{color: 'blue'}}>#{props.index + 1}</span>
      <br></br>
      <a href="" title="" style={{textAlign: 'left'}}>{props.title}</a></li>
    </ul>
  );
};

ListNews.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
  // url: PropTypes.string
};

export default ListNews;

