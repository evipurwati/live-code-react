// import React, { Component } from 'react';
// import PropTypes from "prop-types";
// // import PropTypes from 'prop-types';
// // // import Search from 'react-search'
// // import REACTDOM from 'react-dom'
// import '../css/bootstrap.css'
// import '../css/bootstrap.min.css'
// import '../css/style.css';


// class Search extends Component {

//   render() {
//     return (
//       <section className="topsection">
//         <h4>{this.props.title}</h4>
//           <input 
//             type="text"
//             name="search"
//             id="search"
//             value={this.props.keyword}
//             placeholder={this.props.placeholder}
//             onChange={this.props.doSearch}
//           />
//       </section>
//     );
//   }
// }

// Search.propTypes = {
//   title: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired
// };

// export default Search; 

import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../css/style.css';
import '../css/bootstrap.min.css';

class Search extends Component {
  render() {
    return (
      <div className="App">
                    <div class="row" style={{marginLeft:'40px'}}>
                <div class="well">
                    <h5><i class="fa fa-search"></i> News Search</h5>
                    <div class="input-group">
                    <input onChange={this.props.handleChange} type="text" placeholder="Search Here" />
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;