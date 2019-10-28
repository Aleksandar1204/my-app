import React from "react";
import axios from "axios";
import { weatherAction } from "./redux/actions/weatherAction";
import { connect } from "react-redux";

class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      show: false,
      city: ""
    };
  }
  saveInput = event => {
    this.setState({ city: event.target.value });
  };

  componentDidMount() {
    const newTown = document.querySelector("#search-town").value;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${newTown}&units=metric&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`
      )
      .then(response => {
        this.props.weatherAction(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let getWeather = null;
    if (this.props.weather) {
      getWeather = this.props.weather.map(city => {
        return (
          <tr key={city.id}>
            <td>{city.message}</td>
            <td>{city.count}</td>
            <td>{city.cod}</td>
            <td>{`${city.list[0].name}`}</td>
            <td>{`${city.list[0].clouds.all}`}</td>
          </tr>
        );
      });
    }

    return (
      <React.Fragment>
        <h1>WEATHER</h1>
        <br />
        <input id="search-town" onChange={this.saveInput} type="text" />
        <button onClick={this.componentDidMount}>Search</button>
        <table>{getWeather}</table>
      </React.Fragment>
    );
  }
}

function mappStateToProps(state) {
  return {
    weather: state.weatherReducer.weather
  };
}

function mappDispatchToProps(dispatch) {
  return {
    weatherAction: data => dispatch(weatherAction(data))
  };
}

export default connect(
  mappStateToProps,
  mappDispatchToProps
)(WeatherApi);
