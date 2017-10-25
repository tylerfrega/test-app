import React from 'react';
//import PropTypes from 'prop-types';
import Axios from 'axios';
import LoginForm from "../forms/LoginForm";



class LoginPage extends React.Component{
constructor(props){
    super(props);
    console.log(props)
    this.submitUserData = this.submitUserData.bind(this)
    
}
 
   submitUserData(data){
       this.props.loginUser(data)
    }


    render(){
        return(
        <div>
            <h1>Login Page</h1>
            <LoginForm submit={this.submitUserData} />
        </div>
        )
    }
}



export default LoginPage;