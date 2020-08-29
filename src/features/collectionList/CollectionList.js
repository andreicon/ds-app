import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getCollectionList
} from './CollectionListActions';

/**
 * React component
 */
class CollectionList extends React.Component {
  componentDidMount() {
    let { getCollectionListDispatch } = this.props;
    getCollectionListDispatch()
  }
  
  /**
   * React jsx rendering method
   */
  render() {
    return (
      <div className='collectionList-container'>
        <ul>
          <li>
            Here be collections, if cors worked
          </li>
        </ul>
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
    collectionList: state.collectionList
  };
};

/**
* Method that maps the dispatch to the props object
* @param  {function} dispatch  The dispatch method
* @return {object}             The props to be saved
*/
const mapDispatchToProps = (dispatch) => {
  return {
    getCollectionListDispatch: () => {
      getCollectionList();
    }
  };
};

CollectionList.propTypes = {
  collectionList: PropTypes.array,
  getCollectionListDispatch: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList);
