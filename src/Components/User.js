import React from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import '../User.css'
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
{/* <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/> */}

export default class User extends React.Component {

  
       state = {
            firstName :'',
            lastName  :'',
            age : '',
            email : '',
            password : '',
            mobile : ''
         }
     handleChange = event =>{
         this.setState({firstName:event.target.value});
         this.setState({lastName:event.target.value});
         this.setState({age:event.target.value});
         this.setState({email:event.target.value});
         this.setState({password:event.target.value});
         this.setState({mobile:event.target.value});
     }
     handleSubmit = event =>{
         event.preventDefault();

         const user = {
             firstName: this.state.firstName,
             lastName: this.state.lastName,
             age: this.state.age,
             email: this.state.email,
             mobile: this.state.mobile,
             password: this.state.password
             
         };

         axios.post('http://localhost:1337/user/signup' , user)
         .then(res =>{
             console.log(res);
             console.log(res.data);
 

 
         })
 
     }

    
    
    render(){
        return(
        <div className ='first'>
            {/* <form onSubmit ={this.handleSubmit} > */}
           
      
      {/* <input type= 'text' placeholder = 'firstName' onChange ={event => this.setState({firstName:event.target.value})}/>
      <input type= 'text' placeholder = 'lastName'  onChange ={event => this.setState({lastName:event.target.value})}/>
      <input type= 'text' placeholder = 'email'  onChange ={event => this.setState({email:event.target.value})}/>
      <input type= 'text' placeholder = 'password' onChange ={event => this.setState({password:event.target.value})}/>
      <input type= 'text' placeholder = 'age' onChange ={event => this.setState({age:event.target.value})}/>
      <input type= 'text' placeholder = 'mobile' onChange ={event => this.setState({mobile:event.target.value})}/> */}
      
      <div className="card" id = "chis">
      <h1>Go-Movie</h1>

      <h2>Signup</h2>   
      <form onSubmit ={this.handleSubmit}>
      
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">FirstName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange ={event => this.setState({firstName:event.target.value})}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">lastName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange ={event => this.setState({lastName:event.target.value})}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange ={event => this.setState({age:event.target.value})}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Mobile</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange ={event => this.setState({mobile:event.target.value})}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange ={event => this.setState({email:event.target.value})}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange ={event => this.setState({password:event.target.value})}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"><a href ="/movies">Submit</a></button>
  <Link to={`/login`}>already have an account Sign in</Link>
</form>
</div>
{/* <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div> */}



     {/* <ButtonToolbar><Button variant = "primary" type= 'submit'>Sign up</Button></ButtonToolbar> 
     
      <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <label htmlFor="basic-url">Your vanity URL</label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        https://example.com/users/
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>



            </form> */}
        
        
         
        
        </div>
        )
    }
}
