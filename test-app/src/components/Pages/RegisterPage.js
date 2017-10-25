import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import RegisterForm from "../forms/RegisterForm";



class RegisterPage extends React.Component{

    componentDidMount(){
        console.log(this.props);
    }
    submit(data, cb){


        Axios.post('/user/register', data).then(function(res){
            console.log(res);
            cb(res);
        })
    }


    render(){
        return(
        <div>
            <h1>Register Page</h1>
            <RegisterForm submit={this.submit} setUser={this.props.setCurrentUser} />
        </div>
        )
    }
}



export default RegisterPage;