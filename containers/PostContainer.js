import React, { useEffect, useState } from "react";
import axios from "axios";
import { compose, connect } from "react-redux";
import * as R from "ramda";

import PostPage from "../components/PostPage";
const getContent = R.pipe(
  R.remove(0, 3),
  R.join("\n")
);
const getSoundtrack = R.pipe(
  R.take(2),
  R.takeLast(1),
  d => {
    const [artist, track, URL] = d[0].split(" - ");
    return { artist: artist, track: track, URL: URL };
  }
);

const parseMD = (md, setMarkdown, title) =>
  setMarkdown(
    R.pipe(
      R.split("\n"),
      md => ({
        title: title,
        content: getContent(md),
        date: R.take(1, md)[0],
        soundtrack: getSoundtrack(md)
      })
    )(md)
  );

const Index = props => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const query = props.router.query;
      console.log(props);
    axios
      .get(`/static/posts/${query.slug}.md`)
      .then(response =>
        parseMD(response.data, setMarkdown, props.router.query.slug)
      );
  }, "");
  return withLoading(markdown);
};
const withLoading = data =>
  R.ifElse(R.isNil, R.always(<>Loading</>), R.always(<PostPage {...data} />))(
    data
  );

export default Index;
