import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";
import * as R from "ramda";

import PostCard from "../components/PostCard";
import Divider from "../components/Divider";

const renderChapterCards = props =>
  R.pipe(
    R.prop("posts"),
    R.defaultTo([]),
    R.map(post => (
      <Box mb={20} p={[0, 20]} width={[1, 1, 1 / 2]}>
        <PostCard key={post} title={post} />
      </Box>
    ))
  )(props);

const BooksPage = props => (
  <Flex mt={3} flexWrap="wrap">
    {renderChapterCards(props)}
  </Flex>
);

export default BooksPage;
