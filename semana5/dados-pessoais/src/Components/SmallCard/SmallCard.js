import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
    return (
        <div className= "smallCard">
            <label>
                <i class = {props.i}></i>
                {props.conteudo}
            </label>
        </div>
    )
}

export default SmallCard