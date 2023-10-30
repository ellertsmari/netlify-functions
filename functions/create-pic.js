import OpenAI from "openai";
import dotenv from 'dotenv'
dotenv.config();

const configuration = {
  organization: "org-uHJZ1OtjM6tOoiFYLTAcdyvA",
  apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);



exports.handler = async function(event, context) {
  const prompt = event.queryStringParameters.prompt;
  try {
    const image = await openai.images.generate({ prompt });
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow any origin
        "Access-Control-Allow-Methods": "GET, POST", // Allow GET and POST methods
        "Content-Type": "application/json"
    },
      body: JSON.stringify(image.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred fetching data" }),
    };
  }
};