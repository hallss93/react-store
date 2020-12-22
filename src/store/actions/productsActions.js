import api from '../../services/request';
import errorInterceptor from '../../services/request/errorInterceptor';
import {getFormattedPrice} from '../../utils/format/price';
import actionsTypes from '../actionsTypes';

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const {data} = await api.get(`/f5aefdc4`);
      dispatch({
        type: actionsTypes.products.setProducts,
        payload: data,
      });
    } catch (error) {
      errorInterceptor(error, dispatch);
    }
  };
}
