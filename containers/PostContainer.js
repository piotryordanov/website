import React, { useEffect, useState } from "react";
import axios from "axios";
import { compose, connect } from "react-redux";
import * as R from "ramda";

import PostPage from "../components/PostPage";

const withLoading = data =>
  R.ifElse(R.isNil, R.always(<>Loading</>), R.always(<PostPage data={data} />))(
    data
  );

const Index = props => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const query = props.router.query;
    axios
      .get(`/getMD/${query.book}/${query.slug}`)
      .then(response => setMarkdown(response.data));
  }, "");
  return withLoading(markdown);
};

const mapStateToProps = (state, props) => ({
  data: R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(R.find(R.propEq("id", props.router.query.book))(state.Books.data)),
    R.always({})
  )(props)
});

export default Index;
