import styled from "styled-components";

import { Menu } from "./Menu";

const StyledHeader = styled.header`
  padding: 2rem;
`;

export const Header = () => (
  <StyledHeader>
    <Menu />
  </StyledHeader>
);
