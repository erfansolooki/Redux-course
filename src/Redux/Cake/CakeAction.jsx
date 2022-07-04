import { BUY_CAKE } from "./cakeTypes";

export function buyCake(numbers) {
  return {
    type: BUY_CAKE,
    payload: numbers,
  };
}
