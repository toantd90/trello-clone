import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../assets/images/logo.svg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
`;

const Image = styled.svg`
  background-image: url(${Logo});
  width: 65px;
  height: 65px;
`;

const Header = () => (
  <Link to="/">
    <HeaderWrapper>
      <Image />
    </HeaderWrapper>
  </Link>
);

export default Header;
