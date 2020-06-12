import React from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Container,
  Row,
} from "react-bootstrap";
import Result from "./Result";

const API_KEY = "d4253e6e9f5594f51b285ee8d1cdcc32";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "",
      city: "",
      data: null,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  fetchWeather = async () => {
    const fetched_weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`
    );
    const data = await fetched_weather.json();
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchWeather();
  };

  render() {
    return (
      <Container>
        <Row>
          <Form
            className="mt-4"
            onSubmit={this.handleSubmit}
            style={{ width: "100%" }}
          >
            <FormGroup>
              <FormLabel>Country</FormLabel>
              <FormControl
                type="text"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>City</FormLabel>
              <FormControl
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        {this.state.data ? (
          <Row className="mt-5">
            <Result dat={this.state.data} />
          </Row>
        ) : null}
      </Container>
    );
  }
}

export default Weather;
