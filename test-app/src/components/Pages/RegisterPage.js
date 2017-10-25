import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import RegisterForm from "../forms/RegisterForm";



class RegisterPage extends React.Component{

    componentDidMount(){
        //console.log(this.props);
    }
    submit(data){
        Axios.post('/user/register', data).then(function(res){
            console.log(res);
            //this.props.setCurrentUser(res);
        })
    }


    render(){
        return(
        <div>
            <h1>Register Page</h1>
            <RegisterForm submit={this.submit} />
        </div>
        )
    }
}



export default RegisterPage;