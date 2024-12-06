import { Link } from "react-router";
import styled from "styled-components";

type Props = {
  isHome?: boolean;
};

const StyledList = styled.ul<Props>`
  align-items: ${({ isHome }) => (isHome ? "flex-start" : "center")};
  flex-direction: ${({ isHome }) => (isHome ? "column" : "row")};
`;

export const Menu: React.FC<Props> = ({ isHome }) => (
  <nav>
    {isHome ? null : (
      <ul>
        <strong>React 19</strong>
      </ul>
    )}
    <StyledList isHome={isHome}>
      {isHome ? null : (
        <li>
          <Link to="/">Home</Link>
        </li>
      )}
      <li>
        <Link to="/custom-elements">Custom Elements</Link>
      </li>
      <li>
        <Link to="/form-actions">form Actions</Link>
      </li>
      <li>
        <Link to="/use">use</Link>
      </li>
      <li>
        <Link to="/use/action-state">useActionState</Link>
      </li>
      <li>
        <Link to="/use/transition">useTransition</Link>
      </li>
      <li>
        <Link to="/use/optimistic">useOptimistic</Link>
      </li>
    </StyledList>
  </nav>
);
