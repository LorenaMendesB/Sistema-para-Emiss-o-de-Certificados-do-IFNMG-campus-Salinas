import styled from 'styled-components'; //Instale com npm install --save styled-components
export const AreaSearch = styled.div`
position: absolute;
left: 330px;
top: 21px;
@media (min-width: 1764px){
input{
    position: absolute;
    width: 450px;
    height: 45px;
    left: 34px;
    top: 21px;
    background: #D9D9D9;
    border-radius: 61px;
    padding: 0px 45px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    &:hover{
        border: none;
    }
}
#Search::-webkit-search-cancel-button {
    position: relative;
    background-image: url(cancel.svg);
    background-repeat: no-repeat;
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    left: 20px;
 
  }
#Search::placeholder {
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: rgba(69, 68, 68, 0.5);

}
.bi{
position: absolute;
left: 45px;
top: 31px;
bottom: 94.81%;
font-size: 25px;
background: #5E5656;
color: #5E5656;
    &:hover{
        color: #9A9191;
    }
}
}
@media (max-width: 1763px){
    input{
        position: absolute;
        width: 450px;
        height: 45px;
        left: 14px;
        top: 21px;
        background: #D9D9D9;
        border-radius: 61px;
        padding: 0px 45px;
        border: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        &:hover{
            border: none;
        }
    }
    #Search::-webkit-search-cancel-button {
        position: relative;
        background-image: url(cancel.svg);
        background-repeat: no-repeat;
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        left: 20px;
     
      }
    #Search::placeholder {
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        margin-left: 20px;
        color: rgba(69, 68, 68, 0.5);
    
    }
    .bi{
    position: absolute;
    left: 26px;
    top: 31px;
    bottom: 94.81%;
    font-size: 25px;
    background: #5E5656;
    color: #5E5656;
        &:hover{
            color: #9A9191;
        }
    }


}
@media (max-width: 768px){

    input{
        position: absolute;
        width: 400px;
        height: 45px;
        left: 6px;
        top: 21px;
        background: #D9D9D9;
        border-radius: 61px;
        padding: 0px 45px;
        border: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        &:hover{
            border: none;
        }
    }
    #Search::-webkit-search-cancel-button {
        position: relative;
        background-image: url(cancel.svg);
        background-repeat: no-repeat;
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        left: 20px;
     
      }
    #Search::placeholder {
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        margin-left: 20px;
        color: rgba(69, 68, 68, 0.5);
    
    }
    .bi{
    position: absolute;
    left: 18px;
    top: 31px;
    bottom: 94.81%;
    font-size: 25px;
    background: #5E5656;
    color: #5E5656;
        &:hover{
            color: #9A9191;
        }
    }

}
`;
