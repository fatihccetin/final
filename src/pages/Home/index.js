import React, { useEffect } from 'react';
import HeaderMenu from '../../components/HeaderMenu';
import NotificationWrapper from '../../components/NotificationWrapper';
import ContentWrapper from '../../components/ContentWrapper';

const Home = () => {
  return (
    <>
      <NotificationWrapper />
      <HeaderMenu />
      <ContentWrapper /> 
 
    </>
  );
};

export default Home;

