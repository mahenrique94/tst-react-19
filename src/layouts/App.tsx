import { Outlet } from "react-router";

import { Back } from "../components/Back";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export const App = () => (
  <>
    <Header />
    <Container>
      <Back />
      <Outlet />
    </Container>
  </>
);
