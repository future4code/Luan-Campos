import React from 'react';
import './ImageButton.css';

function ImageButton(props) {
    return (
        <div className= "imageButton">
            {props.button}
        </div>
    )
}

export default ImageButton