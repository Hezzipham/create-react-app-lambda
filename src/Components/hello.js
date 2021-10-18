import React, {Component} from 'react';
import '../App.css';


class Hi extends Component {
    static defaultProps = { from: "Hezzi", bangs:3 }
    render(){
        let bangs = "!".repeat(this.props.bangs)
        return (
           <div>
               <h1>Hello from {this.props.from} to {this.props.to} {bangs}</h1>
               <img src={this.props.img} alt="No"/>
           </div> 
        
            )
    }

}

class Hello extends React.Component {

    render(){
        return ( 
        <div>
            <Hi
        to="World" 
        num ={3}
        data={[1,2,3,4,5]}
        isFunny = {true}
        img= "https://images.unsplash.com/photo-1633983054677-4c9cdd4e16cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
        <Hi />
        </div>

        
            )
    }
}
export default Hello;