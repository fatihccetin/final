import React from 'react';
import Section from './Section'
import './Section.scss';

const ContentWrapper = () => {
  return (
    <div className="container" style={{backgroundColor: "#F2F2F2" ,padding: "0"}} >
      <Section />
    </div>
  );
};

export default ContentWrapper;