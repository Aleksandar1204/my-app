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
    let newTown = document.querySelector("#search-town").value;
    axios.all([
      axios.get(`https://api.openweathermap.org/data/2.5/find?q=${newTown}&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`),
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${newTown}&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`)
    ])
      .then(axios.spread((firstResponse, secondResponse) => {
      store.dispatch(weatherAction(firstResponse.data,
            secondResponse.data.list.filter(reading => reading.dt_txt.includes("15:00:00"))
        ));
       
      })
      
      )
      
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios.all([
      axios.get(`https://api.openweathermap.org/data/2.5/find?q=Skopje&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`),
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Skopje,MK&appid=5e6ac2a8fbfe8be0162b956ba8be09e9`)
    ])
      .then(axios.spread((firstResponse, secondResponse) => {
            store.dispatch(weatherAction(firstResponse.data,
              secondResponse.data.list.filter(reading => reading.dt_txt.includes("15:00:00"))
              ));
      })
      )
        
      
      
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let curentWeather = null;
    
    
    if (this.props.curweather) {
      curentWeather = this.props.curweather.map((cityz,index)  => {
        return (
          <div key={index}>
            <h1 id="weather-heading">{cityz.list[0].name}</h1>
          <ul> 
            <li>COUNTRY: {cityz.list[0].sys.country}</li>
            <li>TEMPERATURE: {Math.floor(cityz.list[0].main.temp-273.15)} &#8451;</li>
            <li>WEATHER: {cityz.list[0].weather[0].description}</li>
           <li><img src={`http://openweathermap.org/img/wn/${cityz.list[0].weather[0].icon}@2x.png`}></img></li>
            <li>WIND: {cityz.list[0].wind.speed} km/h</li>
            <li>HUMIDITY: {cityz.list[0].main.humidity}%</li>
          </ul>
          </div>
         
     
        );
      });
    
    }
    let forestWeather = null;
    var moment = require('moment');
    
    if (this.props.forweather) {
      forestWeather = this.props.forweather.map((cityz,index)  => {
        return (
          <tr key={index}> 
            <td><img src={`http://openweathermap.org/img/wn/${cityz[0].weather[0].icon}@2x.png`}></img>{moment(cityz[0].dt * 1000).format("dddd")} {Math.floor(cityz[0].main.temp-273.15)} &#8451; </td>
            <td><img src={`http://openweathermap.org/img/wn/${cityz[1].weather[0].icon}@2x.png`}></img>{moment(cityz[1].dt * 1000).format("dddd")} {Math.floor(cityz[1].main.temp-273.15)} &#8451;</td>
            <td><img src={`http://openweathermap.org/img/wn/${cityz[2].weather[0].icon}@2x.png`}></img>{moment(cityz[2].dt * 1000).format("dddd")} {Math.floor(cityz[2].main.temp-273.15)} &#8451;</td>
            <td><img src={`http://openweathermap.org/img/wn/${cityz[3].weather[0].icon}@2x.png`}></img>{moment(cityz[3].dt * 1000).format("dddd")} {Math.floor(cityz[3].main.temp-273.15)} &#8451;</td>
            <td><img src={`http://openweathermap.org/img/wn/${cityz[4].weather[0].icon}@2x.png`}></img>{moment(cityz[4].dt * 1000).format("dddd")} {Math.floor(cityz[4].main.temp-273.15)} &#8451;</td>
       
            
          </tr>
           
         
     
        );
      });
    
    }
    return (
      <React.Fragment>
        
          <div className="search-container">
          {curentWeather}
            <div className="weather-container">
           
            
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
            
              <tbody>
             
              {forestWeather}
             
              </tbody>
              
            </table>
        
              
            
          </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    curweather: state.weatherReducer.curweather,
    forweather: state.weatherReducer.forweather,
   
  };
}

export default connect(mapStateToProps)(WeatherApi);
