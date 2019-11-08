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
              secondResponse.data.list.filter(reading => reading.dt_txt.includes("15:00:00", "18:00:00"))
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
      curentWeather = this.props.curweather.map((cityz)  => {
        return (
          <tr key={cityz.list[0].id}> 
            <td>CITY: {cityz.list[0].name}</td>
            <td>COUNTRY: {cityz.list[0].sys.country}</td>
            <td>TEMPERATURE: {Math.floor(cityz.list[0].main.temp-273.15)} &#8451;</td>
            <td>WEATHER: {cityz.list[0].weather[0].description}</td>
            <td>WIND: {cityz.list[0].wind.speed} km/h</td>
            <td>HUMIDITY: {cityz.list[0].main.humidity}%</td>
          </tr>
           
         
     
        );
      });
    
    }
    let forestWeather = null;
    if (this.props.forweather) {
      forestWeather = this.props.forweather.map((cityz,index)  => {
        return (
          <tr key={index}> 
            
            <td>SATURDAY: {Math.floor(cityz[0].main.temp_min-273.15)} &#8451; 
            {Math.floor(cityz[0].main.temp_max-273.15)} &#8451;</td>
            <td>SUNDAY: {Math.floor(cityz[0].main.temp-273.15)} &#8451;</td>
            <td>MONDAY: {Math.floor(cityz[0].main.temp-273.15)} &#8451;</td>
            <td>TUESDAY: {Math.floor(cityz[0].main.temp-273.15)} &#8451;</td>
            <td>WEDNESDAY: {Math.floor(cityz[0].main.temp-273.15)} &#8451;</td>
            
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
            
              <tbody>
              {curentWeather}
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
