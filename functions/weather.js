import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

exports.handler = async function(event, context) {
  const city = event.queryStringParameters.city;
  const key = process.env.WEATHER_API_KEY;
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=1&aqi=no&alerts=no`);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow any origin
        "Access-Control-Allow-Methods": "GET, POST", // Allow GET and POST methods
        "Content-Type": "application/json"
    },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred fetching data" }),
    };
  }
};