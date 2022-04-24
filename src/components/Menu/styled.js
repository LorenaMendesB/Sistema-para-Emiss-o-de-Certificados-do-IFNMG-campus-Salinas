import styled from 'styled-components';
export const AreaMenu = styled.div`
height: 81px;
background-color: #44B78B;
color: #FFF;
box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.2);

.container{
padding: 7px 21px;
 display: flex;
 align-items: center;

 

}
    .logo{
        
         
        font-style: normal;
        font-weight: 900;
        font-size: 41px;
        line-height: 48px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
    nav{

            ul{
                display: flex;
                align-items: center;
                text-align: center;
                justify-contents: center;
            }
            li{
                
                list-style: none;
                display: flex;               
                width: 177px;
                height: 46px;
                margin-left: 20px;
                background: #F04A27;
                box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.15);
                border-radius: 15px;
                align-items: center;
                text-align: center;
                justify-contents: center;
                &:hover{
                    background: #EB124B;
                    box-shadow: inset -5px 5px 5px rgba(0, 0, 0, 0.2);  
                }
                 a{

                    
                   margin-left: 25px;
                    text-decoration: none;
                    font-style: normal;
                     font-weight: 900;
                     font-size: 25px;
                     color: #FFFFFF;
                     line-height: 29px;
                     display: flex;
                     align-items: center;
                     text-align: center;
                   
                }
                
            }
            .logout{
                right: 0px:
                     
            }
            
            }

    }
`;

