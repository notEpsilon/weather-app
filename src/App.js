import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import Weather from "./components/Weather";
import { Container, Tabs, Tab } from "react-bootstrap";

const App = () => {
  return (
    <Container className="mt-2">
      <Tabs defaultActiveKey="welcome-t" id="uncontrolled-tab-example">
        <Tab eventKey="welcome-t" title="Welcome">
          <Headers />
        </Tab>
        <Tab eventKey="app" title="Weather">
          <Weather />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default App;
