import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import Homepage from "../components/Homepage";

const withLoading = props =>
  R.ifElse(
    R.equals(0),
    R.always(<>Loading</>),
    R.always(<Homepage {...props} />)
  )(R.length(props.Books));

const Index = props => withLoading(props);
function mapStateToProps(state) {
  return { Books: state.Books.books };
}

export default connect(mapStateToProps)(Index);
