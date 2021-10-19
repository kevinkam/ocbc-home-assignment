import styled from "styled-components";
import { rem } from "polished";

export const PageTitle = styled.h2`
  font-size: ${rem(24)};
  margin-bottom: ${rem(48)};
`;

export const StyledForm = styled.form`
  min-height: calc(100vh - ${rem(64)});
  padding: ${rem(32)} ${rem(16)};
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
  }
  .actions {
    margin-top: auto;
  }
`;

export const CTAButton = styled.button`
  cursor: pointer;
  font-size: ${rem(18)};
  font-weight: 700;
  width: 100%;
  height: ${rem(48)};
  line-height: ${rem(42)};
  background: #333;
  color: #fff;
  border: 3px solid #333;
  border-radius: 50px;
  text-decoration: none;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: ${rem(16)};
  &:last-child {
    margin-bottom: 0;
  }
  &.inverted {
    background: #fff;
    color: #333;
  }
`;

export const SystemAlert = styled.div`
  border: 1px solid red;
  color: red;
  background: rgb(250, 228, 227);
  border-radius: 14px;
  padding: ${rem(16)};
  font-weight: 700;
`;
