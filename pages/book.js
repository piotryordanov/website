import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";
import BooksContainer from "../containers/BooksContainer";
import { withRouter } from "next/router";

export default withRouter(withLayout(BooksContainer));
