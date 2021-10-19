import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  width: calc(80% - ${rem(64)});
  padding: ${rem(32)};
  border-radius: 0 30px 30px 0;
  box-shadow: 0 0 10px 3px #ddd;
`;

export const BalanceTitle = styled.div`
  font-size: ${rem(18)};
  font-weight: 900;
`;
export const BalanceAmount = styled.h2`
  font-weight: 900;
  margin: ${rem(8)} 0 ${rem(16)};
`;

export const AccountTitle = styled.div`
  font-size: ${rem(14)};
  color: #333;
`;

export const AccountValue = styled(BalanceTitle)`
  margin: ${rem(4)} 0 ${rem(16)};
  &:last-child {
    margin-bottom: 0;
  }
`;
