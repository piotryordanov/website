import styled from "styled-components";

const Component = styled.div`
  :hover {
    cursor: pointer;
  }
`;
export default Child => {
  return props => (
    <Component>
      <Child {...props} />
    </Component>
  );
};
