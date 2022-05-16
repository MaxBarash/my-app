import React from "react";
import { useState, useEffect } from "react";
import giphyRandom from "giphy-random";

const API_KEY = '1hREzybDQiam04aa2a6Argpold5s532V';

const NewRandomGif = ({ tag, tag2 }) => {
   const [giphyUrl, setGiphyUrl] = useState();
   const [giphyUrl2, setGiphyUrl2] = useState();

   useEffect(() => {
      const getGiphyUrl = async () => {
         try {
            const firstResponse = await giphyRandom(API_KEY, { tag, });
            const secondResponse = await giphyRandom(API_KEY, { tag: tag2, });
            const data = firstResponse.data;
            const data2 = secondResponse.data;
            if (data) {
               setGiphyUrl(data.images.downsized.url)
            }
            if (data2) {
               setGiphyUrl2(data2.images.downsized.url)
            }
         } catch (error) {
            console.log('Ошибка!!', error)
         }
      };
      getGiphyUrl();
   }, [tag]);

   return (
      <div style={{ position: 'absolute', bottom: '20px', left: '10px' }} >
         {giphyUrl && (
            <img
               src={giphyUrl}
               alt='gif'
               style={{ maxWidth: 200, maxHeigth: 200 }}
            />
         )}
         {giphyUrl2 && (
            <img
               src={giphyUrl2}
               alt='gif'
               style={{ maxWidth: 200, maxHeigth: 200 }}
            />
         )}
      </div>
   );
};

export default NewRandomGif;