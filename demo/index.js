/*
 * When running `npm run demo`, you will see the pages rendered by this file.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { NavigationBar, MenuLink, Footer } from '../lib/my-awesome-library';

/*
 * Each page has its own file in the "demo" folder. By default, it is the Home
 * page. The code for it is in the home.js file.
 */
import Home from './home'
import About from './about'

/*
 * The router says which path correspond to which page.
 */
const App = () => (
  <Router>
    <React.Fragment>
      <NavigationBar brand={{ link: "https://dsconference.com/", img: "../assets/dsconf-logo-small.png" }}>
        <MenuLink active activeColor="cyan">
          <Link to="/">Home</Link>
        </MenuLink>
        <MenuLink>
          <Link to="/about">About</Link>
        </MenuLink>
        <MenuLink>
          <Link to="/">Event Overview</Link>
        </MenuLink>
      </NavigationBar>
      <div style={{ width: '100%' }}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      <Footer text="DSCONF 2018 - All rights reserved."/>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('react-root'));
