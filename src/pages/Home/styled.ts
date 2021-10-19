import styled from "styled-components";
import { rem } from "polished";

export const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${rem(32)} ${rem(16)};
  a {
    font-weight: 700;
    font-size: ${rem(18)};
  }
`;

export const Wrapper = styled.div`
  height: calc(100vh - ${rem(112)});
  overflow-y: auto;
`;
