import React from "react";
import { Flex, Box } from "rebass";
import { withRouter } from "next/router";
import withLayout from "../components/withLayout";

import HomepageIntro from "../components/HomepageIntro";
import BookCard from "../components/BookCard";
import Divider from "../components/Divider";

const Index = props => {
  console.log(props.router.query);
  return <div>THis is a post</div>;
};

export default withRouter(withLayout(Index));
