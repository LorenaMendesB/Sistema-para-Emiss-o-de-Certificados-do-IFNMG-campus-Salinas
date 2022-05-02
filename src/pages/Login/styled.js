import styled from 'styled-components';
export const AreaLogin = styled.div`
    padding: 30px;
    width:350px;
    margin: auto;
    margin-top: 120px;
    text-align: center;
    justify-content: center;
    height: 395px;

h1{

    
    left: 908px;
    margin-top: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 59px;
    align-items: center;
    text-align: center;    
    color: #092853;

}
.form-user{

    width: 350px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #000000;
    
}
input{
    width: 270px;
    margin-top:2px;
    height: 50px;
    background: #FFFFFF;
    border: 3px solid #EB124B;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding: 0px 40px;
   
  
   
   

    &hover{
        border: 3px solid #EB124B;
    }
    
    
}
#user::placeholder {
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #C4C4C4;

}
#password::placeholder {

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #C4C4C4;
    
}
.footerLogin{
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    align-items: right;
    text-align: right;
    color: #454444;   
}

.bi{
    position: absolute;
    font-size: 35px;
    left: 525px;
    margin-top: 7px;
    margin-bottom: 7px;
    margin-left: -9px;
    margin-right: 7px;
    color: #C4C4C4;
    &:hover{
        color: #9A9191;
    }
}
`;
