### Para começar o projeto é necessário ter o node.js instalado em sua máquina: https://nodejs.org/en/
### Para visualizar seu projeto é só iniciá-lo com:

``` 
$ npm start
```
No front-end utilizou-se bibliotecas para facilitar o desenvolvimento, uma delas é o styled-componets e a outra react-router-dom. Sendo a primeira para auxliar nos estilos e a outra para fazer a troca de delas sem precisar recarregar a página. O $ serve para desmostrar a linha de comando do terminal.
Instale com os seguintes comandos:

```
$ npm i react-router-dom
```
 e
```
# com npm
$ npm install --save styled-components

# com yarn
$ yarn add styled-compone
```
Outra instalação realizada, foi para utilizar icons pré-definidos do site do bootstrap: https://icons.getbootstrap.com/#styling

```
$ npm i bootstrap-icons
```
Para construir a aplicação dentro da pasta src crie as pastas componentes e pages:

```
📂
|_src
 📂
   |_componentes
 📂
   |_pages
   
```
Na pasta public troque a logo.ico padrão do react.js por a do seu projeto:

```
📂
|_public
 |_ 🖼️- iflogo.ico   
```
Na pasta componentes foi criado o componente Menu com dois arquivos index.js e styled.js:

```
📂
|_componentes
 📂
   |_Menu
    📑
      |_index.js
    📑
      |_ styled.js
```
No arquivo index coloque o sequinte código:
```react.js
import React from 'react'; // importando o react
import { AreaMenu } from './styled'; // importando o arquivo styled com os estilos
import { Link } from 'react-router-dom'; // importando as rotas - instalado com npm i react-router-dom
import "bootstrap-icons/font/bootstrap-icons.css"; // importando os icons - instalado com npm i bootstrap-icons


function Menu() {

    return (


        <AreaMenu> // area para contrução do menu, tag feita no styled
            <div className="container">

                <div className="img"> // importando uma imagem em svg, que possui melhor qualidade
                    <svg width="196" height="68" viewBox="0 0 196 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="191.273" height="64" rx="7" stroke="white" stroke-width="4" />
                        <rect x="17" y="22.0251" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="30.0254" y="22.0251" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="17" y="35.0505" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="30.0254" y="35.0505" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="43.0505" y="35.0505" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="17" y="48.0757" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="30.0254" y="48.0757" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <circle cx="22.4622" cy="14.4622" r="5.46219" fill="#C8191E" />
                        <rect x="30.0254" y="9" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <rect x="43.0505" y="9" width="10.9244" height="10.9244" rx="1" fill="#32A041" />
                        <path d="M85.2578 50H77.3721L77.4209 43.4082H85.2578C86.8854 43.4082 88.2607 43.0176 89.3838 42.2363C90.5231 41.4551 91.3857 40.2913 91.9717 38.7451C92.5739 37.1826 92.875 35.262 92.875 32.9834V31.4453C92.875 29.7363 92.7041 28.2389 92.3623 26.9531C92.0368 25.651 91.5485 24.5687 90.8975 23.7061C90.2464 22.8271 89.4326 22.168 88.4561 21.7285C87.4958 21.2891 86.389 21.0693 85.1357 21.0693H77.2256V14.4531H85.1357C87.5446 14.4531 89.75 14.8682 91.752 15.6982C93.7702 16.512 95.5117 17.6839 96.9766 19.2139C98.4577 20.7275 99.597 22.526 100.395 24.6094C101.208 26.6764 101.615 28.9714 101.615 31.4941V32.9834C101.615 35.4899 101.208 37.7848 100.395 39.8682C99.597 41.9515 98.4658 43.75 97.001 45.2637C95.5361 46.7773 93.8027 47.9492 91.8008 48.7793C89.8151 49.5931 87.6341 50 85.2578 50ZM82.2793 14.4531V50H73.71V14.4531H82.2793ZM130.546 43.4082V50H111.601V43.4082H130.546ZM114.652 14.4531V50H106.083V14.4531H114.652ZM128.104 28.5645V34.9365H111.601V28.5645H128.104ZM130.619 14.4531V21.0693H111.601V14.4531H130.619ZM141.508 14.4531L147.318 26.2695L153.129 14.4531H162.895L152.982 32.0801L163.163 50H153.3L147.318 37.9639L141.337 50H131.449L141.654 32.0801L131.718 14.4531H141.508Z" fill="white" />
                    </svg></div>


                <div className="line" /> //adicionando uma linha 

                <nav> //menu de navegação vertical
                    <ul>
                        <li><i class="bi bi-house-fill"></i><Link to='/Home'>Página Inicial</Link></li> //icons com as rotas definidas
                       <li><i class="bi bi-pencil-square"></i><Link to='/Editor'>Editor</Link>
                        </li>


                    </ul>
                    <p className="logout"><i class="bi bi-box-arrow-right"></i><Link to="/">LogOut</Link></p>
                </nav>

            </div>


        </AreaMenu>

    );
}

export default Menu;
```
Em seguida coloque o seguinte código no styled.js:
```
import styled from 'styled-components'; //Instale com npm install --save styled-components
export const AreaMenu = styled.div`

@media (max-width: 1763px)
{
    .container{
        position: absolute;
        width: 309px;
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
}
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
}
`;


```
