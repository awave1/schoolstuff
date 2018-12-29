import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Switch from './Switch';

const Nav = styled.nav`
  background: #212121;
  box-shadow: 0px 0px 50px #0000001a;
`;

const NavContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
`;

const NavHeader = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-shadow: none;
  background-image: none;
  font-family: monospace;
`;

const Navbar = ({ siteTitle, onThemeChanged }) => {
  return (
    <Nav>
      <NavContent>
        <NavHeader to="/">/{siteTitle}</NavHeader>
        <div style={{ marginLeft: 'auto' }}>
          <Switch onChange={onThemeChanged} />
        </div>
      </NavContent>
    </Nav>
  );
};

export default Navbar;