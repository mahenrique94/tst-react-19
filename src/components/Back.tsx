import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 2rem;
`;

export const Back = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <StyledButton className="secondary outline" onClick={goBack}>
      Back
    </StyledButton>
  );
};
