import React from "react";
import { Box, Flex } from "rebass";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  display: inline-block;
  color: white;
  background: transparent;
  font-size: 1em;
  font-weight: 400;
  margin: 0;
  min-width: 80px;
  padding: 8px;
  border: none;
  letter-spacing: calc(0.075rem);
  display: block;
  font-family: "Titillium Web", sans-serif;
  :hover {
    cursor: pointer;
  }
`;

const ButtonHome = styled(Button)`
  background: #4b4d55;
  border-right: 1px solid #747474;
`;

export default () => (
  <div>
    <Box bg={"rgb(49, 51, 59)"} my={0} pl={0} pr={2}>
      <Flex>
        <Link href="/">
          <ButtonHome>
            <Flex>
              <Box>
                <FontAwesomeIcon icon={faHome} />
              </Box>
              <Box ml={2}>HOME</Box>
            </Flex>
          </ButtonHome>
        </Link>
      </Flex>
    </Box>
  </div>
);
