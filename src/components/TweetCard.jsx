import React from "react";

const TweetCard = ({ tweetData }) => {
  if (!tweetData) return null;

  const { data: tweet, includes } = tweetData;
  const user = includes.users[0];
  const media = includes.media || [];
  const metrics = tweet.public_metrics;

  return (
    <div id="tweet-card" className="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <div className="flex items-center space-x-4">
        <img
          src={user.profile_image_url}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-800">{tweet.text}</p>
      {media.length > 0 && (
        <div className="mt-4">
          {media.map((mediaItem) => (
            <img
              key={mediaItem.media_key}
              src={mediaItem.url}
              alt="Tweet Media"
              className="w-full rounded-lg"
            />
          ))}
        </div>
      )}
      <div className="mt-4 flex space-x-4 text-gray-500">
        <span>❤️ {metrics.like_count}</span>
        <span>🔁 {metrics.retweet_count}</span>
        <span>💬 {metrics.reply_count}</span>
      </div>
    </div>
  );
};

export default TweetCard;
