import styled from 'styled-components'; //Instale com npm install --save styled-components
export const AreaSearch = styled.div`
position: absolute;
left: 330px;
top: 21px;
input{
    position: absolute;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    background: #D9D9D9;
    border-radius: 61px;
    padding: 0px 45px;
    font-size: 15px;
    line-height: 18px;
    &:hover{
        border: none;
    }
    
}
.bi{
position: absolute;
left: 45px;
top: 31px;
bottom: 94.81%;
font-size: 25px;

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
    background: #5E5656;
    color: #5E5656;
    &:hover{
        color: #9A9191;
    }
}
@media (min-width: 1764px){
input{
    
    width: 450px;
    height: 45px;
    left: 34px;
    top: 21px;
   
}
#Search::-webkit-search-cancel-button {
    
    height: 15px;
    width: 15px;
    left: 20px;
 
  }
#Search::placeholder {
    
    font-size: 15px;
    line-height: 18px;
    margin-left: 20px;
 

}
.bi{

left: 45px;
top: 31px;
bottom: 94.81%;
font-size: 25px;


}
}
@media (max-width: 1763px){
    input{
       
        width: 450px;
        height: 45px;
        left: 14px;
        top: 21px;
        
        font-size: 15px;
        line-height: 18px;
       
    }
    #Search::-webkit-search-cancel-button {
        position: relative;
     
        height: 15px;
        width: 15px;
        left: 20px;
     
      }
    #Search::placeholder {
        
        
        line-height: 18px;
        display: flex;
      
        margin-left: 20px;
        
    
    }
    .bi{
   
    left: 26px;
    top: 31px;
    bottom: 94.81%;
    font-size: 25px;
  
    }


}
@media (max-width: 880px){

    input{
        
        width: 400px;
        height: 45px;
        left: 6px;
        top: 21px;
        font-size: 15px;
        line-height: 18px;
        
    }
    #Search::-webkit-search-cancel-button {
    
        height: 15px;
        width: 15px;
        left: 20px;
     
      }
    #Search::placeholder {
        
     
        font-size: 15px;
        line-height: 18px;
        margin-left: 20px;
      
    
    }
    .bi{
  
    left: 18px;
    top: 31px;
    bottom: 94.81%;
    font-size: 25px;
  

}
@media (max-width: 425px){

    input{
        
        width: 200px;
        height: 35px;
        rigth: 90px;
        left: -45px;
        top: 21px;
        font-size: 9px;
        line-height: 18px;
        padding: 0px 30px;
        right: 9px;
        
    }
    #Search::-webkit-search-cancel-button {
    
        height: 13px;
        width: 13px;
        left: 20px;
     
      }
    #Search::placeholder {
        
     
        font-size: 10px;
        line-height: 18px;
        margin-left: 20px;
      
    
    }
    .bi{
  
    left: -35px;
    top: 28px;
    font-size: 15px;
  

}
`;
