import React from 'react';
import axios from 'axios';
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
import images from './images'
import '../movie.css'
import Image from 'react-render-image';


export default class Movie extends React.Component {

  
       state = {
           movies:[]
         }
     componentDidMount(){
         axios.get("http://localhost:1337/movies")
         .then(res => {
             const movies = res.data;
            //  console.log(movies)
             this.setState({movies:movies.movie})
         })
     }

     render(){
         return(
             <div class = "sage">
                 <h2 class = "jac">Movies</h2>
      
                 
                 <div class="row">  <div class="col-sm-3">  <ul className ="fish">{this.state.movies.map(movie =><Link to={`/movies/${movie.id}`}>
                
                 <div class="card">
      <div class="card-body">
        <h5 class="card-title"><Image src={movie.photo} loading="🔄" errored="❌">
  {({image, loaded, errored}) => {
    return <img src={movie.photo} />;
  }}</Image></h5>
        <p class="card-text">{movie.name}</p>
        <p class="card-text">{movie.rating}</p>
        <a href="#" class="btn btn-primary">Pay Now</a>
      </div></div>
    
           
              
</Link>)} </ul>  </div></div></div>


         )
     }
  
}
