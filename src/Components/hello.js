import React from 'react';
import { FaHistory } from 'react-icons/fa';
import '../App.css';


class Hi extends React.Component {

    render(){
        let bangs = "!".repeat(this.props.bangs)
        return (
        <h1>Hello {this.props.from} to {this.props.to} {bangs}</h1>
            )
    }

}

class Hello extends React.Component {

    render(){
        return ( 
        <div>
            <Hi
        from="Hezzi"
        to="World" 
        num ={3}
        data={[1,2,3,4,5]}
        isFunny = {true}
        bangs={5}
        />
        <Hi
        from="Hahah"
        to="Hihi" 
        num ={3}
        data={[1,2,3,4,5]}
        isFunny = {true}
        bangs={2}
        />
        </div>
        
            )
    }
}
export default Hello;