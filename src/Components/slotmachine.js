import React from 'react';
import '../App.css';

class Machine extends React.Component{
    render(){
        let icon1= this.props.icon[Math.floor(Math.random() * 3)];
        let icon2= this.props.icon[Math.floor(Math.random() * 3)];
        let icon3= this.props.icon[Math.floor(Math.random() * 3)];
        const winner = (icon1===icon2) && (icon2===icon3);
        return(
            
            <div>
                <h1>Slot Machines!</h1>
                <p>{icon1}{icon2}{icon3}</p>
                <p>{winner? "Winner!": "Loser!" }</p>
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
        </div>
        )
        
    }

}

export default SlotMachine