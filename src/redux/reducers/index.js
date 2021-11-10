import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";

const rootReducers = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
});

export default rootReducers;
