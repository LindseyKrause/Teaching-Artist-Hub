import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import Toggle from "./components/Toggler"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Calendar from './pages/Calendar';
import Mindbody from './pages/Mindbody'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ApolloProvider client={client}>
      
      <Router>
          <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <ThemeProvider theme={themeMode}>
          <GlobalStyles/>
          <div className="container">
          <Toggle theme={theme} toggleTheme={themeToggler} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/mindbody" component={Mindbody} />


              <Route component={NoMatch} />
            </Switch>
          </div>
          </ThemeProvider>
          <Footer />
        </div>
   
  
      </Router>
    </ApolloProvider>
  );
}

export default App;
