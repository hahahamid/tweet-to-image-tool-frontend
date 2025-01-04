import React, { useState } from "react";
import TweetCard from "./components/TweetCard";
import { downloadTweetAsImage } from "./utils/htmlToImage";
import fetchTweet from "./utils/fetchTweet";

const App = () => {
  const [tweetUrl, setTweetUrl] = useState("");
  const [tweetData, setTweetData] = useState(null);

  const handleFetchTweet = async () => {
    const data = await fetchTweet(tweetUrl);
    setTweetData(data);
  };

  const handleDownload = () => {
    downloadTweetAsImage();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Tweet to Image Converter</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          className="w-96 p-2 border rounded-lg"
          placeholder="Enter Tweet URL"
          value={tweetUrl}
          onChange={(e) => setTweetUrl(e.target.value)}
        />
        <button
          onClick={handleFetchTweet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Fetch Tweet
        </button>
      </div>
      {tweetData && (
        <div className="mt-8 flex flex-col justify-center items-center">
          <TweetCard tweetData={tweetData} />
          <button
            onClick={handleDownload}
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Download as Image
          </button>
        </div>
      )}
    </div>
  );
};

export default App;