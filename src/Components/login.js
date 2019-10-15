import React from 'react';
import axios from 'axios';
import '../login.css'



export default class Login extends React.Component {

  
       state = {
            
            email : '',
            password : '',
           
         }
     handleChange = event =>{
         
         this.setState({email:event.target.value});
         this.setState({password:event.target.value});
         
     }
     handleSubmit = event =>{
         event.preventDefault();

         const user = {
           
             email: this.state.email,
              password: this.state.password
             
         };

         axios.post('http://localhost:1337/user/login ' , user)
         .then(res =>{
             console.log(res);
             console.log(res.data);
 
             
 
         })
 
     }

    
    
    render(){
        return(
        <div className = 'jack'>
        <div className="card" id = "chi">
      <h1>Go-Movie</h1>

      <h3>Login</h3>
            <form onSubmit ={this.handleSubmit} >
            <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange ={event => this.setState({email:event.target.value})}/>
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp"  onChange ={event => this.setState({password:event.target.value})}/>
    </div>
      
            
      
      <button type= 'submit' className="btn btn-primary"><a href ="/movies">Sign In</a></button>


            </form>
            </div>
        
        
         
        
        </div>
        )
    }
}
