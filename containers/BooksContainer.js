import React from "react";
import { compose, connect } from "react-redux";
import * as R from "ramda";

import BooksPage from "../components/BooksPage";

const withLoading = props =>
  R.ifElse(
    R.equals(0),
    R.always(<>Loading</>),
    R.always(<BooksPage {...props.data} />)
  )(R.length(props.posts));

const Index = props => withLoading(props);

const mapStateToProps = (state, props) => {
  console.log("props");
  return { posts: [] };
  return {
    posts: R.ifElse(
      R.hasPath(["router", "query", "book"]),
      () => {
        const d = R.pick(
          "posts",
          R.find(R.propEq("title", props.router.query.book))(state.Books)
        );
        return [];
      },
      () => {
        console.log("here");
        return [];
      }
    )(props)
  };
};

export default connect(mapStateToProps)(Index);
