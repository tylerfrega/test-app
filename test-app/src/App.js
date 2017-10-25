import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';
import Axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.setUser = this.setUser.bind(this)
    // this.setUser = this.setUser.bind(this)
    // this.login = this.login.bind(this)
    this.state = {
      user:''
    }
  }


  setUser(user){
    console.log("setUser called");
    this.setState({
      user: user
    });
  }

  login(user){
    let userData;
    
    Axios.post('/user/login', user).then(function(res){
      console.log(res.data);
      console.log('tits')
     this.setUser(res.user);
  })
  }


  render(){
    return (
    <BrowserRouter>
      <div className="ui container">
        <Route path="/" 
               exact component={() => <HomePage user={'this.state.user'} />}
        />

        <Route path="/register" 
               exact component={() => <RegisterPage setCurrentUser={this.setUser} />}
        />

        <Route path="/login" 
               exact component={() => <LoginPage loginUser={this.login.bind(this)} />}
        />
      </div>
    </BrowserRouter>)
  }
}

export default App;

