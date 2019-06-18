import withReveal from "react-reveal/withReveal";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const Component = withReveal(styled.div``, <Zoom />);

export default Child => {
  console.log(Child);
  return props => (
    <Component>
      <Child />
    </Component>
  );
};
