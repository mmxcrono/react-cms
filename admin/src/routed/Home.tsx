import React, { useState } from 'react';
import './Home.scss';

interface HomeProps {
  name?: string;
}

const Home: React.FC<HomeProps> = ({ name }: HomeProps) => {
  const props = {
    name: name || 'Hoang',
  };

  return <h2>Hello, {props.name}.</h2>;
};
export default Home;
