import { Text, Flex, Box } from "rebass";
import styled from "styled-components";
import withZoom from "./withZoom";

const Container = styled(Flex)`
  max-width: 700px;
  margin: auto;
`;

export default withZoom(props => (
  <Container justifyContent="center">
    <Box mx={2}>
      <Flex flexWrap="wrap">
        <Text
          mb={2}
          textAlign="center"
          fontSize={27}
          fontWeight="bold"
          width={1}
        >
          {props.title}
        </Text>
        <Text lineHeight={"25px"} textAlign="center" fontSize={18} width={1}>
          {props.description}
        </Text>
      </Flex>
    </Box>
  </Container>
));
