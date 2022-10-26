import styled from "@emotion/styled";
import {Field} from 'formik';

export const PageTitle = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: ${p => p.theme.space[3]}px;
    margin-left: auto;
    margin-right: auto;
    margin-top:${p => p.theme.space[3]}px;
    margin-bottom:${p => p.theme.space[4]}px;    
    top: 0;
    left: 0;
    position: sticky;
    background-color: ${p => p.theme.colors.secondary};
    
  border-radius: 3px;
  overflow: hidden; 
`;

export const SearchButton = styled.button`
/* position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
    > svg{
        display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;  
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
&:hover{
    opacity: 1;
}
    } */
`;

export const StyledField = styled(Field)`
    /* display: inline-block;
    width: 100%;
    max-width: 600px;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    ::placeholder {
    font: inherit;
    font-size: 18px;
} */
`;