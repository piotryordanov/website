import Link from "next/link";
import styled from "styled-components";
import { Image, Flex, Text } from "rebass";
import withZoom from "./withZoom";
import * as R from "ramda";
import { withRouter } from "next/router";

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

const renderLogo = props =>
  R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(
      <Image
        mr={2}
        width={"18px"}
        src={`/static/${props.router.query.book}/logo.svg`}
        borderRadius={8}
      />
    ),
    R.always(
      <Image mr={2} width={"26px"} src="/static/logo.svg" borderRadius={8} />
    )
  )(props);
const renderAuthor = props =>
  R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(
      <>
        <Author mb={-0.5} width={1}>
          {props.router.query.book}
        </Author>
        <Subtitle width={1}>By Piotr Yordanov</Subtitle>
      </>
    ),
    R.always(
      <>
        <Author mb={-0.5} width={1}>
          PIOTR YORDANOV
        </Author>
        <Subtitle width={1}>Author, Story Teller</Subtitle>
      </>
    )
  )(props);

const Index = props => (
  <ClickableLink>
    <Link href="/">
      <Flex>
        {renderLogo(props)}
        <Flex flexWrap="wrap">{renderAuthor(props)}</Flex>
      </Flex>
    </Link>
  </ClickableLink>
);

export default withRouter(withZoom(Index));
