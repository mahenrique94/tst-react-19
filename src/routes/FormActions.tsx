import { useState } from "react";

import { FormButton } from "../components/FormButton";
import { utils } from "../utils";
import styled from "styled-components";

const StyledResult = styled.span`
  background-color: lightgray;
  display: flex;
  color: #333;
  margin-top: 2rem;
  padding: 1rem;
`;

export const FormActions = () => {
  const [result, setResult] = useState<number>();
  const handleSubmit = async (data: FormData) => {
    const response = await utils.api.mockCall<number>(() =>
      eval(data.get("math")?.toString() || "")
    );
    setResult(response);
  };

  return (
    <>
      <title>FormActions</title>
      <h1>FormActions</h1>
      <p>
        Actions are also integrated with React 19&apos;s new{" "}
        <code>&lt;form&gt;</code> features for <code>react-dom</code>.
        We&apos;ve added support for passing functions as the
        <code>action</code> and <code>formAction</code> props of{" "}
        <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, and
        <code>&lt;button&gt</code>; elements to automatically submit forms with
        Actions:
      </p>
      <h3>Example: Calculator</h3>
      <form action={handleSubmit}>
        <input
          name="math"
          pattern="^([\d+\/\-\s\*\(\)]*)$"
          placeholder="e.g: 1 + (2 * 15) / (2 / 1)"
          required
        />
        <FormButton>Calculate</FormButton>
      </form>
      {result ? <StyledResult>{result}</StyledResult> : null}
    </>
  );
};
