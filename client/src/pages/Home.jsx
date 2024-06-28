import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const getNewsData = async () => {
  const res = await fetch('/api/testresponse');
  const data = await res.json();
  const newsDataArticles = data.articles;
  return newsDataArticles;
};

const fetchBiasAnalysis = async (headline) => {
  // const response = await fetch("https://api-inference.huggingface.co/models/bucketresearch/politicalBiasBERT", {
  //   headers: {
  //     Authorization: import.meta.env.VITE_SENTIMENTAL_KEY,
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ inputs: headline })
  // });
  // const result = await response.json();
  // console.log("biasAnalysis",result)
  // return result;
  return {
    "left":"20",
    "center":"30",
    "right":"50"
  };
};

const fetchSentimentAnalysis = async (headline) => {
  // const response = await fetch("https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest", {
  //   headers: {
  //     Authorization: import.meta.env.VITE_BIAS_KEY,
  //     "Content-Type": "application/json"
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ inputs: headline })
  // });
  // const result = await response.json();
  // console.log("senAnalysis",result);
  return {
    "left":"60",
    "center":"10",
    "right":"30"
  };
};


function Home() {
  const [newsData, setNewsData] = useState([]);
  const [value, setValue] = useState('All');
  const [finalData, setFinalData] = useState([]);

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
        // console.log(analyzedNews);
      } catch (error) {
        console.error("Error fetching and analyzing news:", error);
      }
    };

    getNewsDetails();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(finalData);

  return (
    <>

    <div className=' flex gap-2'>
      <select value={value} className='' onChange={handleChange}>
          <option value="All">All</option>
          <option value="Politics">Politics</option>
     </select>
    </div>
    <div className='max-w-5xl mx-auto flex flex-wrap justify-center'>
      {finalData && finalData.map((item,key) => (
      <Card item={item} value={value} key={key}/>
    ))}
    </div>
    </>
  );
}

export default Home;
