import Balance from "./Balance";
import Transactions from "./Transactions";
import { HeaderRow, Wrapper } from "./styled";
import { removeLocalUserData } from "../../utils";
import { Link, useHistory } from "react-router-dom";
import { CTAButton, FloatingActions } from "../../components/styled";

const Home = () => {
  const history = useHistory();
  const onLogout = () => {
    removeLocalUserData();
    history.replace("/login");
  };
  return (
    <>
      <Wrapper>
        <HeaderRow>
          <button onClick={onLogout}>Logout</button>
        </HeaderRow>
        <Balance />
        <Transactions />
      </Wrapper>
      <FloatingActions>
        <CTAButton as={Link} to="/transfer">
          Make Transfer
        </CTAButton>
      </FloatingActions>
    </>
  );
};

export default Home;
