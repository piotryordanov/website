import React from "react";
import { Flex, Box } from "rebass";

import HomepageIntro from "../components/HomepageIntro";
import BookCard from "../components/BookCard";
import Divider from "../components/Divider";

const renderBooks = props =>
  props.Books.map(book => <BookCard key={book.title} {...book} />);

const Index = props => (
  <Flex mt={3} flexWrap="wrap">
    <Box width={1}>
      <HomepageIntro />
      <Divider />
    </Box>
    <Box mb={20} width={1}>
      <Flex justifyContent="center">{renderBooks(props)}</Flex>
    </Box>
  </Flex>
);

export default Index;
