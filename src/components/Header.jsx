import styled from "@emotion/styled";
import { AppBar, InputBase, Toolbar, Box } from "@mui/material";
import Logo from "../images/download.jpeg";
import SearchIcon from "@mui/icons-material/Search";

const StyleHeader = styled(AppBar)`
  padding: 10px;
  background-color: black;
`;

const StyleComponent = styled(Box)`
  background-color: rgb(225, 225, 225, 0.15);
  margin-left: 20px;
  border-radius: 7px;
  position: relative;
`;

const InputBox = styled(InputBase)`
  color: inherit;
  margin-left: 50px;
`;

const StyledIcon = styled(SearchIcon)`
  position: absolute;
  top: 3px;
  margin-left: 10px;
`;

const Header = ({ setText }) => {
  const getText = (e) => {
    setText(e.target.value);
  };
      
  return (
    <StyleHeader position="static">
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 100 }} />
        <StyleComponent>
          <StyledIcon />
          <InputBox placeholder="search by name" onChange={(e) => getText(e)} />
        </StyleComponent>
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;
