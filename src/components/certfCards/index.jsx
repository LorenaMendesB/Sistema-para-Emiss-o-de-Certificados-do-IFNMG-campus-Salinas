import React from 'react';
import './styled.css';

import backGround from '../../assets/modeloBackground.png';

export function CertfCard(props){
    return(
        <div className='cardBox'>
            <div className='imageBox'>
                <img src={backGround} className="backGroundImg"></img>
            </div>
            <div className='sobreBox'>
                <p className='titulo'>{props.title}</p>
                <p className='data'>Editado em: {props.date}</p>
            </div>
        </div>
    );
}