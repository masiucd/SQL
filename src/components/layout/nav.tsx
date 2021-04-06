import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const navStyles = css``;

interface NavProps {
  className?: string;
}

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 1rem 2rem;
  li {
    margin-right: 1rem;
    a {
      color: var(--white);
    }
  }
`;

const Nav = ({ className }: NavProps) => {
  return (
    <nav className={cx(navStyles, className)}>
      <NavList>
        <li>
          <Link to="/">version1</Link>
        </li>
        <li>
          <Link to="/v2">version2</Link>
        </li>
      </NavList>
    </nav>
  );
};

export default Nav;
