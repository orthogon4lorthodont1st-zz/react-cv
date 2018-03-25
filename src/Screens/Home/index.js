import React from 'react';
import AppBar from '../../Components/AppBar';
import BottomNav from '../../Components/BottomNav';
import Grid from '../../Components/Grid';

const container = {};
const Main = () => {
  return (
    <div style={container}>
      <AppBar />
      <Grid />
      <BottomNav />
    </div>
  );
};

export default Main;
