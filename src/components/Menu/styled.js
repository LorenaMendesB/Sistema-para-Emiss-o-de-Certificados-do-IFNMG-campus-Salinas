import styled from 'styled-components';
export const AreaMenu = styled.div`

.container{
    position: absolute;
    width: 309px;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #354052;

}
    .logo{
        position: absolute;
        width: 187.27px;
        height: 60px;
        left: 60px;
        top: 21px;
        background: #FFF;
        margin-bottom:27px;
    }
    nav{
           ul{
                position: absolute;
                width: 291px;
                height: 181px;
                top: 224px;
            }
            li{
                
                list-style: none;
                width: 230.44px;
                height: 47px;
                left: 36.75px;
               
                 a{

                    text-decoration: none;
                    width: 190px;
                    height: 47px;
                    left: 36.75px;                                    
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 29px;
                    display: flex;
                    align-items: center;
                    margin-left: 18.75px;
                   
                    color: #EFF3F5;

                    &:hover{
                        color: #454444;
                        position: absolute;
                        width: 291px;
                        height: 55px;
                        left: 18px;
                        background: #ECF1F5;
                        border-radius: 20px 0px 0px 20px;
                        
                    }
                 }
                                
            }
            .logout{
                
                position: absolute;
                width: 95px;
                height: 25px;
                left: 79.34px;
                margin-bottom: 52px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 900;
                font-size: 20px;
                line-height: 23px;
                display: flex;
                align-items: center;
                
                color: #EB124B;
                     
            }
            
            }

            .line{
            
                    position: absolute;
                    width: 300px;
                    height: 0px;
                    left: 0px;
                    top: 108px;
                   border: 4px solid #092853;
            }

    }
`;

