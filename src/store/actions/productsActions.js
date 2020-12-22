import api from '../../services/request';
import errorInterceptor from '../../services/request/errorInterceptor';
import {getFormattedPrice} from '../../utils/format/price';
import actionsTypes from '../actionsTypes';

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const {data} = await api.get(`/`);
      dispatch({
        type: actionsTypes.products.setProducts,
        payload: data,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}

export function getProduct(id) {
  return async function (dispatch) {
    try {
      const {data} = await api.get(`/${id}`);
      dispatch({
        type: actionsTypes.products.setProduct,
        payload: data,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}

export function cleanProduct() {
  return async function (dispatch) {
    try {
      dispatch({
        type: actionsTypes.products.setProduct,
        payload: null,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
