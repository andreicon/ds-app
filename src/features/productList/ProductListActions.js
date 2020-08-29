import axios from 'axios'

export const getProductList = (dispatch) => {
  axios.get('https://ds-react-test-api.herokuapp.com/products').then(productList => {
    dispatch({ type: 'GET_PRODUCT_LIST', data: productList.data})
  })
};
