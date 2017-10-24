import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import LoginForm from "../forms/LoginForm";



class LoginPage extends React.Component{

    submit(data){
        Axios.post('/user/register', data).then(function(res){
            console.log(res);
        })
    }


    render(){
        return(
        <div>
            <h1>Login Page</h1>
            <LoginForm submit={this.submit} />
        </div>
        )
    }
}



export default LoginPage;