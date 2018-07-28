import React from 'react';
import './footer.css';

const footer = (props) =>{
    return(
        <div className="footer">
            <ul>
                <li> <h4>Made with love at SIF</h4> </li>
                <li> An affiliate of <a href="_blank">FGC</a> </li>
            </ul>
        </div>
    );
}

export default footer;