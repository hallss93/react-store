import actionType from '../actionsTypes';

const initialValue = {
  products: [],
};

export default function session(state = initialValue, action) {
  switch (action.type) {
    case actionType.products.setProducts: {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      return state;
  }
}
