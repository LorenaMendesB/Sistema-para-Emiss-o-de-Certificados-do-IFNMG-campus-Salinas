import styled from 'styled-components';

export const TextArea = styled.div`
width:  auto;
text-align: center;
align-items: center;

@media (min-width: 150px){
    margin-left: 300px;
    .botoes{
        margin-bottom: 15px;
    }
    #textArea{
        width: 60vw;
        height: 100px;
        border: 3px solid #EB124B;
        border-radius: 25px;
        background-color:#E5E5E5;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 10px;
        line-height: 35px;
        padding: 0px 20px;
    }
    .text{
        text-align: left;
    }
    .name-area{
        #text-name{
            border: 3px solid #EB124B;
            border-radius: 25px;
            font-size: 20px;
            width: 700px;
            padding: 0px 10px;
            color: #5E5656;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 29px;
            background-color:#E5E5E5;
            align-items: left;
            text-align: left;     
        }
    }
    .inputText{
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        height: 30px;
        border: 3px solid #EB124B;
        border-radius: 10px;
        padding: 0px 20px;
        background-color:#E5E5E5;
    }
    .divLabels{
        width: 60vw;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .date-area{
        #text{
            border: 3px solid #EB124B;
            border-radius: 25px;
            font-size: 20px;
            padding: 0px 10px;
            color: #5E5656;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
            line-height: 29px;
            background-color:#E5E5E5;
            align-items: center;
            text-align: center;     
            align-items: center;
        }
        
    }
    .dataInput{
        width: 60vw;
        height: 20px;  
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;  
    }
    .save{
        width: 240px;
        height: 40px;
        margin-left: 5vw;
        align-items: center;
        text-align: center;
        padding: 0px 5px;
        background: #4BCA7D;
        border-radius: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }
    .tagName{
        width: 250px;
        height: 40px;
        margin-right: 5vw;
        background: #404444;
        border-radius: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
    .line-1{
        width: 70vw;
        height: 2px;
        background: rgba(9, 40, 83, 0.35);  
    }
    .line2{
        width: 70vw;
        height: 2px;
        background: rgba(9, 40, 83, 0.35);   
    }
    h1{
        padding-top: 20px;
        width: 300px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 35px;
        display: flex;
        align-items: center;
        color: #092853;
    }
    .salvarTodos{
        width: 250px;
        height: 50px;
        background: #44B78B;
        box-shadow: -5px 5px 6px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
    .addNew{
        width: 250px;
        height: 50px;
        background: #50D8A4;
        box-shadow: -5px 5px 6px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 23px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
    .nameArea{
        display: inline;
        width: 500px;
        height: 92px;
        background: #E5E5E5;
        box-shadow: -5px 5px 6px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        padding: 0px 30px;
    }
`;