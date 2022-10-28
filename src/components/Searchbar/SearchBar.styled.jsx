import styled from "@emotion/styled";
import {Form, Field} from 'formik';

export const PageTitle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    position: sticky;
    overflow: hidden;
    min-height: ${p => p.theme.space[6]}px;
    color: ${p => p.theme.text.secondary};
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadow};
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    padding-top:${p => p.theme.space[3]}px;
    padding-bottom:${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.space[2]}px;
    /* z-index: 1100; */
 `;

export const StyledForm = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: ${p => p.theme.space[2]}px;
    overflow: hidden;
`;



export const SearchButton = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;  
  /* background-size: 40%; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
  opacity: 1;
}

/* >svg{
    position: absolute;
  width: 10px;
  height: 10px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0; */
/* } */
`;

export const StyledField = styled(Field)`
    display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;