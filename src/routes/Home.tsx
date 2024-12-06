import { Link } from "react-router";
import { Menu } from "../components/Menu";

export const Home = () => (
  <>
    <h1>Home</h1>
    <p>Are you interested in new React 19 features? Check this project out.</p>
    <p>
      You also should check the{" "}
      <Link to="https://react.dev/blog/2024/12/05/react-19" target="_blank">
        official blog post
      </Link>{" "}
      about it.
    </p>
    <p>Walkthrough the links below to check all primary features:</p>
    <Menu isHome />
  </>
);
