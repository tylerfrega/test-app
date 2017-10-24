import React, {Component} from 'react';
import Axios from 'axios';



class Button extends Component {


    state = {
        text:'Do thing'
    }

    hitApi(){
        Axios.get('/hitApi').then(function(res){
            console.log(res.data)
           // this.setState({text: res.data.test})
        })  
    }
    render(){
        return(
            <button onClick={this.hitApi}>{this.state.text}</button>
        )
    }
}

export default Button;