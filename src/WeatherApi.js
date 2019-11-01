import React from "react";
import axios from "axios";
import { weatherAction } from "./redux/actions/weatherAction";
import { connect } from "react-redux";
import store from "./redux/store.js";
import "../assets/Weather.css";

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

  searchTown = () => {
    const newTown = document.querySelector("#search-town").value;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${newTown}&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`
      )
      .then(response => {
        store.dispatch(weatherAction(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=London&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`
      )
      .then(response => {
        store.dispatch(weatherAction(response.data));
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
          <tr key={city.list[0].id}> 
            <td>CITY: {city.list[0].name}</td>
            <td>COUNTRY: {city.list[0].sys.country}</td>
            <td>TEMPERATURE: {Math.floor(city.list[0].main.temp-273.15)} &#8451;</td>
            <td>WEATHER: {city.list[0].weather[0].description}</td>
            <td>WIND: {city.list[0].wind.speed} km/h</td>
            <td>HUMIDITY: {city.list[0].main.humidity}%</td>
          </tr>
        );
      });
    }
    return (
      <React.Fragment>
        
          <div className="search-container">
            <div className="weather-container">
            <h1>WEATHER</h1>

            <input id="search-town" onChange={this.saveInput} type="text" />
            <button
              id="search-city"
              className="btn btn-success"
              onClick={this.searchTown}
            >
              SEARCH
            </button>
            </div>
            <table id="table-weather">
              <tbody>{getWeather}</tbody>
            </table>
          </div>
        
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weatherReducer.weather
  };
}

export default connect(mapStateToProps)(WeatherApi);
