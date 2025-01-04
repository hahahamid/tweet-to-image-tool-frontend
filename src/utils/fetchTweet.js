import axios from "axios";

const fetchTweet = async (tweetUrl) => {
  const proxyUrl = "http://localhost:5000/api/tweet"; 

  try {
    const response = await axios.get(proxyUrl, {
      params: { url: tweetUrl }, 
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching tweet:",
      error.response?.data || error.message
    );
    return null;
  }
};

export default fetchTweet;
