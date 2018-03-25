import React from 'react';
import AppBar from 'material-ui/AppBar';
import { blueGrey800 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  fontFamily: 'Courier',
  palette: {
    primary1Color: blueGrey800,
  },
  appBar: {
    height: 70,
  },
});

const NavBar = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar showMenuIconButton={false} zDepth={4} title="Rafiq Shahsawary" />
  </MuiThemeProvider>
);

export default NavBar;
