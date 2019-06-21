import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import withZoom from "./withZoom";

const Index = props => (
  <>
    <div className="post__content__container">
      <div className="zen">
        <h1>{props.title}</h1>
        <ReactMarkdown source={props.content} />
      </div>
    </div>
  </>
);

export default withZoom(Index);
