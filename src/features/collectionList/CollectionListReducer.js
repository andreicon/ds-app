
const initialState = {
    collectionList: []
}
const reducer = (state = initialState, action) => {
    let newState = null;
    switch (action.type) {
        case 'GET_COLLECTION_LIST':
          newState.collectionList = action.data.collectionList
          break;
    
        case 'CUSTOMER_RECONNECTING':
        break;
        default:
            newState = state;
    }
    return newState;
}

export default reducer;
