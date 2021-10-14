import React, {Component} from 'react';
import '../App.css';

class Machine extends Component{
    render(){
        let icon1= this.props.icon[Math.floor(Math.random() * 3)];
        let icon2= this.props.icon[Math.floor(Math.random() * 3)];
        let icon3= this.props.icon[Math.floor(Math.random() * 3)];
        const winner = (icon1===icon2) && (icon2===icon3);
        const iconBorder = {fontSize: "2em", color:"white"}
        return(
            
            <div className={winner? "Machine-win my-5 mx-5" : "Machine-lose my-5 mx-5"}>
                <h1>Slot Machines!</h1>
                <h1>{icon1}{icon2}{icon3}</h1>
                <p style={iconBorder}>{winner? "Winner!": "Loser!" }</p>
            </div>
        )
    }
}

class SlotMachine extends React.Component {
    render(){
        return(
        <div>
            <Machine
                icon={["🍑","🍌","🍏"]} 
            />
            <Machine
                icon={["🍇","🍍","🥥"]} 
            />
            <Machine
                icon={["🍒","🥬","🫐"]} 
            />
        </div>
        )
        
    }

}

export default SlotMachine