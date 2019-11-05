export function weatherAction(weatherData, forecastData) {
    return {
        type: 'CHECK_WEATHER',
        payload: {
            weather:weatherData, 
            forecast:forecastData
        }

       
    }
}