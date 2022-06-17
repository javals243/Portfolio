import styled from "styled-components"
export const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-bottom: 80px;
    `;

export const Form =styled.form `
    width: 1000px;
    height: 1000;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    @media ${props => props.theme.breakpoints.md}{
       width:100%;
      }
    
      @media ${props => props.theme.breakpoints.sm}{
       width:100%;
      }
`

export const InputS =styled.input `
    flex: 1;
    height: 50px;
    outline:none;
    padding-left: 5px;
    border-radius:10px;
`;


export const InputL =styled.input `
    width: 100%;
    outline:none;
    height: 50px;
    border-radius:5px;
    padding-left: 10px;
    margin-top: 5px;
`;


export const TextArea = styled.textarea`
    width: 100%;
    outline:none;
    padding-left: 10px;
    margin-top: 5px;
    border-radius:5px;
`;

export const ButtonEnv =styled.button`
    margin-top: 20px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: rgb(0, 82, 0);
    color: white;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
`;

