import React from "react";
import { compose, connect } from "react-redux";
import * as R from "ramda";

import BooksPage from "../components/BooksPage";

const withLoading = props =>
  R.ifElse(
    R.isNil,
    R.always(<>Loading</>),
    R.always(<BooksPage {...props.data} />)
  )(props.data);

const Index = props => withLoading(props);

const mapStateToProps = (state, props) => ({
  data: R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(R.find(R.propEq("id", props.router.query.book))(state.Books.data)),
    R.always({})
  )(props)
});

export default connect(mapStateToProps)(Index);
