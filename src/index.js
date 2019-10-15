import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
import User from './Components/User'
import login from './Components/login'
import Movie from './Components/movies'
import PayStack from './Components/paystack'
import * as serviceWorker from './serviceWorker';
import ticket from './Components/ticket'
import View from './Components/viewmovie';
import Login from './Components/login'
import Appj from './Components/modal'
import { Redirect } from 'react-router';

// import PayStack from './Components/paystack';


const routing = (
    <Router>
        <div>
            <Route exact path ="/" component = {User}/>
            <Route path ="/login" component = {login}/>
            <Route exact path ="/movies" component = {Movie}/>
            <Route exact path ="/movies/:movieId" component = {View}/>
            <Route exact path ="/pay" component = {PayStack}/>
            <Route exact path ="/ticket" component = {Appj}/>
           
            {/* <Route exact path ="/ticket" component = {ticket}/> */}
        </div>


    </Router>
)

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
