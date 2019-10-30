import React from "react";
import axios from "axios";
import { weatherAction } from "./redux/actions/weatherAction";
import { connect } from "react-redux";
import store from './redux/store.js'
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

  componentDidMount() {
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
            <td>{`${city.list[0].weather[0].description}`}</td>
          </tr>
        );
      });
    }
    return (
      <React.Fragment>
        <div className="weather-container">
          <div className="search-container">
        <h1>WEATHER</h1>
        
        <input id="search-town" onChange={this.saveInput} type="text" />
        <button id="search-city" className="btn btn-success" onClick={this.componentDidMount}>SEARCH</button>
        <table>
        <tbody>{getWeather}</tbody>
        </table>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

function mappStateToProps(state) {
  return {
    weather: state.weatherReducer.weather
  };
}


export default connect(mappStateToProps)(WeatherApi);
