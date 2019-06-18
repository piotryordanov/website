import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";

import HomepageIntro from "../components/HomepageIntro";
import BookCard from "../components/BookCard";
import Divider from "../components/Divider";

const Index = () => (
  <Flex mt={3} flexWrap="wrap">
    <Box p={[0, 20]} width={1}>
      <HomepageIntro />
      <Divider />
    </Box>
    <Box mb={20} p={[0, 20]} width={1}>
      <Flex justifyContent="center">
        <BookCard />
        <BookCard />
      </Flex>
    </Box>
  </Flex>
);

export default withLayout(Index);
