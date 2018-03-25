import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeScreen from './Screens/Home';

function App() {
  return (
    <MuiThemeProvider>
      <HomeScreen />
    </MuiThemeProvider>
  );
}

export default App;
