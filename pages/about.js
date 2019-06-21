import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";

import HomepageContainer from "../containers/HomepageContainer";


import HomepageIntro from "../components/HomepageIntro";
import Divider from "../components/Divider";

const Index = props => (
  <Flex mt={3} flexWrap="wrap">
    <Box mt={10} width={1}>
      <HomepageIntro />
      <Divider />
    </Box>
  </Flex>
);

export default withLayout(Index);
