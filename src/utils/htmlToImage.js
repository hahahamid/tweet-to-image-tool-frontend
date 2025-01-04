import * as htmlToImage from "html-to-image";

export const downloadTweetAsImage = async () => {
  const tweetCard = document.getElementById("tweet-card");
  if (tweetCard) {
    const dataUrl = await htmlToImage.toPng(tweetCard);
    const link = document.createElement("a");
    link.download = "tweet.png";
    link.href = dataUrl;
    link.click();
  }
};