// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';

// // const getNewsData = async () => {
// //   const res = await fetch('/api/testresponse');
// //   const data = await res.json();
// //   const newsDataArticles = data.articles;
// //   return newsDataArticles;
// // };


// const fetchBiasAnalysis = async (headline) => {
//   const response = await fetch("http://localhost:8001/predict", {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify({ text: headline })
//   });

//   const result = await response.json();
//   console.log("biasPrediction", result);

//   // Map the response to the required format
//   const biasScores = {
//     "left": result.predictions.left,
//     "center": result.predictions.center,
//     "right": result.predictions.right
//   };

//   return biasScores;
// };


// const fetchSentimentAnalysis = async (headline) => {
//   const response = await fetch("http://localhost:8000/predict", {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify({ text: headline })
//   });

//   const result = await response.json();
//   console.log("sentimentAnalysis", result);

//   // Map the response to the required format
//   const sentimentMap = {
//     "negative": "right",
//     "neutral": "center",
//     "positive": "left"
//   };

//   const sentimentScores = result.predictions.reduce((acc, item) => {
//     const [, label, score] = item.split(" ");
//     const mappedLabel = sentimentMap[label];
//     acc[mappedLabel] = parseFloat(score) * 100; // Convert to percentage
//     return acc;
//   }, { "left": 0, "center": 0, "right": 0 });

//   return sentimentScores;
// };

// function Home() {
//   const [newsData, setNewsData] = useState([]);
//   const [value, setValue] = useState('All');
//   const [finalData, setFinalData] = useState([]);

  
//     const getNewsData = async () => {
//       const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce8c0142a3d7494c85b3cd6b9869a244`);
//       const data = await res.json();
//       const newsDataArticles = data.articles;
//       return newsDataArticles;
//     };
//   

//   useEffect(() => {
//     const getNewsDetails = async () => {
//       try {
//         const data = await getNewsData();
//         setNewsData(data);
//         const newsValues = data.map((item) => ({
//           title: item.title,
//           photoURL: item.urlToImage,
//         }));

//         const analyzedNews = await Promise.all(
//           newsValues.map(async (news) => {
//             const sentiment = await fetchSentimentAnalysis(news.title);
//             const bias = await fetchBiasAnalysis(news.title);
//             return {
//               newsTitle: news.title,
//               newsPhotoURL: news.photoURL,
//               sentimentAnalysis: sentiment,
//               biasAnalysis: bias,
//             };
//           })
//         );

//         setFinalData(analyzedNews);
//       } catch (error) {
//         console.error("Error fetching and analyzing news:", error);
//       }
//     };

//     getNewsDetails();
//   }, []);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   console.log(finalData);

//   return (
//     <>
//       <div className='flex gap-2'>
//         <select value={value} className='' onChange={handleChange}>
//           <option value="All">All</option>
//           <option value="Politics">Politics</option>
//         </select>
//       </div>
//       <div className='max-w-5xl mx-auto flex flex-wrap justify-center'>
//         {finalData && finalData.map((item, key) => (
//           <Card item={item} value={value} key={key} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Home;


import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const fetchBiasAnalysis = async (headline) => {
  // const response = await fetch("http://localhost:8001/predict", {
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ text: headline })
  // });

  // const result = await response.json();
  // console.log("biasPrediction", result);

  // const biasScores = {
  //   "left": result.predictions.left,
  //   "center": result.predictions.center,
  //   "right": result.predictions.right
  // };

  return {
    "left":20,
    "center":30,
    "right":50,
  }
  // return biasScores;
};

const fetchSentimentAnalysis = async (headline) => {
  // const response = await fetch("http://localhost:8000/predict", {
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ text: headline })
  // });

  // const result = await response.json();
  // console.log("sentimentAnalysis", result);

  // const sentimentMap = {
  //   "negative": "right",
  //   "neutral": "center",
  //   "positive": "left"
  // };

  // const sentimentScores = result.predictions.reduce((acc, item) => {
  //   const [, label, score] = item.split(" ");
  //   const mappedLabel = sentimentMap[label];
  //   acc[mappedLabel] = parseFloat(score) * 100;
  //   return acc;
  // }, { "left": 0, "center": 0, "right": 0 });

return {
  "left":20,
  "center":30,
  "right":50,
}

  // return sentimentScores;
};

function Home() {
  const [newsData, setNewsData] = useState([]);
  const [value, setValue] = useState('All');
  const [finalData, setFinalData] = useState([]);

  const getNewsData = async () => {
  const res = await fetch('/api/testresponse');
  const data = await res.json();
  const newsDataArticles = data.articles;
  return newsDataArticles;
};

  // const getNewsData = async () => {
  //   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us${value === 'Politics' ? '&category=politics' : '&category=entertainment'}&apiKey=${import.meta.env.VITE_NEWSAPI_KEY}`);
  //   const data = await res.json();
  //   return data.articles;
  // };

  useEffect(() => {
    const getNewsDetails = async () => {
      try {
        const data = await getNewsData();
        setNewsData(data);
        const newsValues = data.map((item) => ({
          title: item.title,
          photoURL: item.urlToImage,
        }));

        const analyzedNews = await Promise.all(
          newsValues.map(async (news) => {
            const sentiment = await fetchSentimentAnalysis(news.title);
            const bias = await fetchBiasAnalysis(news.title);
            return {
              newsTitle: news.title,
              newsPhotoURL: news.photoURL,
              sentimentAnalysis: sentiment,
              biasAnalysis: bias,
            };
          })
        );

        setFinalData(analyzedNews);
      } catch (error) {
        console.error("Error fetching and analyzing news:", error);
      }
    };

    getNewsDetails();
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className='flex gap-2'>
        <select value={value} className='' onChange={handleChange}>
          <option value="All">All</option>
          <option value="Politics">Politics</option>
        </select>
      </div>
      <div className='max-w-5xl mx-auto flex flex-wrap justify-center'>
        {finalData && finalData.map((item, key) => (
          <Card item={item} value={value} key={key} />
        ))}
      </div>
    </>
  );
}

export default Home;
