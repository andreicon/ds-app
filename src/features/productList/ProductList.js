import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getProductList
} from './ProductListActions';

/**
 * React component
 */
class ProductList extends React.Component {
  componentDidMount() {
    let { getProductListDispatch } = this.props;
    getProductListDispatch()
  }
  
  /**
   * React jsx rendering method
   */
  render() {
    return (
      <div className='productList-container'>
        Datengatumatii
      </div>
    );
  }
}

/**
 * Method that maps the state to the props object
 * @param  {object} state  The application state
 * @return {object}        The props to be saved
 */
const mapStateToProps = (state) => {
  return {
    productList: state.productList
  };
};

/**
* Method that maps the dispatch to the props object
* @param  {function} dispatch  The dispatch method
* @return {object}             The props to be saved
*/
const mapDispatchToProps = (dispatch) => {
  return {
    getProductListDispatch: () => {
      getProductList();
    }
  };
};

ProductList.propTypes = {
  productList: PropTypes.array,
  getProductListDispatch: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
