import { Suspense, use } from "react";
import { utils } from "../utils";

type Props = {
  promise: Promise<string>;
  show?: boolean;
};

const call = utils.api.mockCall<string>(() => "Foo bar");

const UseChild: React.FC<Props> = ({ promise, show }) => {
  if (!show) {
    return null;
  }

  const response = use(promise);

  return <p>API response: {response}</p>;
};

export const Use = () => (
  <>
    <title>Use</title>
    <h1>Use</h1>
    <p>
      In React 19 we&apos;re introducing a new API to read resources in render:{" "}
      <code>use</code>.
    </p>
    <p>
      For example, you can read a promise with use, and React will Suspend until
      the promise resolves:
    </p>
    <p>
      You can also read context with <code>use</code>, allowing you to read
      Context conditionally such as after early returns.
    </p>
    <h3>Example: Consuming an API</h3>
    <Suspense fallback={<p aria-busy="true">Fallback...</p>}>
      <UseChild promise={call} />
    </Suspense>
    <Suspense fallback={<p aria-busy="true">Fallback...</p>}>
      <UseChild promise={call} show />
    </Suspense>
    <Suspense fallback={<p aria-busy="true">Fallback...</p>}>
      <UseChild promise={call} />
    </Suspense>
    <Suspense fallback={<p aria-busy="true">Fallback...</p>}>
      <UseChild promise={call} show />
    </Suspense>
  </>
);
