import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";
import * as R from "ramda";

import PostCard from "../components/PostCard";
import Divider from "../components/Divider";

const renderChapterCards = props =>
  R.pipe(
    R.tap(console.log),
    R.prop("posts"),
    R.defaultTo([]),
    R.map(post => {
      return <PostCard key={post} title={post} />;
    })
  )(props);

const BooksPage = props => (
  <Flex mt={3} flexWrap="wrap">
    <Box mb={20} p={[0, 20]} width={1}>
      <Flex justifyContent="center">{renderChapterCards(props)}</Flex>
    </Box>
  </Flex>
);

export default BooksPage;
