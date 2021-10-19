import styled from "styled-components";
import { Link } from "react-router-dom";
import { rem } from "polished";

export const Wrapper = styled(Link)`
  svg {
    font-size: ${rem(22)};
  }
`;
