import PropTypes from "prop-types";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Bar = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 99;
  top: ${props => props.top};
  left: ${props => props.left};
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.color};
  :hover {
    cursor: pointer;
  }
`;

const onClick = (e, updateWidth) => {
  const curr = e.pageX;
  const width = e.currentTarget.clientWidth;
  const height = window.document.body.offsetHeight - window.innerHeight;
  const ratio = (curr * 100) / width;
  window.scrollTo(0, (height * ratio) / 100);
};

const ProgressBar = props => {
  const [width, updateWidth] = useState(null);
  useEffect(() => {
    const Scrolling = event => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (height > 0) {
        updateWidth(`${scrolled}%`);
      } else {
        updateWidth(null);
      }
    };

    window.addEventListener("scroll", Scrolling);
    return () => window.removeEventListener("scroll", Scrolling);
  }, []);

  return (
    <>
      <Bar width={width} {...props} />;
      <Bar
        onClick={e => onClick(e, updateWidth)}
        width={"100%"}
        {...props}
        color={"transparent"}
      />
    </>
  );
};

ProgressBar.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string.isRequired
};
ProgressBar.defaultProps = {
  top: "0px",
  left: "0px",
  height: "5px",
  color: "black"
};

export default ProgressBar;
