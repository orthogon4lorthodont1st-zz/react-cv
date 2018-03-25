import React from 'react';
import Header from '../../Components/Header';
import BottomNav from '../../Components/BottomNav';
import Grid from '../../Components/Grid';

const container = {};
const Main = () => (
  <div style={container}>
    <Header />
    <Grid />
    <BottomNav />
  </div>
);

export default Main;
