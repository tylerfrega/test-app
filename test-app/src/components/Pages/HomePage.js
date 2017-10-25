import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}


export default HomePage;