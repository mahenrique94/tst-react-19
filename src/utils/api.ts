const noOp = <T>(): T => null as T;

export const api = {
  mockCall: <T>(cb = noOp<T>, time = 3): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(cb()), time * 1000)),
};
