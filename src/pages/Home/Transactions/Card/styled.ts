import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  padding: ${rem(32)} ${rem(20)};
  border-radius: 30px;
  box-shadow: 0 0 10px 3px #ddd;
  margin-bottom: ${rem(32)};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DateTitle = styled.div`
  font-weight: 900;
  color: #666;
`;

export const TransactionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${rem(16)} 0;
`;

export const AccountHolder = styled.div`
  font-weight: 900;
  font-size: ${rem(18)};
`;
export const AccountNo = styled.div`
  font-size: ${rem(14)};
  color: #666;
`;

export const Amount = styled.div`
  font-weight: 900;
  font-size: ${rem(18)};
  &.received {
    color: green;
  }
  &.transfer {
    color: #333;
  }
`;
