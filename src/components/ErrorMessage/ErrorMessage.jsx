import { StyledErrorMessage } from "./ErrorMessage.styled";

export function ErrorMessage({error}) {
    return <StyledErrorMessage>{error}</StyledErrorMessage>
}