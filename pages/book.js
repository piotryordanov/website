import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";

import BookIntro from "../components/BookIntro";
import BookCard from "../components/BookCard";
import Divider from "../components/Divider";

const Chapters = [
  { name: "Chp 1", date: "Feb 14, 2017", soundtrack: "Garde le pour toi" },
  { name: "Chp 2", date: "Feb 15, 2017", soundtrack: "Garde le pour toi" },
  { name: "Chp 3", date: "Feb 16, 2017", soundtrack: "Garde le pour toi" },
  { name: "Chp 4", date: "Feb 17, 2017", soundtrack: "Garde le pour toi" }
];

const items = Chapters.map(chapter => <div>{chapter.name}</div>);
const book = {
  title: "TINDERLAND",
  description:
    "Tinderland is a memoir. It is the story of how I used Tinder to quench my sexual frustration, only to find myself addicted to sex. However, this struggle, helped me find an unusual way out which changed my life forever."
};

const Index = props => (
  <Flex mt={3} flexWrap="wrap">
    <Box p={[0, 20]} width={1}>
      <BookIntro title={book.title} description={book.description} />
      <Divider />
    </Box>
    <Box mb={20} p={[0, 20]} width={1}>
      <Flex justifyContent="center">{items}</Flex>
    </Box>
  </Flex>
);

export default withLayout(Index);
