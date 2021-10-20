import styled, { keyframes } from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  border: 2px solid #333;
  position: relative;
  padding: ${rem(20)} ${rem(8)} ${rem(8)};
  margin-bottom: ${rem(32)};
  label {
    position: absolute;
    top: ${rem(4)};
    font-size: ${rem(14)};
  }
  input,
  select,
  textarea {
    font-family: "Lato", sans-serif;
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: ${rem(32)};
    padding: 0;
    width: 100%;
    border: none;
    outline: none;
  }
  input,
  select {
    height: ${rem(32)};
  }
  textarea {
    resize: none;
  }
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(110%);
  }
`;
export const Alert = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  font-weight: 700;
  transform: translateY(0%);
  animation: ${slideDown} 0.2s linear forwards;
`;
