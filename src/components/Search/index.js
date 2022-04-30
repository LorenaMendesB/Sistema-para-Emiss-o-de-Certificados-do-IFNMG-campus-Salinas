import React from 'react';
import { AreaSearch } from './styled';
//Instale com npm i react-router-dom
import "bootstrap-icons/font/bootstrap-icons.css"; //Instale com npm i bootstrap-icons


function Search() {
    return (

        <AreaSearch>
            <div className="search-area">
            <input id="Search" name="Search" type="search" placeholder="Digite o título do evento..." />
          <i class="bi bi-search"></i>

            </div>
        </AreaSearch>

    );


}
export default Search;