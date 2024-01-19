import styled from "styled-components";

// CSS
const StyledContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);
  border-radius: var(--borda-arredondada);
  padding: 1rem;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
