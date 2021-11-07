import { createStore } from "redux";
import rootReducers from "./index";

export default function configureStore() {
  return createStore(rootReducers);
}
