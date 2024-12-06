import { Link } from "react-router";

import { Button } from "../components/wc/Button";
import { useState } from "react";

customElements.define("wc-button", Button);

export const CustomElements = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((oldState) => ++oldState);
  };

  return (
    <>
      <title>Custom Elements</title>
      <h1>Custom Elements</h1>
      <p>
        React 19 adds full support for custom elements and passes all tests on{" "}
        <Link to="https://custom-elements-everywhere.com/" target="_blank">
          Custom Elements Everywhere
        </Link>
        .
      </p>
      <p>
        In past versions, using Custom Elements in React has been difficult
        because React treated unrecognized props as attributes rather than
        properties. In React 19, we&apos;ve added support for properties that
        works on the client and during SSR
      </p>
      <h3>Example: Count with web component</h3>
      {/* @ts-expect-error wc-button doesn't exist by default in JSX.IntrinsicElements */}
      <wc-button count={count} onClick={handleClick} text="Count:" />
    </>
  );
};
