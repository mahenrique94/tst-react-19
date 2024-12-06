import { api } from "./api";

export const utils = {
  api,
  random: (from: number, to: number) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  },
};
