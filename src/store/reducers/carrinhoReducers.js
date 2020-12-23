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
          if (e.id === action.payload.id) {
            e.quantity = e.quantity + 1;
            totalItensCarrinho++;
          }
        });
      } else {
        state.carrinho.push({...action.payload, quantity: 1});
        totalItensCarrinho++;
      }
      carrinho = state.carrinho;
      return {
        ...state,
        totalItensCarrinho,
        carrinho,
      };
    }

    case actionType.carrinho.setMinus: {
      let carrinho = [];
      let totalItensCarrinho = state.totalItensCarrinho;
      let quantity = 0;
      let index = 0;
      state.carrinho.map((e, i) => {
        if (e.id === action.payload.id) {
          quantity = e.quantity - 1;
          e.quantity = quantity;
          index = i;
          totalItensCarrinho--;
        }
      });
      if (quantity < 1) {
        state.carrinho.splice(index, 1);
      }
      carrinho = state.carrinho;
      return {
        ...state,
        totalItensCarrinho,
        carrinho,
      };
    }

    case actionType.carrinho.setPlus: {
      let carrinho = [];
      let totalItensCarrinho = state.totalItensCarrinho;
      let index = 0;
      state.carrinho.map((e, i) => {
        if (e.id === action.payload.id) {
          e.quantity = e.quantity + 1;
          index = i;
          totalItensCarrinho++;
        }
      });
      carrinho = state.carrinho;
      return {
        ...state,
        totalItensCarrinho,
        carrinho,
      };
    }

    case actionType.carrinho.deleteProduct: {
      let carrinho = [];
      let totalItensCarrinho = state.totalItensCarrinho;
      const product = state.carrinho.find((e) => e.id === action.payload.id);
      totalItensCarrinho = totalItensCarrinho - product.quantity;
      let index = 0;
      state.carrinho.map((e, i) => {
        if (e.id === action.payload.id) {
          index = i;
        }
      });
      state.carrinho.splice(index, 1);
      carrinho = state.carrinho;
      return {
        ...state,
        totalItensCarrinho,
        carrinho,
      };
    }

    case actionType.carrinho.cleanCarrinho: {
      return {
        ...state,
        totalItensCarrinho: 0,
        carrinho: [],
      };
    }

    default:
      return state;
  }
}
