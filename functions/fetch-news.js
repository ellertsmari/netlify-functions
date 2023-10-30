const axios = require("axios");
require('dotenv').config();

exports.handler = async function(event, context) {
  const key = process.env.NEWS_API_KEY;
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`);
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