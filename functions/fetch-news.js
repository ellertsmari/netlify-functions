const axios = require("axios");

exports.handler = async function(event, context) {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6db2fbb5bdc04030883ba36947c8b558");
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred fetching data" }),
    };
  }
};