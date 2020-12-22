import actionType from '../actionsTypes';

const initialValue = {
  products: [],
  product: null,
};

export default function session(state = initialValue, action) {
  switch (action.type) {
    case actionType.products.setProducts: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case actionType.products.setProduct: {
      return {
        ...state,
        product: action.payload,
      };
    }

    default:
      return state;
  }
}
