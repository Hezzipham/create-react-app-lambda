import React from 'react';
import '../App.css';


class Hello extends React.Component {
    render(){
        return (<h1>Hello {this.props.from} to {this.props.to}</h1>
            )
    }
}
export default Hello;