import React from "react";
import { useState, useEffect } from "react";
import giphyRandom from "giphy-random";

const API_KEY = "yjnNske5FbN6ldwOFNf3zz6zlJTPQzWY";

const RandomGif = ({ tag }) => {
  const [giphyUrl, setGiphyUrl] = useState();

  useEffect(() => {
    const getGiphyUrl = async () => {
      const { data } = await giphyRandom(API_KEY, {
        tag,
      });

      if (data) {
        setGiphyUrl(data.images.downsized_medium.url);
      }
    };

    getGiphyUrl();
  }, [tag]);

  return (
    <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
      {giphyUrl && (
        <img
          src={giphyUrl}
          alt="gif"
          style={{ maxWidth: 200, maxHeight: 200 }}
        />
      )}
    </div>
  );
};

export default RandomGif;
