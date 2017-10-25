import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';  
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
    state = {
        data:{
            username:"",
            password: "",
        },
        loding: false,
        errors:{}
    };

    onChange = e => 
        this.setState({ 
           data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e =>{
        const errors = this.validate(this.state.data);  
        this.setState({ errors }); 

        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }else{console.log(errors)}
    };

    validate = (data) => {
        const errors = {}
        if(!data.username) errors.username = "Cant be blank";
        if(!data.password) errors.password = "Cant be blank";
        return errors;
    }
        

    render(){
        const { data, errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>

                <Form.Field error={!!errors.username}>
                    <lable htmlFor="username">User Name</lable>
                    <input type="text" 
                           id="username"
                           name="username"
                           placeholder="name"
                           value={data.username}
                           onChange={this.onChange}
                    />
                    {errors.username && <InlineError text={errors.username} />}
                </Form.Field>
                
               
        
                <Form.Field error={!!errors.password}>
                    <lable htmlFor="password">Password</lable>
                    <input type="password"
                           name="password" 
                           id="password"
                           placeholder="make it secure"
                           value={data.password}
                           onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                
                <Button primary>Login</Button>
            </Form>
        )
    }
}



export default LoginForm;