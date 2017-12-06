import { combineReducers } from "redux";
// import CONSTANTS from "./constants";
import types from "./types";

const productsHasError = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
};

const productsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const initState = [
  {
    _id: "dfGKJGhhgddddddddddddddd",
    category: "Demo",
    createdBy: "Demo",
    description: "Demo",
    name: "Demo",
    producer: "Demo",
    files: [
      {
        average: 5,
        note: "Demo note",
        material_id: "hej-15125582259389868.pdf",
        name: "DemoFile1",
        owner: "5a27ce917ae6da0021d97ef4",
        path:
          "/materials/242235471/5a27ce917ae6da0021d97ef4/hej-15125582259389868.pdf"
      },
      {
        average: 3,
        note: "Demo note",
        material_id: "hej-15125582259389868.pdf",
        name: "DemoFile2",
        owner: "5a27ce917ae6da0021d97ef4",
        path:
          "/materials/242235471/5a27ce917ae6da0021d97ef4/hej-15125582259389868.pdf"
      },
      {
        average: 2,
        note: "Demo note",
        material_id: "hej-15125582259389868.pdf",
        name: "DemoFile3",
        owner: "5a27ce917ae6da0021d97ef4",
        path:
          "/materials/242235471/5a27ce917ae6da0021d97ef4/hej-15125582259389868.pdf"
      }
    ]
  }
];

const products = (state = initState, action) => {
  switch (action.type) {
    case types.PRODUCTS_FETCH_DATA_SUCCESS:
      return [].concat(state, action.products);
    default:
      return state;
  }
};

const productsPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const productsReducer = combineReducers({
  productsHasError,
  productsIsLoading,
  products,
  productsPostDataSuccess
});

export default productsReducer;
