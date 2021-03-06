import styled from 'styled-components'; //Instale com npm install --save styled-components

export const AreaMenu = styled.div`
    position: fixed;
    height: 100%;
    .editorBottom{
        visibility: hidden;
    }
    @media (max-width: 1763px)
    {
        .logout{               
            position: absolute;
            width: 95px;
            height: 25px;
            margin-left: 40.25px;
            bottom: 52px;
            font-size: 25px;
            display: flex;
            align-items: center;
            color: #EB124B;
            a{
                text-decoration: none;
                margin-left: 15.63px;
                color: #EB124B;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                line-height: 23px;
            }            
        }
            .img{
                position: absolute;
                width: 187.27px;
                height: 100px;
                left: 60px;
                top: 21px;   
                margin-bottom:27px;
            }
            nav{
                ul{
                        position: absolute;
                        width: 291px;
                        height: 181px;
                        left: -1px;
                        top: 224px;
                        margin: 0;
                        padding: 0px 0px 0px 18px;
                        align-items: left;
                        display: block;
                        
                    }
                    li{
                        
                        list-style: none;
                        width: 230.44px;
                        height: 47px;
                        display: flex;
                        align-items: center;
                        margin-left: 18.75px;
                        &:hover{
                                                        
                            background: #ECF1F5;
                            border-radius: 20px 0px 0px 20px;   
                            
                            .bi{
                                color: #454444;
                                font-size: 25px;
                            }   
                            a{
                                color: #454444; 
                                font-size: 25px;
        
                            }      
                        }
                        .bi{
                            margin-left: 18px;
                            margin-top: 5px;
                            margin-bottom: auto;
                            justify-content: center;
                            font-size: 25px;
                            color: #EFF3F5;
                        }
                    
                            
                        
                        
                        a{
        
                            text-decoration: none;
                            margin-left: 15.46px; 
                            width: 230.44px;                         
                            font-style: normal;
                            font-weight: 700;
                            font-size: 25px;
                            line-height: 29px;
                            color: #EFF3F5;
                            display: flex;
                            align-items: center;
                        
                            
                        }
                                    
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
    }
    @media (max-width: 1762px)
    {
        .container{
            position: absolute;
            width: 270px;
            height: 100%;
            left: 0px;
            top: 0px;
            background: #354052;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }
        
        
        .logout{
                        
            position: absolute;
            width: 95px;
            height: 25px;
            margin-left: 28px;
            bottom: 52px;
            font-size: 25px;
            display: flex;
            align-items: center;
            color: #EB124B;
            
            
            a{
                text-decoration: none;
                margin-left: 14px;
                color: #EB124B;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                line-height: 23px;
            }
        
                
        }
            .img{
                position: absolute;
                width: 187.27px;
                height: 100px;
                left: 30px;
                top: 21px;
                
                margin-bottom:27px;
                
            }
            nav{
                ul{
                        position: absolute;
                        width: 291px;
                        height: 181px;
                        left: -30px;
                        top: 224px;
                        margin: 0;
                        padding: 0px 0px 0px 18px;
                        align-items: left;
                        display: block;
                        
                    }
                    li{
                        
                        list-style: none;
                        width: 265px;
                        height: 47px;
                        display: flex;
                        align-items: center;
                        margin-left: 18px;
                
                        
                        &:hover{
                        
                            
                                                    
                            background: #ECF1F5;
                            border-radius: 20px 0px 0px 20px;   
                        
                            .bi{
                                color: #454444;
                                font-size: 25px;
                            }   
                            a{
                                color: #454444; 
                                font-size: 25px;
        
                            }      
                        }
                        .bi{
                            margin-left: 18px;
                            font-size: 25px;
                            color: #EFF3F5;
                        }
                    
                            
                        
                        
                        a{
        
                            text-decoration: none;
                            margin-left: 14px; 
                            width: 230.44px;                         
                            font-style: normal;
                            font-weight: 700;
                            font-size: 25px;
                            line-height: 29px;
                            color: #EFF3F5;
                            display: flex;
                            align-items: center;
                        
                            
                        }
                                    
                    }
                    
                    
                    }
        
                    .line{
                    
                            position: absolute;
                            width: 262px;
                            height: 0px;
                            left: 0px;
                            top: 108px;
                        border: 4px solid #092853;
                    }
        
    }

    @media (max-width: 768px){
        .container{
            position: absolute;
            width: 270px;
            height: 100%;
            left: 0px;
            top: 0px;
            background: #354052;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }
        
        
        .logout{
                        
            position: absolute;
            width: 95px;
            height: 25px;
            margin-left: 45px;
            bottom: 12px;
            font-size: 25px;
            display: flex;
            align-items: center;
            color: #EB124B;
            
            
            a{
                text-decoration: none;
                margin-left: 12px;
                color: #EB124B;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                line-height: 23px;
            }
        
                
        }
            .img{
                position: absolute;
                width: 187.27px;
                height: 100px;
                left: 30px;
                top: 25px;
                
                margin-bottom:27px;
                
            }
            nav{
                ul{
                        position: absolute;
                        width: 291px;
                        height: 181px;
                        left: -14px;
                        top: 180px;
                        margin: 0;
                        padding: 0px 0px 0px 18px;
                        align-items: left;
                        display: block;
                        
                    }
                    li{
                        
                        list-style: none;
                        width: 265px;
                        height: 47px;
                        display: flex;
                        align-items: center;
                        margin-left: 18px;
                
                        
                        &:hover{
                                                    
                            background: #ECF1F5;
                            border-radius: 20px 0px 0px 20px;   
                        
                            .bi{
                                color: #454444;
                                font-size: 25px;
                            }   
                            a{
                                color: #454444; 
                                font-size: 25px;
        
                            }      
                        }
                        .bi{
                            margin-left: 18px;
                            font-size: 25px;
                            color: #EFF3F5;
                        }
                    
                            
                        
                        
                        a{
        
                            text-decoration: none;
                            margin-left: 14px; 
                            width: 230.44px;                         
                            font-style: normal;
                            font-weight: 700;
                            font-size: 25px;
                            line-height: 29px;
                            color: #EFF3F5;
                            display: flex;
                            align-items: center;
                        
                            
                        }
                                    
                    }
                    
                    
                    }
        
                    .line{
                    
                            position: absolute;
                            width: 262px;
                            height: 0px;
                            left: 0px;
                            top: 108px;
                        border: 4px solid #092853;
                    }
        
    }
    @media (max-width: 500px){

        .container{
            position: absolute;
            width: 270px;
            height: 100%;
            left: 0px;
            top: 0px;
            background: #354052;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }
        
        .logout{
                        
            position: absolute;
            width: 95px;
            height: 25px;
            margin-left: 28px;
            bottom: 52px;
            font-size: 25px;
            display: flex;
            align-items: center;
            color: #EB124B;
            
            
            a{
                text-decoration: none;
                margin-left: 14px;
                color: #EB124B;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                line-height: 23px;
            }
        
                
        }
            .img{
                position: absolute;
                width: 187.27px;
                height: 100px;
                left: 30px;
                top: 21px;
                
                margin-bottom:27px;
                
            }
            nav{
                ul{
                        position: absolute;
                        width: 291px;
                        height: 181px;
                        left: -30px;
                        top: 224px;
                        margin: 0;
                        padding: 0px 0px 0px 18px;
                        align-items: left;
                        display: block;
                        
                    }
                    li{
                        
                        list-style: none;
                        width: 265px;
                        height: 47px;
                        display: flex;
                        align-items: center;
                        margin-left: 18px;
                
                        
                        &:hover{
                        
                                                    
                            background: #ECF1F5;
                            border-radius: 20px 0px 0px 20px;   
                        
                            .bi{
                                color: #454444;
                                font-size: 25px;
                            }   
                            a{
                                color: #454444; 
                                font-size: 25px;
        
                            }      
                        }
                        .bi{
                            margin-left: 18px;
                            font-size: 25px;
                            color: #EFF3F5;
                        }
                    
                            
                        
                        
                        a{
        
                            text-decoration: none;
                            margin-left: 14px; 
                            width: 230.44px;                         
                            font-style: normal;
                            font-weight: 700;
                            font-size: 25px;
                            line-height: 29px;
                            color: #EFF3F5;
                            display: flex;
                            align-items: center;
                        
                            
                        }
                                    
                    }
                    
                    
                    }
        
                    .line{
                            position: absolute;
                            width: 262px;
                            height: 0px;
                            left: 0px;
                            top: 108px;
                        border: 4px solid #092853;
                    }
        
    }
`;

