import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://noseryoung.ch/wp-content/uploads/2020/09/lacs-1.jpg" />
          <Card.Body>
            <Card.Title>Shawn Lacarta</Card.Title>
            <Card.Text>
              Hello World!
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
}

export default App;
