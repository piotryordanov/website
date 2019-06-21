import React from "react";
import * as R from "ramda";
import Header from "../components/Header";
import { withRouter } from "next/router";

const getLogo = props =>
  R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(`/static/logos/${props.router.query.book}.svg`),
    R.always("/static/logo.svg")
  )(props);

const getText = props =>
  R.pipe(
    R.ifElse(
      R.hasPath(["router", "query", "book"]),
      R.always({
        author: props.router.query.book,
        subtitle: "By Piotr Yordanov"
      }),
      R.always({ author: "Piotr Yordanov", subtitle: "Author, Story Teller" })
    )
  )(props);

export default withRouter(props => (
  <Header text={getText(props)} logo={getLogo(props)} />
));
