import errorInterceptor from '../../services/request/errorInterceptor';
import actionsTypes from '../actionsTypes';

export function setCarrinho(product) {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionsTypes.carrinho.setCarrinho,
        payload: product,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
