import actionType from '../actionsTypes';

const initialValue = {
  carrinho: [],
  totalItensCarrinho: 0,
};

export default function session(state = initialValue, action) {
  switch (action.type) {
    case actionType.carrinho.setCarrinho: {
      let carrinho = [];
      let totalItensCarrinho = state.totalItensCarrinho;
      const product = state.carrinho.find((e) => e.id === action.payload.id);
      if (product) {
        state.carrinho.map((e) => {
          if (e.id === action.payload.id) e.quantity = e.quantity + 1;
          totalItensCarrinho++;
        });
      } else {
        state.carrinho.push({...action.payload, quantity: 1});
        state.carrinho.map((e) => {
          totalItensCarrinho++;
        });
      }
      carrinho = state.carrinho;
      return {
        ...state,
        totalItensCarrinho,
        carrinho,
      };
    }

    default:
      return state;
  }
}
