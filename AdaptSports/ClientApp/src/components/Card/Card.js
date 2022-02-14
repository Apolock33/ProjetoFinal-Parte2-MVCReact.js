import { Component } from "react";
import './Card.css'

export default class App extends Component {
    render(props) {
        return (
            <div className="Cards">
                <div className="Card">
                    <img className="imgCard" src={props.img} alt='imgCard'/>
                </div>
                
            </div>
        );
    }
}