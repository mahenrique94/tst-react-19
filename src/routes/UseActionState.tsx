import { useActionState } from "react";
import styled from "styled-components";

import { FormButton } from "../components/FormButton";
import { utils } from "../utils";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const UseActionState = () => {
  const [tasks, handleSubmit, isHandling] = useActionState<string[], FormData>(
    async (previousState, newState) => {
      const response = await utils.api.mockCall<string>(
        () => newState.get("task")?.toString() || ""
      );

      return [...previousState, response];
    },
    []
  );

  return (
    <>
      <title>UseActionState</title>
      <h1>UseActionState</h1>
      <p>
        In <code>react-dom</code> we&apos;re adding <code>&lt;form&gt;</code>{" "}
        Actions to manage forms automatically and <code>useFormStatus</code> to
        support the common cases for Actions in forms.
      </p>
      <p>
        <code>useActionState</code> accepts a function (the “Action”), and
        returns a wrapped Action to call. This works because Actions compose.
        When the wrapped Action is called, <code>useActionState</code> will
        return the last result of the Action as data, and the pending state of
        the Action as pending.
      </p>
      <h3>Example: Todo List</h3>
      <form action={handleSubmit}>
        <input
          disabled={isHandling}
          name="task"
          placeholder="Type your task here..."
          required
        />
        <FormButton>Add</FormButton>
      </form>
      <StyledList>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </StyledList>
    </>
  );
};
