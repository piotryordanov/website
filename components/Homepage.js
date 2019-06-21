import React from "react";
import { Flex, Box } from "rebass";

import BookCard from "../components/BookCard";

const renderBooks = props =>
  props.meta.map(book => <BookCard key={book.title} {...book} />);

const Index = props => (
  <Flex mt={3} flexWrap="wrap">
    <Box mb={20} width={1}>
      <Flex justifyContent="center">{renderBooks(props)}</Flex>
    </Box>
  </Flex>
);

export default Index;
