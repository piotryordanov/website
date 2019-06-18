import Link from "next/link";
import styled from "styled-components";
import { Image, Flex, Text } from "rebass";

const Author = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #333;
`;

const Subtitle = styled(Text)`
  font-size: 12px;
  color: #4c4c4c;
  font-weight: 700;
  text-transform: none;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
`;

const ClickableLink = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export default () => (
  <ClickableLink>
    <Link href="/">
      <Flex>
        <Image mr={2} width={"26px"} src="/static/logo.svg" borderRadius={8} />
        <Flex flexWrap="wrap">
          <Author mb={-0.5} width={1}>
            PIOTR YORDANOV
          </Author>
          <Subtitle width={1}>Author, Story Teller</Subtitle>
        </Flex>
      </Flex>
    </Link>
  </ClickableLink>
);
