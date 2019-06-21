import React from "react";
import { compose, connect } from "react-redux";
import * as R from "ramda";

import BooksPage from "../components/BooksPage";
import withLoading from "../components/withLoading";

const Index = props => {
  const d = R.ifElse(
    R.hasPath(["router", "asPath"]),
    () =>
      R.pipe(
        R.find(
          R.propEq(
            "title",
            decodeURIComponent(R.last(R.split("/book/", props.router.asPath)))
          )
        ),
        R.pick(["posts"])
      )(props.meta),
    R.always([])
  )(props);
  return <BooksPage {...d} />;
};

export default withLoading(Index, ["posts"]);
