import React from "react";
import { useState, useEffect } from "react";
import giphyRandom from "giphy-random";

const API_KEY = '1hREzybDQiam04aa2a6Argpold5s532V';

const NewRandomGif = ({ tag }) => {
   const [giphyUrl, setGiphyUrl] = useState();

   useEffect(() => {
      const getGiphyUrl = async () => {
         try {
            const { data } = await giphyRandom(API_KEY, {
               tag,
            });


            if (data) {
               setGiphyUrl(data.images.downsized_medium.url)
            }
         } catch (error) {
            console.log('Ошибка!!', error)
         }
      };
      getGiphyUrl();
   }, [tag]);

   return (
      <div style={{ position: 'absolute', bottom: '20px', left: '240px' }} >
         {giphyUrl && (
            <img
               src={giphyUrl}
               alt='gif'
               style={{ maxWidth: 200, maxHeigth: 200 }}
            />
         )}
      </div>
   );
};

export default NewRandomGif;