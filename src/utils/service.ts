import { post } from "./request";

export function subscribe(params = {}) {
  return post("/prod/fake-auth", { data: params });
  // return Promise.resolve({ foo: 1, bar: 2 });
}
