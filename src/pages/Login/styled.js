import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;