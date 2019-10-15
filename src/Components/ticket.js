// // import React from 'react';
// // import axios from 'axios';
// // import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
// // import images from './images'


// // export default class Ticket extends React.Component {

  
// //        state = {
// //            movies:[]
// //          }
// //      componentDidMount(){
// //          axios.get("http://localhost:1337/movies")
// //          .then(res => {
// //              const movies = res.data;
// //             //  console.log(movies)
// //              this.setState({movies:movies.movie})
// //          })
// //      }

// //      render(){
// //          return(
// //              <div>
// //             <ul>{this.state.movies.map(movie =><Link to={`/movies/${movie.id}`}><li key={movie.id}><img src = "{movie.photo}"/>{movie.name}{movie.rating}</li></Link>)}</ul>
// //              {/* <ul>{this.state.movies.map(movie =><li key={movie.id}>{movie.rating}</li>)}</ul> */}
          
// //              {/* <img src = {"C:/Users/AYOBAMI/Documents/cinemafrontend3/src/images/download (3).jpg"}/> */}
// //              { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)}
             
// //              </div>
// //          )
// //      }
  
// // }

// import React, { Component } from 'react';

// import Modal from './Components/Modal/Modal.js';

// class ticket extends Component {

//     constructor() {
//         super();

//         this.state = {
//             isShowing: false
//         }
//     }

//     openModalHandler = () => {
//         this.setState({
//             isShowing: true
//         });
//     }

//     closeModalHandler = () => {
//         this.setState({
//             isShowing: false
//         });
//     }

//     render () {
//         return (
//             <div>
//                 { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

//                 <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

//                 <Modal
//                     className="modal"
//                     show={this.state.isShowing}
//                     close={this.closeModalHandler}>
//                         Maybe aircrafts fly very high because they don't want to be seen in plane sight?
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default ticket;