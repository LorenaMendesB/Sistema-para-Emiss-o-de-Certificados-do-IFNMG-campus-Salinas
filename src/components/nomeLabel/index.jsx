import React from 'react';
import './styled.css';

export function NomeLabel(props){

    return(
        <div className='background'>
            <p className='label'>Nome: {props.name}</p>
            <div className="pdf-area">
                <i className="bi bi-file-pdf-fill"></i>
                <p className="pdf">PDF</p>
            </div>
            <hr className="line-vertical"/>
            <button className="delete"><i className="bi bi-trash3-fill"></i></button>
        </div>
    );

}
