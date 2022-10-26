import styled from "@emotion/styled";

export const Container = styled.div` 
    display: 'flex';
    flex-direction: 'column'; 
    height: 90vw;
    width: 90%;       
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.text.primary};
    border-radius: ${p=>p.theme.radii.normal};
    background-color: ${p => p.theme.colors.page};
    box-shadow: ${p => p.theme.shadow}; 
    margin: auto;    
    margin-top: ${p=>p.theme.space[2]}px;
    padding-bottom: ${p=>p.theme.space[4]}px;
`;
