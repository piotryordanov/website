import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

const Fixed = styled(Box)`
  top: 0;
  boxshadow: "0 2px 2px -2px rgba(0,0,0,.15)";
  left: 0;
  right: 0;
  background: white;
`;

const Navbar = props => <Fixed {...props}></Fixed>;

export default Navbar;
