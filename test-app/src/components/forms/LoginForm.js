import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';  
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
    state = {
        data:{
            name:"",
            email: "",
            username:"",
            password: "",
            password2:""
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
        }
    };

    validate = (data) => {
        const errors = {}
       // if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if(!data.password) errors.password = "Cant be blank";
        return errors;
    }
        

    render(){
        const { data, errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <lable htmlFor="name">Name</lable>
                    <input type="text" 
                           id="name"
                           name="name"
                           placeholder="turd beasly"
                           value={data.name}
                           onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.email}>
                    <lable htmlFor="email">Email</lable>
                    <input type="text" 
                           id="email"
                           name="email"
                           placeholder="example@example.com"
                           value={data.email}
                           onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
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
                
                <Form.Field error={!!errors.email}>
                    <lable htmlFor="username">User Name</lable>
                    <input type="text" 
                           id="username"
                           name="username"
                           placeholder="dickhead"
                           value={data.username}
                           onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <lable htmlFor="password">Confirm Password</lable>
                    <input type="password2"
                           name="password2" 
                           id="password2"
                           placeholder="make it secure"
                           value={data.password2}
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