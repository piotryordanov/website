import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";
import PostContainer from "../containers/PostContainer";
import { withRouter } from "next/router";

export default withRouter(withLayout(PostContainer));
