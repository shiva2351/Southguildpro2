import { Component } from "react";
import {
  HeaderUl,
  Headerli,
  Headerul2,
  Headerli2,
  HeaderLogo,
} from "./styledcompnents";

class Header extends Component {
  render() {
    return (
      <nav>
        <HeaderUl>
          <HeaderLogo>
            <img
              src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png"
              alt="temples"
            />
            <h1>Temples of India</h1>
          </HeaderLogo>
          <Headerli>
            <Headerul2>
              <Headerli2>Home</Headerli2>
              <Headerli2>Search</Headerli2>
              <Headerli2>Nearby Temples</Headerli2>
              <Headerli2>Add temples</Headerli2>
              <Headerli2>about us</Headerli2>
              <Headerli2>
                <select>
                  <option>login</option>
                  <option>register</option>
                </select>
              </Headerli2>
            </Headerul2>
          </Headerli>
        </HeaderUl>
      </nav>
    );
  }
}

export default Header;
