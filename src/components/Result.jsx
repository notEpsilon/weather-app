import React from "react";
import { Table } from "react-bootstrap";

const Result = ({ dat }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>City</th>
          <th>Temperature</th>
          <th>Temp_Min</th>
          <th>Temp_Max</th>
          <th>Humidity</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{dat.sys.country}</td>
          <td>{dat.name}</td>
          <td>{dat.main.temp}</td>
          <td>{dat.main.temp_min}</td>
          <td>{dat.main.temp_max}</td>
          <td>{dat.main.humidity}</td>
          <td>{dat.weather[0].main}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Result;
