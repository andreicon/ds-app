import axios from 'axios'

export const getCollectionList = (dispatch) => {
  axios.get('https://ds-react-test-api.herokuapp.com/collections').then(collectionList => {
    dispatch({ type: 'GET_COLLECTION_LIST', data: collectionList.data})
  })
};
