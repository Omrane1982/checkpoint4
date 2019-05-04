import React, { Component } from 'react';
import WIN_20190426_14_21_40_Pro from './WIN_20190426_14_21_40_Pro.jpg';



class Card extends Component {

    render() {

        return (
            <div style={{
                border:'solid 3px '+((this.props.gender=="male")?"blue":"yellow")

            }} className="Card">
                <h1>{this.props.name}</h1>
                <h2> {this.props.gender}</h2>



                <img src={WIN_20190426_14_21_40_Pro} className="foto decor" alt="logo" />
                <p>
                    Contrôleur de Gestion
                    ste Privée
</p>
            </div>
        );

    }
}
export default Card;