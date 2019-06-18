import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Fixed = styled(Box)`
  transition: opacity 300ms ease-in-out;
  position: fixed;
  ${props => (props.location == "top" ? { top: 0 } : { bottom: 0 })};
  ${props =>
    props.location == "top"
      ? { boxShadow: "0 2px 2px -2px rgba(0,0,0,.15)" }
      : {}};
  left: 0;
  right: 0;
  background: white;
`;

const Navbar = props => <Fixed {...props}></Fixed>;

export default Navbar;
