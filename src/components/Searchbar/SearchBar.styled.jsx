import styled from "@emotion/styled";

export const PageTitle = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    padding: ${p=>p.theme.space[3]}px;
    margin-bottom:${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.secondary};
`;