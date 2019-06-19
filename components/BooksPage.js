import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";
import * as R from "ramda";

import BookIntro from "../components/BookIntro";
import PostCard from "../components/PostCard";
import Divider from "../components/Divider";

const renderChapterCards = props =>
  props.chapters.map(book => <PostCard key={book.title} {...book} />);

const BooksPage = props => (
  <Flex mt={3} flexWrap="wrap">
    <Box p={[0, 20]} width={1}>
      <BookIntro title={props.title} description={props.description} />
      <Divider />
    </Box>
    <Box mb={20} p={[0, 20]} width={1}>
      <Flex justifyContent="center">{renderChapterCards(props)}</Flex>
    </Box>
  </Flex>
);

export default BooksPage;
