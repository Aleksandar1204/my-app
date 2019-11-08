export function weatherAction(weatherData, forecastData) {
    return {
        type: 'CHECK_WEATHER',
        payload: {
            current:weatherData, 
            forecast:forecastData
        }

       
    }
}