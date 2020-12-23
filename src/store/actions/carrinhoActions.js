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
export function setMinus(product) {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionsTypes.carrinho.setMinus,
        payload: product,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
export function setPlus(product) {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionsTypes.carrinho.setPlus,
        payload: product,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
export function deleteProduct(product) {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionsTypes.carrinho.deleteProduct,
        payload: product,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
export function cleanCarrinho() {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionsTypes.carrinho.cleanCarrinho,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
