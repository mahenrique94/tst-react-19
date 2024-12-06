import { useState, useTransition } from "react";
import { utils } from "../utils";

export const UseTransition = () => {
  const [response, setResponse] = useState<number>();
  const [count, setCount] = useState<number>(0);
  const [isTransitioning, startTransition] = useTransition();

  const handleApiCall = () => {
    startTransition(async () => {
      setResponse(await utils.api.mockCall<number>(() => utils.random(0, 21)));
    });
  };

  const handleIncrement = () => {
    setCount((oldState) => ++oldState);
  };

  return (
    <>
      <title>UseTransition</title>
      <h1>UseTransition</h1>
      <p>
        We&apos;re adding support for using async functions in transitions to
        handle pending states, errors, forms, and optimistic updates
        automatically.
      </p>
      <p>
        For example, you can use <code>useTransition</code> to handle the
        pending state for you.
      </p>
      <blockquote>
        The async transition will immediately set the <code>isPending</code>{" "}
        state to true, make the async request(s), and switch{" "}
        <code>isPending</code> to false after any transitions. This allows you
        to keep the current UI responsive and interactive while the data is
        changing.
      </blockquote>
      <h3>Example: Dice rolll</h3>
      <div className="grid">
        <button disabled={isTransitioning} onClick={handleApiCall}>
          Roll
        </button>
      </div>
      <div className="grid">
        {response && !isTransitioning ? <div>{response}</div> : null}
        {isTransitioning ? <span aria-busy="true">Rolling...</span> : null}
      </div>
      <div className="grid">
        <p>Keeping using while rolling out a new number.</p>
        <button className="secondary" onClick={handleIncrement}>
          Count: {count}
        </button>
      </div>
    </>
  );
};
