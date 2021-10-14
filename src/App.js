import './App.css';
import CloneElement from './components/CloneElement';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import React, { Component } from 'react';
import Data from './components/Data'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
toast.configure()

function App() {
  return (
     <Router>
           <div className="App">
           {/* <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand to="/">Interactive Tool </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link href="/data">Data</Nav.Link>
              </Nav>
          </Container>
        </Navbar> */}
            {/* <ul >
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/data">Data</Link>
              </li>
            </ul> */}
            <Switch>
            <Route exact path='/' component={CloneElement}></Route>
              <Route exact path='/data' component={Data}></Route>
            </Switch>
          </div>
       </Router>
    

  );
}

export default App;
