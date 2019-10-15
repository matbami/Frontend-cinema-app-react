import React from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import Image from 'react-render-image';
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
import '../movie.css'


export default class View extends React.Component {
    constructor(props){
        super(props);
       this.state = {
           todoItem:{},
           noOfseats:''
       }
       
    }
    handleChange = event =>{
        this.setState({noOfseats:event.target.value});
       }
    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            movie: this.props.match.params.movieId,
            numberOfSeats:this.state.noOfseats,
            user:!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.user:null
           
            
        };

        axios.post('http://localhost:1337/payment/create' , user)
        .then(res =>{
            console.log(res);
            console.log(res.data);
            console.log("fish")
        })
    }
   
      async componentDidMount() {
        const id = this.props.match.params.movieId // we grab the ID from the URL
        
        const data = await axios.get(`http://localhost:1337/movies/${id}`)
        // console.log(data)
        
        
         this.setState({todoItem:data.data})
         
        
      }

  render(){
      
    console.log(this.state.todoItem)

      return(
          <div class = "first">
          <div class="col-sm-3">
          <div class ="card">
              <h1>{!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.name:null}</h1>
              {/* {this.state.todoItem.keys >= 1 ? this.state.todoItem.movie.basePrice:null} */}
               {/* {this.state.todoItem.movie} */}
              


              <Image src={!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.photo:null} loading="🔄" errored="❌">
  {({image, loaded, errored}) => {
    return <img src={!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.photo:null} alt = "fg" />;
  }}
</Image>
<h4>Price: NGN{!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.basePrice:null}</h4>

<h6>Description: {!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.description:null}</h6>
<h6>Type: {!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.movietype:null}</h6>





              {/* <li>{!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.photo:null}</li> */}
              <h6>Starting: {!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.starting:null}</h6>
              <h6>Cast: {!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.starring:null}</h6>
              </div>
              {/* <li>{!isEmpty(this.state.todoItem) ? this.state.todoItem.movie.user:null}</li> */}
              <form onSubmit ={this.handleSubmit} >
              {/* <input type= 'text' placeholder = 'noOfseats' onChange ={event => this.setState({noOfseats:event.target.value})}/> */}
              <button type= 'submit'><Link to={`/pay`}>Make payment</Link></button>
              </form>
              </div>
              
            
           
    
            
            
       


  </div>
  )}
      
}
