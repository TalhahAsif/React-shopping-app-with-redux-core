import ActionTypes from "../Constant/constant";

const INITIALSTATE = {
  data: [],
  dataloading: false,
  cartItem: ["sfasf"],
};

const getProductReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTDATA_LOADING:
      return {
        dataloading: true,
        data: [],
      };
    case ActionTypes.GETPRODUCTSUCCESS:
      return {
        ...state,
        data: action.payload,
        dataloading: false,
      };
    case ActionTypes.GETPRODUCTERROR:
      return {
        ...state,
        data: [],
        dataloading: false,
      };
    default:
      return state;
  }
};

const AddtoCartReducer = (state = INITIALSTATE, action) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
      default:
        return state;
  }
};

export { getProductReducer,AddtoCartReducer };
