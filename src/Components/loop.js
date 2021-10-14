import React, {Component} from 'react';
import '../App.css';

class Friend extends Component {
    render(){
        const {name, hobbies} = this.props;
        const hobby = hobbies.map(hobby => <li><h2>{hobby}</h2></li>)
        return(
            <div>
                <h1>Hello {name}</h1>
                <ul>
                    {hobby}
                </ul>
            </div>
        )
    }
}

class Loop extends React.Component {
    render(){
        return(
        <div>
            <Friend
            name ="Elton" 
            hobbies ={["piano", "singing","guitar"]}
            />
        </div>
        )
        
    }

}

export default Loop